import { Global, Module } from '@nestjs/common'
import { DiscoveryModule } from '@nestjs/core'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { EventBus } from 'src/modules/shared/domain/event-bus/event-bus'
import { InMemoryAsyncEventBus } from 'src/modules/shared/infrastructure/event-bus/in-memory/in-memory-async-event-bus'
import { AircraftIssueCreatedSubscriber } from 'src/modules/aircrafts/application/subscribers/issue-created.subscriber'
import { EventBusSubscriberConfigurer } from './domain-event-subscribers-configurer'

@Global()
@Module({
  imports: [
    DiscoveryModule,
    EventEmitterModule.forRoot({
      wildcard: true,
      delimiter: '.'
    })
  ],
  providers: [
    EventBusSubscriberConfigurer,
    InMemoryAsyncEventBus,
    {
      provide: EventBus,
      useExisting: InMemoryAsyncEventBus
    },
    AircraftIssueCreatedSubscriber
  ],
  exports: [EventBus]
})
export class EventBusModule {}
