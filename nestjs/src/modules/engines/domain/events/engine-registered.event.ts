import { DomainEvent } from 'src/modules/shared/domain/event-bus/domain-event'

export class EngineRegisteredDomainEvent extends DomainEvent {
  static EVENT_NAME = 'engine.registered'

  readonly serialNumber: string
  readonly healthScore: number
  readonly flyingHoursAccumulated: number
  readonly cyclesSinceLastOverhaul: number
  readonly isInstalled: boolean
  readonly status: string

  constructor({
    eventId,
    occurredOn,
    aggregateId,
    serialNumber,
    healthScore,
    flyingHoursAccumulated,
    cyclesSinceLastOverhaul,
    isInstalled,
    status
  }: {
    eventId?: string
    occurredOn?: Date
    aggregateId: string
    serialNumber: string
    healthScore: number
    flyingHoursAccumulated: number
    cyclesSinceLastOverhaul: number
    isInstalled: boolean
    status: string
  }) {
    super({ eventName: EngineRegisteredDomainEvent.EVENT_NAME, eventId, occurredOn, aggregateId })
    this.serialNumber = serialNumber
    this.healthScore = healthScore
    this.flyingHoursAccumulated = flyingHoursAccumulated
    this.cyclesSinceLastOverhaul = cyclesSinceLastOverhaul
    this.isInstalled = isInstalled
    this.status = status
  }

  public toPrimitives() {
    throw new Error('Method not implemented.')
  }
}
