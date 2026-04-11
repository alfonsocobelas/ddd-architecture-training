import { Injectable } from '@nestjs/common'
import { AircraftModelRepository } from 'src/modules/aircraft-models/domain/aircraft-model.repository'
import { AlreadyExistsError, EntityNotFoundError } from 'src/modules/shared/errors'
import { RegisterAircraftInput } from '../dtos/register-aircraft-input.dto'
import { Aircraft } from '../../domain/aircraft'
import { withTailNumber } from '../../domain/specifications/aircraft-with-tail-number.specification'
import { AircraftRepository } from '../../domain/aircraft.repository'
import { AircraftInputMapper } from '../../domain/aircraft-factory'

@Injectable()
export class RegisterAircraftUseCase {
  constructor(
    private readonly aircraftRepository: AircraftRepository,
    private readonly modelRepository: AircraftModelRepository
  ) {}

  async invoke(input: RegisterAircraftInput): Promise<void> {
    const props = AircraftInputMapper.toDomain(input)

    const [model, aircraftExists] = await Promise.all([
      this.modelRepository.get(props.modelId),
      this.aircraftRepository.exists(withTailNumber(props.tailNumber))
    ])

    if (!model) {
      throw new EntityNotFoundError('AircraftModel', props.modelId.value)
    }

    if (aircraftExists) {
      throw new AlreadyExistsError('Aircraft', 'tailNumber', props.tailNumber.value)
    }

    const aircraft = Aircraft.create(props)
    await this.aircraftRepository.register(aircraft)
  }
}
