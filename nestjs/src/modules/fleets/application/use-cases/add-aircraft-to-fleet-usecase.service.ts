import { Injectable } from '@nestjs/common'
import { EntityNotFoundError } from 'src/modules/shared/errors'
import { FleetRepository } from 'src/modules/fleets/domain/fleet.repository'
import { AircraftRepository } from '../../../aircrafts/domain/aircraft.repository'
import { AddAircraftToFleetInput } from '../dtos/add-aircraft-to-fleet-input.dto'

@Injectable()
export class AddAircraftToFleetUsecase {
  constructor(
    private readonly fleetRepository: FleetRepository,
    private readonly aircraftRepository: AircraftRepository
  ) {}

  async invoke(input: AddAircraftToFleetInput): Promise<void> {
    const [fleet, aircraft] = await Promise.all([
      this.fleetRepository.get(input.fleetId),
      this.aircraftRepository.get(input.aircraftId)
    ])

    if (!fleet) {
      throw new EntityNotFoundError('Fleet', input.fleetId)
    }

    if (!aircraft) {
      throw new EntityNotFoundError('Aircraft', input.aircraftId)
    }

    aircraft.addToFleet(input.fleetId)
    fleet.addAircraft(input.aircraftId)

    await Promise.all([
      this.aircraftRepository.save(aircraft),
      this.fleetRepository.save(fleet)
    ])
  }
}
