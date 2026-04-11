import { AircraftId } from 'src/modules/shared/domain/value-objects/aircrafts/aircraft-id.vo'
import { EntityNotFoundError } from 'src/modules/shared/errors'
import { RemoveAircraftInput } from '../dtos/remove-aircraft-input.dto'
import { AircraftRepository } from '../../domain/aircraft.repository'

export class RemoveAircraftUseCase {
  constructor(
    private readonly aircraftRepository: AircraftRepository
  ) {}

  async invoke(input: RemoveAircraftInput): Promise<void> {
    const aircraftId = AircraftId.create(input.id)

    const aircraft = await this.aircraftRepository.get(aircraftId)
    if (!aircraft) {
      throw new EntityNotFoundError('Aircraft', aircraftId.value)
    }

    await this.aircraftRepository.remove(aircraft)
  }
}
