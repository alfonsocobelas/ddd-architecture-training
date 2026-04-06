import { Injectable } from '@nestjs/common'
import { EntityNotFoundError } from 'src/modules/shared/errors'
import { GetAircraftInput } from '../dtos/get-aircraft-input.dto'
import { GetAircraftOutput } from '../dtos/get-aircraft-output.dto'
import { AircraftRepository } from '../../domain/aircraft.repository'

@Injectable()
export class GetAircraftUseCase {
  constructor(
    private readonly repository: AircraftRepository
  ) {}

  async invoke(input: GetAircraftInput): Promise<GetAircraftOutput> {
    const aircraft = await this.repository.getTechnicalSheet(input.id)

    if (!aircraft) {
      throw new EntityNotFoundError('Aircraft', input.id)
    }

    return {
      id: aircraft.id,
      modelId: aircraft.modelId,
      tailNumber: aircraft.tailNumber,
      fleetId: aircraft.fleetId,
      engineIds: aircraft.engineIds,
      isActive: aircraft.isActive,
      status: aircraft.status,
      totalFlightHours: aircraft.totalFlightHours,
      fuelLevelPercentage: aircraft.fuelLevelPercentage,
      model: {
        id: aircraft.model.id,
        name: aircraft.model.name,
        numEngines: aircraft.model.numEngines
      },
      engines: aircraft.engines.map(engine => ({
        id: engine.id,
        healthScore: engine.healthScore
      }))
    }
  }
}
