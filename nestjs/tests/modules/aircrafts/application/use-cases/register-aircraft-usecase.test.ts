import { withTailNumber } from 'src/modules/aircrafts/domain/specifications/aircraft-with-tail-number.specification'
import { RegisterAircraftUseCase } from 'src/modules/aircrafts/application/use-cases/register-aircraft-usecase.service'
import { RegisterAircraftInputMother } from '../mothers/register-aircraft-input.mother'
import { AircraftModelMother } from '../../../aircraft-models/domain/aircraft-model.mother'
import { AircraftMother } from '../../domain/aircraft.mother'
import { AircraftModelRepositoryMock } from '../../../aircraft-models/mocks/aircraft-model.repository.mock'
import { AircraftRepositoryMock } from '../../mocks/aircraft.repository.mock'
import { EventBusMock } from '../../../shared/mocks/event-bus.mock'

describe('RegisterAircraftUseCase (unit tests)', () => {
  let aircraftRepository: AircraftRepositoryMock
  let modelRepository: AircraftModelRepositoryMock
  let eventBus: EventBusMock
  let useCase: RegisterAircraftUseCase

  beforeEach(() => {
    aircraftRepository = new AircraftRepositoryMock()
    modelRepository = new AircraftModelRepositoryMock()
    eventBus = new EventBusMock()
    useCase = new RegisterAircraftUseCase(aircraftRepository, modelRepository, eventBus)
  })

  it('should register a new aircraft', async () => {
    // GIVEN
    const input = RegisterAircraftInputMother.random()
    const expectedModel = AircraftModelMother.fromInput(input)
    const expectedAircraft = AircraftMother.register(input)
    const expectedEvents = expectedAircraft.pullDomainEvents()
    modelRepository.givenFound(expectedModel)
    aircraftRepository.givenDoesNotExist()

    // WHEN
    await useCase.invoke(input)
    aircraftRepository.whenRegisterSuccess()

    // THEN
    modelRepository.assertCalledWith('get', expectedModel.id)
    aircraftRepository.assertCalledWith('exists', expect.any(withTailNumber))
    aircraftRepository.assertCalledWith('register', expectedAircraft)
    eventBus.assertPublishedEvents(expectedEvents)
  })

  it('should throw EntityNotFoundError if aircraft model does not exist', async () => {
    // GIVEN
    const input = RegisterAircraftInputMother.random()
    const expectedModel = AircraftModelMother.fromInput(input)
    modelRepository.givenNotFound()
    aircraftRepository.givenDoesNotExist()

    // WHEN & THEN
    await expect(useCase.invoke(input))
      .rejects.toThrow(`AircraftModel with id "${input.modelId}" not found.`)

    modelRepository.assertCalledWith('get', expectedModel.id)
    aircraftRepository.assertCalledWith('exists', expect.any(withTailNumber))
    aircraftRepository.assertNotCalled('register')
    eventBus.assertNotPublished()
  })

  it('should throw AlreadyExistsError if tail number is already taken', async () => {
    // GIVEN
    const input = RegisterAircraftInputMother.random()
    const expectedModel = AircraftModelMother.fromInput(input)
    modelRepository.givenFound(expectedModel)
    aircraftRepository.givenAlreadyExists()

    // WHEN & THEN
    await expect(useCase.invoke(input))
      .rejects.toThrow(`Aircraft with tailNumber "${input.tailNumber}" already exists.`)

    modelRepository.assertCalledWith('get', expectedModel.id)
    aircraftRepository.assertCalledWith('exists', expect.any(withTailNumber))
    aircraftRepository.assertNotCalled('register')
    eventBus.assertNotPublished()
  })
})
