import { DomainEvent } from 'src/contexts/shared/domain/event-bus/domain-event'

export class CompanyRegisteredDomainEvent extends DomainEvent {
  static EVENT_NAME = 'company.registered'

  readonly name: string

  constructor({
    eventId,
    occurredOn,
    aggregateId,
    name
  }: {
    eventId?: string
    occurredOn?: Date
    aggregateId: string
    name: string
  }) {
    super({ eventName: CompanyRegisteredDomainEvent.EVENT_NAME, eventId, occurredOn, aggregateId })
    this.name = name
  }

  public toPrimitives() {
    throw new Error('Method not implemented.')
  }
}
