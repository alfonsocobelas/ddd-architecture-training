import { DomainEvent } from 'src/modules/shared/domain/event-bus/domain-event'

export class FleetAircraftRetiredDomainEvent extends DomainEvent {
  static EVENT_NAME = 'fleet.aircraft.retired'

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
    super({ eventName: FleetAircraftRetiredDomainEvent.EVENT_NAME, eventId, occurredOn, aggregateId })
    this.aircraftId = aircraftId
  }
}
