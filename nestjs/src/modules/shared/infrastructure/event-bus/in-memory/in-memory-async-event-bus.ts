import { Injectable } from '@nestjs/common'
import { EventEmitter2 } from '@nestjs/event-emitter'
import { EventBus } from 'src/modules/shared/domain/event-bus/event-bus'
import { DomainEvent } from 'src/modules/shared/domain/event-bus/domain-event'
import { DomainEventSubscribers } from 'src/modules/shared/domain/event-bus/domain-event-subscribers'

@Injectable()
export class InMemoryAsyncEventBus extends EventEmitter2 implements EventBus {
  async publish(events: DomainEvent[]): Promise<void> {
    for (const event of events) {
      this.emit(event.eventName, event)
    }
  }

  addSubscribers(subscribers: DomainEventSubscribers): void {
    subscribers.items.forEach(subscriber => {
      subscriber.subscribedTo().forEach(event => {
        this.on(event.EVENT_NAME, subscriber.on.bind(subscriber))
      })
    })
  }
}
