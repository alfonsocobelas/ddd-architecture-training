import { Module } from '@nestjs/common'
import { GetEngineHandler } from './application/handler/get-engine.handler'
import { RegisterEngineHandler } from './application/handler/register-engine.handler'
import { SearchEnginesHandler } from './application/handler/search-engines.handler'
import { GetEngineUseCase } from './application/use-cases/get-engine-usecase.service'
import { RegisterEngineUseCase } from './application/use-cases/register-engine-usecase.service'
import { SearchEnginesUseCase } from './application/use-cases/search-engines-usecase.service'
import { EngineRepository } from './domain/engine.repository'
import { EnginesController } from './infrastructure/entrypoints/engines.controller'
import { TypeOrmEngineRepository } from './infrastructure/persistence/typeorm/typeorm-engine.repository'

@Module({
  controllers: [EnginesController],
  providers: [
    // Handlers
    RegisterEngineHandler,
    GetEngineHandler,
    SearchEnginesHandler,
    // Use Cases
    RegisterEngineUseCase,
    GetEngineUseCase,
    SearchEnginesUseCase,
    // Repositories
    {
      provide: EngineRepository,
      useClass: TypeOrmEngineRepository
    }
  ],
  exports: [EngineRepository]
})
export class EnginesModule {}
