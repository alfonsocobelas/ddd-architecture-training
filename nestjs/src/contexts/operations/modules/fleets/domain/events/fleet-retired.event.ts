import { DomainEvent } from 'src/contexts/shared/domain/event-bus/domain-event'

export class FleetRetiredDomainEvent extends DomainEvent {
  static EVENT_NAME = 'fleet.retired'

  readonly name: string
  readonly companyId: string
  readonly aircraftIds: string[]

  constructor({
    eventId,
    occurredOn,
    aggregateId,
    name,
    companyId,
    aircraftIds
  }: {
    eventId?: string
    occurredOn?: Date
    aggregateId: string
    name: string
    companyId: string
    aircraftIds: string[]
  }) {
    super({ eventName: FleetRetiredDomainEvent.EVENT_NAME, eventId, occurredOn, aggregateId })
    this.name = name
    this.companyId = companyId
    this.aircraftIds = aircraftIds
  }

  public toPrimitives() {
    throw new Error('Method not implemented.')
  }
}
