import { DomainEvent } from 'src/contexts/shared/domain/event-bus/domain-event'

export class FleetAircraftAddedDomainEvent extends DomainEvent {
  static EVENT_NAME = 'fleet.aircraft_added'

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
    super({ eventName: FleetAircraftAddedDomainEvent.EVENT_NAME, eventId, occurredOn, aggregateId })
    this.aircraftId = aircraftId
  }

  public toPrimitives() {
    throw new Error('Method not implemented.')
  }
}
