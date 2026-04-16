import { DomainEvent } from 'src/contexts/shared/domain/event-bus/domain-event'

export class AircraftAddedToFleetDomainEvent extends DomainEvent {
  static EVENT_NAME = 'aircraft.added_to_fleet'

  readonly fleetId: string

  constructor({
    eventId,
    occurredOn,
    aggregateId,
    fleetId
  }: {
    eventId?: string
    occurredOn?: Date
    aggregateId: string
    fleetId: string
  }) {
    super({ eventName: AircraftAddedToFleetDomainEvent.EVENT_NAME, eventId, occurredOn, aggregateId })
    this.fleetId = fleetId
  }

  public toPrimitives() {
    throw new Error('Method not implemented.')
  }
}
