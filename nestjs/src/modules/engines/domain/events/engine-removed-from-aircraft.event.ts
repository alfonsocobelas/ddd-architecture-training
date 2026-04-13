import { DomainEvent } from 'src/modules/shared/domain/event-bus/domain-event'

export class EngineRemovedFromAircraftDomainEvent extends DomainEvent {
  static EVENT_NAME = 'engine.removed_from_aircraft'

  readonly aircraftId: string

  constructor({
    eventId,
    occurredOn,
    aggregateId,
    aircraftId
  }: {
    eventId?: string
    occurredOn?: Date
    aggregateId: string
    aircraftId: string
  }) {
    super({ eventName: EngineRemovedFromAircraftDomainEvent.EVENT_NAME, eventId, occurredOn, aggregateId })
    this.aircraftId = aircraftId
  }

  public toPrimitives() {
    throw new Error('Method not implemented.')
  }
}
