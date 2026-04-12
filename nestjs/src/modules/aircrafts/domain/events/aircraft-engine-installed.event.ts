import { DomainEvent } from 'src/modules/shared/domain/event-bus/domain-event'

export class AircraftEngineInstalledDomainEvent extends DomainEvent {
  static EVENT_NAME = 'aircraft.engine_installed'

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
    super({ eventName: AircraftEngineInstalledDomainEvent.EVENT_NAME, eventId, occurredOn, aggregateId })
    this.engineId = engineId
  }

  public toPrimitives() {
    throw new Error('Method not implemented.')
  }
}
