import { Module } from '@nestjs/common'
import { CoreConfigModule } from './modules/shared/infrastructure/config/config.module'
import { PersistenceModule } from './modules/shared/infrastructure/persistence/persistence.module'
import { RateLimitModule } from './modules/shared/infrastructure/rate-limit/rate-limit.module'
import { AircraftModelsModule } from './modules/aircraft-models/aircraft-models.module'
import { AircraftsModule } from './modules/aircrafts/aircrafts.module'
import { CompaniesModule } from './modules/companies/companies.module'
import { EnginesModule } from './modules/engines/engines.module'
import { FleetsModule } from './modules/fleets/fleets.module'
import { IssuesModule } from './modules/issues/issues.module'

@Module({
  imports: [
    // infrastructure
    CoreConfigModule,
    PersistenceModule,
    RateLimitModule,
    // modules
    AircraftModelsModule,
    AircraftsModule,
    CompaniesModule,
    EnginesModule,
    FleetsModule,
    IssuesModule
  ]
})
export class AppModule {}
