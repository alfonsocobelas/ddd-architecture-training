import { GetAircraftOutput } from 'src/modules/aircrafts/application/dtos/get-aircraft-output.dto'
import { AircraftReadModel } from 'src/modules/aircrafts/domain/aircraft-types'

export class GetAircraftOutputMother {
  static fromDomain(aircraft: AircraftReadModel): GetAircraftOutput {
    return {
      id: aircraft.id,
      modelId: aircraft.modelId,
      tailNumber: aircraft.tailNumber,
      fleetId: aircraft.fleetId,
      engineIds: aircraft.engineIds,
      isActive: aircraft.isActive,
      totalFlightHours: aircraft.totalFlightHours,
      fuelLevelPercentage: aircraft.fuelLevelPercentage,
      status: aircraft.status,
      model: {
        id: aircraft.model.id,
        name: aircraft.model.name,
        numEngines: aircraft.model.numEngines
      },
      engines: aircraft.engines.map(engine=> ({
        id: engine.id,
        healthScore: engine.healthScore
      }))
    }
  }
}
