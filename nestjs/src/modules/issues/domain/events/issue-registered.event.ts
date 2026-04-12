import { DomainEvent } from 'src/modules/shared/domain/event-bus/domain-event'

export class IssueRegisteredDomainEvent extends DomainEvent {
  static EVENT_NAME = 'issue.registered'

  readonly code: string
  readonly description: string
  readonly severity: string
  readonly requiresGrounding: boolean
  readonly partCategory: string
  readonly aircraftId?: string
  readonly engineId?: string

  constructor({
    eventId,
    occurredOn,
    aggregateId,
    code,
    description,
    severity,
    requiresGrounding,
    partCategory,
    aircraftId,
    engineId
  }: {
    eventId?: string
    occurredOn?: Date
    aggregateId: string
    code: string
    description: string
    severity: string
    requiresGrounding: boolean
    partCategory: string
    aircraftId?: string
    engineId?: string
  }) {
    super({ eventName: IssueRegisteredDomainEvent.EVENT_NAME, eventId, occurredOn, aggregateId })
    this.code = code
    this.description = description
    this.severity = severity
    this.requiresGrounding = requiresGrounding
    this.partCategory = partCategory
    this.aircraftId = aircraftId
    this.engineId = engineId
  }
}
