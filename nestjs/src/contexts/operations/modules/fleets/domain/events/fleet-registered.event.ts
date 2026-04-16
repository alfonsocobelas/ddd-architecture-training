import { DomainEvent } from 'src/contexts/shared/domain/event-bus/domain-event'

export class FleetRegisteredDomainEvent extends DomainEvent {
  static EVENT_NAME = 'fleet.registered'

  readonly companyId: string
  readonly name: string
  readonly type: string
  readonly operationRegion: string
  readonly maintenanceBudget: number
  readonly aircraftIds: string[]
  readonly status: string

  constructor({
    eventId,
    occurredOn,
    aggregateId,
    companyId,
    name,
    type,
    operationRegion,
    maintenanceBudget,
    aircraftIds,
    status
  }: {
    eventId?: string
    occurredOn?: Date
    aggregateId: string
    companyId: string
    name: string
    type: string
    operationRegion: string
    maintenanceBudget: number
    aircraftIds: string[]
    status: string
  }) {
    super({ eventName: FleetRegisteredDomainEvent.EVENT_NAME, eventId, occurredOn, aggregateId })
    this.companyId = companyId
    this.name = name
    this.type = type
    this.operationRegion = operationRegion
    this.maintenanceBudget = maintenanceBudget
    this.aircraftIds = aircraftIds
    this.status = status
  }

  public toPrimitives() {
    throw new Error('Method not implemented.')
  }
}
