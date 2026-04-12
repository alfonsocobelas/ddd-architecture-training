import { DomainEvent } from 'src/modules/shared/domain/event-bus/domain-event'

export class EngineInstalledInAircraftDomainEvent extends DomainEvent {
  static EVENT_NAME = 'engine.installed_in_aircraft'

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
    super({ eventName: EngineInstalledInAircraftDomainEvent.EVENT_NAME, eventId, occurredOn, aggregateId })
    this.aircraftId = aircraftId
  }
}
