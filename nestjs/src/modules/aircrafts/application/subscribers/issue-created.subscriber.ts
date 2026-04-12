import { Injectable } from '@nestjs/common'
import { EventSubscriber } from 'src/modules/shared/application/event-bus/event-subscriber.decorator'
import { DomainEventClass } from 'src/modules/shared/domain/event-bus/domain-event'
import { IssuePartCategoryEnum } from 'src/modules/issues/domain/issue-enums'
import { DomainEventSubscriber } from 'src/modules/shared/domain/event-bus/domain-event-subscriber'
import { IssueRegisteredDomainEvent } from 'src/modules/issues/domain/events/issue-registered.event'

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
