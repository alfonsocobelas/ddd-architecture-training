import { Global, Module } from '@nestjs/common'
import { DiscoveryModule } from '@nestjs/core'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { EventBus } from 'src/contexts/shared/domain/event-bus/event-bus'
import { InMemoryAsyncEventBus } from 'src/contexts/shared/infrastructure/event-bus/in-memory/in-memory-async-event-bus'
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
    }
  ],
  exports: [EventBus]
})
export class EventBusModule {}
