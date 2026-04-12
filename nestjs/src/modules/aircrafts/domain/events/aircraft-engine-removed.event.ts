import { DomainEvent } from 'src/modules/shared/domain/event-bus/domain-event'

export class AircraftEngineRemovedDomainEvent extends DomainEvent {
  static EVENT_NAME = 'aircraft.engine_removed'

  readonly engineId: string

  constructor({
    eventId,
    occurredOn,
    aggregateId,
    engineId
  }: {
    eventId?: string
    occurredOn?: Date
    aggregateId: string
    engineId: string
  }) {
    super({ eventName: AircraftEngineRemovedDomainEvent.EVENT_NAME, eventId, occurredOn, aggregateId })
    this.engineId = engineId
  }
}
