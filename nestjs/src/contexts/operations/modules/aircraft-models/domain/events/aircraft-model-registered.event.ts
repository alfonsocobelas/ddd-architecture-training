import { DomainEvent } from 'src/contexts/shared/domain/event-bus/domain-event'

export class AircraftModelRegisteredDomainEvent extends DomainEvent {
  static EVENT_NAME = 'aircraft_model.registered'

  readonly name: string
  readonly code: string
  readonly manufacturer: string
  readonly passengerCapacity: number
  readonly numEngines: number
  readonly status: string

  constructor({
    eventId,
    occurredOn,
    aggregateId,
    name,
    code,
    manufacturer,
    passengerCapacity,
    numEngines,
    status
  }: {
    eventId?: string
    occurredOn?: Date
    aggregateId: string
    name: string
    code: string
    manufacturer: string
    passengerCapacity: number
    numEngines: number
    status: string
  }) {
    super({ eventName: AircraftModelRegisteredDomainEvent.EVENT_NAME, eventId, occurredOn, aggregateId })
    this.name = name
    this.code = code
    this.manufacturer = manufacturer
    this.passengerCapacity = passengerCapacity
    this.numEngines = numEngines
    this.status = status
  }

  public toPrimitives() {
    throw new Error('Method not implemented.')
  }
}
