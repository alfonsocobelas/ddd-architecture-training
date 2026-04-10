import { Injectable } from '@nestjs/common'
import { GetAircraftModelInput } from '../dtos/get-aircraft-model-input.dto'
import { GetAircraftModelOutput } from '../dtos/get-aircraft-model-output.dto'
import { AircraftModelId } from '../../domain/value-objects/aircraft-model-id.vo'
import { AircraftModelRepository } from '../../domain/aircraft-model.repository'
import { EntityNotFoundError } from '../../../shared/errors'

@Injectable()
export class GetAircraftModelUseCase {
  constructor(
    private readonly repository: AircraftModelRepository
  ) {}

  async invoke(input: GetAircraftModelInput): Promise<GetAircraftModelOutput> {
    const modelId = AircraftModelId.create(input.id)
    const model = await this.repository.get(modelId)

    if (!model) {
      throw new EntityNotFoundError('AircraftModel', input.id)
    }

    return model.toPrimitives()
  }
}
