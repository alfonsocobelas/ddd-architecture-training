import { EntityTarget } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { Nullable } from 'src/modules/shared/nullable'
import { Criteria } from 'src/modules/shared/domain/query/criteria'
import { TypeOrmRepository } from 'src/modules/shared/infrastructure/persistence/typeorm/typeorm.repository'
import { TypeOrmCriteriaConverter } from 'src/modules/shared/infrastructure/persistence/typeorm/typeorm-criteria-converter'
import { TypeOrmTransactionManager } from 'src/modules/shared/infrastructure/persistence/typeorm/typeorm-transaction-manager'
import { Engine } from 'src/modules/engines/domain/engine'
import { EngineRepository } from 'src/modules/engines/domain/engine.repository'
import { EngineMapper } from './typeorm-engine.mapper'
import { EngineEntity } from './typeorm-engine.entity'

@Injectable()
export class TypeOrmEngineRepository
  extends TypeOrmRepository<EngineEntity>
  implements EngineRepository
{
  constructor(txManager: TypeOrmTransactionManager, converter: TypeOrmCriteriaConverter) {
    super(txManager, converter)
  }

  protected entitySchema(): EntityTarget<EngineEntity> {
    return EngineEntity
  }

  async register(engine: Engine): Promise<void> {
    const repository = this.repository()
    const entity = EngineMapper.toPersistence(engine)

    await repository.insert(entity)
  }

  async save(engines: Engine | Engine[]): Promise<void> {
    const entities = Array.isArray(engines)
      ? engines.map(EngineMapper.toPersistence)
      : EngineMapper.toPersistence(engines)

    await this.persist(entities)
  }

  async get(engineId: string): Promise<Nullable<Engine>> {
    const repository = this.repository()
    const entity = await repository.findOneBy({ id: engineId })

    if (!entity) {
      return null
    }

    return EngineMapper.toDomain(entity)
  }

  async matching(criteria: Criteria): Promise<Engine[]> {
    const entities = await this.searchByCriteria(criteria)

    return entities.map(entity => EngineMapper.toDomain(entity))
  }

  async exists(serialNumber: string): Promise<boolean> {
    const repository = this.repository()

    const existEntity = await repository
      .createQueryBuilder('engine')
      .where('engine.serialNumber = :serialNumber', { serialNumber })
      .select('1')
      .getExists()

    return existEntity
  }
}
