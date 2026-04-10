import { Injectable } from '@nestjs/common'
import { AlreadyExistsError } from 'src/modules/shared/errors'
import { RegisterAircraftModelInput } from '../dtos/register-aircraft-model-input.dto'
import { AircraftModel } from '../../domain/aircraft-model'
import { AircraftModelRepository } from '../../domain/aircraft-model.repository'
import { AircraftModelId } from '../../domain/value-objects/aircraft-model-id.vo'
import { AircraftModelCode } from '../../domain/value-objects/aircraft-model-code.vo'
import { AircraftModelName } from '../../domain/value-objects/aircraft-model-name.vo'
import { AircraftModelNumEngines } from '../../domain/value-objects/aircraft-model-num-engines.vo'
import { AircraftModelManufacturer } from '../../domain/value-objects/aircraft-model-manufacturer.vo'
import { AircraftModelPassengerCapacity } from '../../domain/value-objects/aircraft-model-passenger-capacity.vo'

@Injectable()
export class RegisterAircraftModelUseCase {
  constructor(
    private readonly repository: AircraftModelRepository
  ) {}

  async invoke(input: RegisterAircraftModelInput): Promise<void> {
    const code = AircraftModelCode.create(input.code)
    const modelExists = await this.repository.exists(code)

    if (modelExists) {
      throw new AlreadyExistsError('AircraftModel', 'code', input.code)
    }

    const aircraftModel = AircraftModel.create({
      id: AircraftModelId.create(input.id),
      name: AircraftModelName.create(input.name),
      code: AircraftModelCode.create(input.code),
      numEngines: AircraftModelNumEngines.create(input.numEngines),
      manufacturer: AircraftModelManufacturer.create(input.manufacturer),
      passengerCapacity: AircraftModelPassengerCapacity.create(input.passengerCapacity)
    })

    await this.repository.register(aircraftModel)
  }
}
