import { DomainEvent } from 'src/modules/shared/domain/event-bus/domain-event'

export class AircraftRetiredFromFleetDomainEvent extends DomainEvent {
  static EVENT_NAME = 'aircraft.retired_from_fleet'

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
    super({ eventName: AircraftRetiredFromFleetDomainEvent.EVENT_NAME, eventId, occurredOn, aggregateId })
    this.fleetId = fleetId
  }

  public toPrimitives() {
    throw new Error('Method not implemented.')
  }
}
