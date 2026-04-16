import { DomainEvent } from 'src/contexts/shared/domain/event-bus/domain-event'

export class CompanyRemovedDomainEvent extends DomainEvent {
  static EVENT_NAME = 'company.removed'

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
    super({ eventName: CompanyRemovedDomainEvent.EVENT_NAME, eventId, occurredOn, aggregateId })
    this.name = name
  }

  public toPrimitives() {
    throw new Error('Method not implemented.')
  }
}
