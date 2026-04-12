import { DomainEvent } from 'src/modules/shared/domain/event-bus/domain-event'

export class AircraftRemovedDomainEvent extends DomainEvent {
  static EVENT_NAME = 'aircraft.removed'

  readonly modelId: string
  readonly tailNumber: string

  constructor({
    eventId,
    occurredOn,
    aggregateId,
    modelId,
    tailNumber,
    engineIds,
    fleetId
  }: {
    eventId?: string
    occurredOn?: Date
    aggregateId: string
    modelId: string
    tailNumber: string
    engineIds: string[]
    fleetId?: string
  }) {
    super({ eventName: AircraftRemovedDomainEvent.EVENT_NAME, eventId, occurredOn, aggregateId })
    this.modelId = modelId
    this.tailNumber = tailNumber
  }

  public toPrimitives() {
    throw new Error('Method not implemented.')
  }
}
