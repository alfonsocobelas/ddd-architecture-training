import { Module, forwardRef } from '@nestjs/common'
import { AircraftModelsModule } from '../aircraft-models/aircraft-models.module'
import { EnginesModule } from '../engines/engines.module'
import { FindAircraftsInMaintenanceHandler } from './application/handlers/find-aircrafts-in-maintenance.handler'
import { GetAircraftHandler } from './application/handlers/get-aircraft.handler'
import { InstallEngineInAircraftHandler } from './application/handlers/install-engine-in-aircraft.handler'
import { RegisterAircraftHandler } from './application/handlers/register-aircraft.handler'
import { RemoveAircraftHandler } from './application/handlers/remove-aircraft.handler'
import { RemoveEngineFromAircraftHandler } from './application/handlers/remove-engine-from-aircraft.handler'
import { SearchAircraftsHandler } from './application/handlers/search-aircrafts.handler'
import { FindAircraftsInMaintenanceUseCase } from './application/use-cases/find-aircrafts-in-maintenance-usecase.service'
import { GetAircraftUseCase } from './application/use-cases/get-aircraft-usecase.service'
import { InstallEngineInAircraftUsecase } from './application/use-cases/install-engine-in-aircraft-usecase.service'
import { RegisterAircraftUseCase } from './application/use-cases/register-aircraft-usecase.service'
import { RemoveAircraftUseCase } from './application/use-cases/remove-aircraft-usecase.service'
import { RemoveEngineFromAircraftUsecase } from './application/use-cases/remove-engine-from-aircraft-usecase.service'
import { SearchAircraftsUseCase } from './application/use-cases/search-aircrafts-usecase.service'
import { AircraftRepository } from './domain/aircraft.repository'
import { AircraftsController } from './infrastructure/entrypoints/aircrafts.controller'
import { TypeOrmAircraftRepository } from './infrastructure/persistence/typeorm/typeorm-aircraft.repository'

@Module({
  imports: [
    forwardRef(() => AircraftModelsModule),
    EnginesModule
  ],
  controllers: [AircraftsController],
  providers: [
    // Handlers
    RegisterAircraftHandler,
    GetAircraftHandler,
    FindAircraftsInMaintenanceHandler,
    InstallEngineInAircraftHandler,
    RemoveEngineFromAircraftHandler,
    RemoveAircraftHandler,
    SearchAircraftsHandler,
    // Use Cases
    RegisterAircraftUseCase,
    GetAircraftUseCase,
    FindAircraftsInMaintenanceUseCase,
    InstallEngineInAircraftUsecase,
    RemoveEngineFromAircraftUsecase,
    RemoveAircraftUseCase,
    SearchAircraftsUseCase,
    // Repositories
    {
      provide: AircraftRepository,
      useClass: TypeOrmAircraftRepository
    }
  ],
  exports: [AircraftRepository]
})
export class AircraftsModule {}
