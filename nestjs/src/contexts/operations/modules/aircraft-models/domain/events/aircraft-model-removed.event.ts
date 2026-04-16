import { DomainEvent } from 'src/contexts/shared/domain/event-bus/domain-event'

export class AircraftModelRemovedDomainEvent extends DomainEvent {
  static EVENT_NAME = 'aircraft_model.removed'

  readonly name: string
  readonly code: string
  readonly manufacturer: string

  constructor({
    eventId,
    occurredOn,
    aggregateId,
    name,
    code,
    manufacturer
  }: {
    eventId?: string
    occurredOn?: Date
    aggregateId: string
    name: string
    code: string
    manufacturer: string
  }) {
    super({ eventName: AircraftModelRemovedDomainEvent.EVENT_NAME, eventId, occurredOn, aggregateId })
    this.name = name
    this.code = code
    this.manufacturer = manufacturer
  }

  public toPrimitives() {
    throw new Error('Method not implemented.')
  }
}
