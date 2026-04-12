import { Injectable, OnModuleInit } from '@nestjs/common'
import { DiscoveryService, Reflector } from '@nestjs/core'
import { EventBus } from '../../domain/event-bus/event-bus'
import { DomainEventSubscribers } from '../../domain/event-bus/domain-event-subscribers'
import { IS_EVENT_SUBSCRIBER } from '../../application/event-bus/event-subscriber.decorator'

@Injectable()
export class EventBusSubscriberConfigurer implements OnModuleInit {
  constructor(
    private readonly discoveryService: DiscoveryService,
    private readonly reflector: Reflector,
    private readonly eventBus: EventBus
  ) {}

  onModuleInit() {
    const providers = this.discoveryService.getProviders()

    const subscribers = providers
      .filter((wrapper) => {
        return wrapper.instance &&
          wrapper.metatype &&
          this.reflector.get(IS_EVENT_SUBSCRIBER, wrapper.metatype)
      })
      .map((wrapper) => wrapper.instance)

    this.eventBus.addSubscribers(new DomainEventSubscribers(subscribers))
  }
}
