import { Injectable } from '@nestjs/common'
import { EventSubscriber } from 'src/contexts/shared/application/event-bus/event-subscriber.decorator'
import { DomainEventClass } from 'src/contexts/shared/domain/event-bus/domain-event'
import { DomainEventSubscriber } from 'src/contexts/shared/domain/event-bus/domain-event-subscriber'
import { IssuePartCategoryEnum } from 'src/contexts/maintenance/modules/issues/domain/issue-enums'
import { IssueRegisteredDomainEvent } from 'src/contexts/maintenance/modules/issues/domain/events/issue-registered.event'

@Injectable()
@EventSubscriber()
export class EngineIssueCreatedSubscriber implements DomainEventSubscriber<IssueRegisteredDomainEvent> {
  subscribedTo(): DomainEventClass[] {
    return [IssueRegisteredDomainEvent]
  }

  async on(event: IssueRegisteredDomainEvent): Promise<void> {
    if (event.partCategory !== IssuePartCategoryEnum.ENGINE) {
      return
    }
    // lógica específica para engine
    // o llamar al caso de uso?
    console.log('Issue de engine creada:', event.engineId)
  }
}
