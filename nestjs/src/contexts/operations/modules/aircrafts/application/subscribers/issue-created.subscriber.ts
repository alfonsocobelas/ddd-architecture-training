import { Injectable } from '@nestjs/common'
import { EventSubscriber } from 'src/contexts/shared/application/event-bus/event-subscriber.decorator'
import { DomainEventClass } from 'src/contexts/shared/domain/event-bus/domain-event'
import { IssuePartCategoryEnum } from 'src/contexts/maintenance/modules/issues/domain/issue-enums'
import { DomainEventSubscriber } from 'src/contexts/shared/domain/event-bus/domain-event-subscriber'
import { IssueRegisteredDomainEvent } from 'src/contexts/maintenance/modules/issues/domain/events/issue-registered.event'

@Injectable()
@EventSubscriber()
export class AircraftIssueCreatedSubscriber implements DomainEventSubscriber<IssueRegisteredDomainEvent> {
  subscribedTo(): DomainEventClass[] {
    return [IssueRegisteredDomainEvent]
  }

  async on(event: IssueRegisteredDomainEvent): Promise<void> {
    if (event.partCategory !== IssuePartCategoryEnum.AVIONICS) {
      return
    }
    // lógica específica para aircraft
    console.log('Issue de aircraft creada:', event.aircraftId)
  }
}
