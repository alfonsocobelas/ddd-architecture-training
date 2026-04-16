import { Module } from '@nestjs/common'
import { TypeOrmAircraftModelRepository } from 'src/contexts/operations/modules/aircraft-models/infrastructure/persistence/typeorm/typeorm-aircraft-model.repository'
import { TypeOrmAircraftRepository } from 'src/contexts/operations/modules/aircrafts/infrastructure/persistence/typeorm/typeorm-aircraft.repository'
import { TypeOrmCompanyRepository } from 'src/contexts/operations/modules/companies/infrastructure/persistence/typeorm/typeorm-company.repository'
import { TypeOrmEngineRepository } from 'src/contexts/operations/modules/engines/infrastructure/persistence/typeorm/typeorm-engine.repository'
import { TypeOrmFleetRepository } from 'src/contexts/operations/modules/fleets/infrastructure/persistence/typeorm/typeorm-fleet.repository'
import { TypeOrmIssueRepository } from 'src/contexts/maintenance/modules/issues/infrastructure/persistence/typeorm/typeorm-issue.repository'

@Module({
  providers: [
    TypeOrmAircraftModelRepository,
    TypeOrmAircraftRepository,
    TypeOrmCompanyRepository,
    TypeOrmEngineRepository,
    TypeOrmFleetRepository,
    TypeOrmIssueRepository
  ],
  exports: [
    TypeOrmAircraftModelRepository,
    TypeOrmAircraftRepository,
    TypeOrmCompanyRepository,
    TypeOrmEngineRepository,
    TypeOrmFleetRepository,
    TypeOrmIssueRepository
  ]
})
export class TestRepositoriesModule {}
