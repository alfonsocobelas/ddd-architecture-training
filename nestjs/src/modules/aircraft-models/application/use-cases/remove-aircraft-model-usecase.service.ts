import { Injectable } from '@nestjs/common'
import { EntityNotFoundError } from 'src/modules/shared/errors'
import { AircraftRepository } from 'src/modules/aircrafts/domain/aircraft.repository'
import { aircraftsOfModel } from 'src/modules/aircrafts/domain/specifications/aircrafts-of-model.specification'
import { RemoveAircraftModelInput } from '../dtos/remove-aircraft-model-input.dto'
import { AircraftModelRepository } from '../../domain/aircraft-model.repository'
import { AircraftModelId } from '../../domain/value-objects/aircraft-model-id.vo'

@Injectable()
export class RemoveAircraftModelUseCase {
  constructor(
    private readonly modelRepository: AircraftModelRepository,
    private readonly aircraftRepository: AircraftRepository
  ) {}

  async invoke(input: RemoveAircraftModelInput): Promise<void> {
    const modelId = AircraftModelId.create(input.id)

    const [model, aircraftCount] = await Promise.all([
      this.modelRepository.get(modelId),
      this.aircraftRepository.count(aircraftsOfModel(modelId))
    ])

    if (!model) {
      throw new EntityNotFoundError('AircraftModel', input.id)
    }

    model.ensureCanBeRemoved(aircraftCount)
    await this.modelRepository.remove(model.id)
  }
}
