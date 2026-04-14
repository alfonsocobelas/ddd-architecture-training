import { aircraftsOfModel } from 'src/modules/aircrafts/domain/specifications/aircrafts-of-model.specification'
import { RemoveAircraftModelUseCase } from 'src/modules/aircraft-models/application/use-cases/remove-aircraft-model-usecase.service'
import { RemoveAircraftModelInputMother } from '../dtos/remove-aircraft-model-input.mother'
import { AircraftModelMother } from '../../domain/aircraft-model.mother'
import { AircraftModelRepositoryMock } from '../../mocks/aircraft-model.repository.mock'
import { AircraftRepositoryMock } from '../../../aircrafts/mocks/aircraft.repository.mock'
import { EventBusMock } from '../../../shared/mocks/event-bus.mock'

const ZERO_AIRCRAFTS_COUNT = 0

describe('RemoveAircraftModelUseCase (unit tests)', () => {
  let modelRepository: AircraftModelRepositoryMock
  let aircraftRespository: AircraftRepositoryMock
  let eventBus: EventBusMock
  let useCase: RemoveAircraftModelUseCase

  beforeEach(() => {
    modelRepository = new AircraftModelRepositoryMock()
    aircraftRespository = new AircraftRepositoryMock()
    eventBus = new EventBusMock()
    useCase = new RemoveAircraftModelUseCase(modelRepository, aircraftRespository, eventBus)
  })

  it('should delete an existing aircraft model by code', async () => {
    // GIVEN
    const input = RemoveAircraftModelInputMother.random()
    const expectedModel = AircraftModelMother.fromInput(input)
    const expectedEvents = expectedModel.pullDomainEvents()
    const aircraftCount = ZERO_AIRCRAFTS_COUNT
    modelRepository.givenFound(expectedModel)
    aircraftRespository.givenCount(aircraftCount)

    // WHEN
    await useCase.invoke(input)

    // THEN
    aircraftRespository.assertCalledWith('count', expect.any(aircraftsOfModel))
    modelRepository.assertCalledWith('remove', expectedModel.id)
    eventBus.assertPublishedEvents(expectedEvents)
  })

  it('should throw EntityNotFoundError if model does not exist', async () => {
    // GIVEN
    const input = RemoveAircraftModelInputMother.random()
    const expectedModel = AircraftModelMother.fromInput(input)
    modelRepository.givenNotFound()

    // WHEN & THEN
    await expect(useCase.invoke(input))
      .rejects.toThrow(`AircraftModel with id "${input.id}" not found.`)

    modelRepository.assertCalledWith('get', expectedModel.id)
    aircraftRespository.assertCalledWith('count', expect.any(aircraftsOfModel))
    modelRepository.assertNotCalled('remove')
  })
})
