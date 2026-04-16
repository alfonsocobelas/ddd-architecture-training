import { DomainEvent } from 'src/contexts/shared/domain/event-bus/domain-event'

export class AircraftRegisteredDomainEvent extends DomainEvent {
  static EVENT_NAME = 'aircraft.registered'

  readonly modelId: string
  readonly tailNumber: string
  readonly engineIds: string[]
  readonly status: string
  readonly isActive: boolean
  readonly totalFlightHours: number
  readonly fuelLevelPercentage: number

  constructor({
    eventId,
    occurredOn,
    aggregateId,
    modelId,
    tailNumber,
    engineIds,
    status,
    isActive,
    totalFlightHours,
    fuelLevelPercentage
  }: {
    eventId?: string
    occurredOn?: Date
    aggregateId: string
    modelId: string
    tailNumber: string
    engineIds: string[]
    status: string
    isActive: boolean
    totalFlightHours: number
    fuelLevelPercentage: number
  }) {
    super({ eventName: AircraftRegisteredDomainEvent.EVENT_NAME, eventId, occurredOn, aggregateId })
    this.modelId = modelId
    this.tailNumber = tailNumber
    this.engineIds = engineIds
    this.status = status
    this.isActive = isActive
    this.totalFlightHours = totalFlightHours
    this.fuelLevelPercentage = fuelLevelPercentage
  }

  public toPrimitives() {
    throw new Error('Method not implemented.')
  }
}
