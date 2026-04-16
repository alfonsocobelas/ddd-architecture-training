import { DomainEventClass } from '../../domain/event-bus/domain-event'
import { DomainEventSubscribers } from '../../domain/event-bus/domain-event-subscribers'

type DomainEventJSON = {
  id: string
  type: string
  aggregateId: string
  attributes: string
  occurred_on: string
}

export class DomainEventDeserializer extends Map<string, DomainEventClass> {
  public static configure(subscribers: DomainEventSubscribers) {
    const mapping = new DomainEventDeserializer()

    subscribers.items.forEach(subscriber => {
      subscriber.subscribedTo().forEach(mapping.registerEvent.bind(mapping))
    })

    return mapping
  }

  private registerEvent(domainEvent: DomainEventClass) {
    const eventName = domainEvent.EVENT_NAME
    this.set(eventName, domainEvent)
  }

  public deserialize(event: string) {
    const eventData = JSON.parse(event).data as DomainEventJSON
    const { id, type, aggregateId, attributes, occurred_on } = eventData
    const eventClass = super.get(type)

    if (!eventClass) {
      // TODO: Create a specific Error class
      throw Error(`DomainEvent mapping not found for event ${type}`)
    }

    return eventClass.fromPrimitives({
      aggregateId,
      attributes,
      occurredOn: new Date(occurred_on),
      eventId: id
    })
  }
}
