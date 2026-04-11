import { Injectable } from '@nestjs/common'
import { EntityNotFoundError } from 'src/modules/shared/errors'
import { AircraftRepository } from 'src/modules/aircrafts/domain/aircraft.repository'
import { EngineRepository } from 'src/modules/engines/domain/engine.repository'
import { RemoveEngineFromAircraftInput } from '../dtos/remove-engine-from-aircraft-input.dto'
import { EngineId } from 'src/modules/shared/domain/value-objects/engines/engine-id.vo'
import { AircraftId } from 'src/modules/shared/domain/value-objects/aircrafts/aircraft-id.vo'

@Injectable()
export class RemoveEngineFromAircraftUsecase {
  constructor(
    private readonly engineRepository: EngineRepository,
    private readonly aircraftRepository: AircraftRepository
  ) {}

  async invoke(input: RemoveEngineFromAircraftInput): Promise<void> {
    const engineId = EngineId.create(input.engineId)
    const aircraftId = AircraftId.create(input.aircraftId)

    const [engine, aircraft] = await Promise.all([
      this.engineRepository.get(engineId),
      this.aircraftRepository.get(aircraftId)
    ])

    if (!engine) {
      throw new EntityNotFoundError('Engine', input.engineId)
    }

    if (!aircraft) {
      throw new EntityNotFoundError('Aircraft', input.aircraftId)
    }

    aircraft.removeEngine(engineId)
    engine.removeFromAircraft(aircraftId)

    await Promise.all([
      this.aircraftRepository.save(aircraft),
      this.engineRepository.save(engine)
    ])
  }
}
