import { Engine } from 'src/modules/engines/domain/engine'
import { Nullable } from 'src/modules/shared/types'
import { Criteria } from 'src/modules/shared/domain/query/criteria'
import { EngineId } from 'src/modules/shared/domain/value-objects/engines/engine-id.vo'
import { EngineRepository } from 'src/modules/engines/domain/engine.repository'
import { EngineSerialNumber } from 'src/modules/engines/domain/value-objects/engine-serial-number.vo'
import { MockRepository } from '../../shared/mocks/mock.repository'

export class EngineRepositoryMock
  extends MockRepository<Engine>
  implements EngineRepository
{
  register(engine: Engine): Promise<void> {
    return this.getMock('register')(engine)
  }

  get(engineId: EngineId): Promise<Nullable<Engine>> {
    return this.getMock('get')(engineId)
  }

  save(engines: Engine | Engine[]): Promise<void> {
    return this.getMock('save')(engines)
  }

  exists(serialNumber: EngineSerialNumber): Promise<boolean> {
    return this.getMock('exists')(serialNumber)
  }

  find(engineIds: EngineId[]): Promise<Engine[]> {
    return this.getMock('find')(engineIds)
  }

  matching(criteria: Criteria): Promise<Engine[]> {
    return this.getMock('matching')(criteria)
  }

  // Helpers
  givenFound(engine: Engine): void {
    this.setMockResult('get', engine)
  }

  givenNotFound(): void {
    this.setMockResult('get', null)
  }

  givenFoundMany(engines: Engine[]): void {
    this.setMockResult('find', engines)
  }

  givenAlreadyExists(): void {
    this.setMockResult('exists', true)
  }

  givenDoesNotExist(): void {
    this.setMockResult('exists', false)
  }

  whenRegisterSuccess(): void {
    this.setMockResult('register', undefined)
  }

  whenSaveSuccess(): void {
    this.setMockResult('save', undefined)
  }

  givenMatching(engines: Engine[]): void {
    this.setMockResult('matching', engines)
  }
}
