import { Injectable } from '@nestjs/common'
import { EntityNotFoundError } from 'src/modules/shared/errors'
import { FleetRepository } from '../../domain/fleet.repository'
import { GetFleetOutput } from '../dtos/get-fleet-output.dto'
import { GetFleetInput } from '../dtos/get-fleet-input.dto'

@Injectable()
export class GetFleetUseCase {
  constructor(
    private readonly fleetRepository: FleetRepository
  ) {}

  async invoke(input: GetFleetInput): Promise<GetFleetOutput> {
    const fleet = await this.fleetRepository.get(input.id)

    if (!fleet) {
      throw new EntityNotFoundError('Fleet', input.id)
    }

    return {
      id: fleet.id,
      aircraftIds: fleet.aircraftIds,
      companyId: fleet.companyId,
      name: fleet.name,
      operationRegion: fleet.operationRegion,
      type: fleet.type,
      maintenanceBudget: fleet.maintenanceBudget,
      status: fleet.status
    }
  }
}
