import { AircraftId } from 'src/modules/shared/domain/value-objects/aircrafts/aircraft-id.vo'
import { ValueObjectList } from 'src/modules/shared/domain/value-objects/value-object-list'
import { FleetError } from '../fleet-errors'

export class FleetAircraftIds extends ValueObjectList<AircraftId, FleetAircraftIds> {
  private constructor(aircraftIds: AircraftId[]) {
    super(aircraftIds)
  }

  static create(aircraftIds: string[]): FleetAircraftIds {
    this.ensureHasAtLeastOne(aircraftIds)
    const vos = aircraftIds.map(id => AircraftId.create(id))
    return new FleetAircraftIds(vos)
  }

  add(item: AircraftId): FleetAircraftIds {
    throw new Error('Method not implemented.')
  }

  remove(item: AircraftId): FleetAircraftIds {
    throw new Error('Method not implemented.')
  }

  static empty(): FleetAircraftIds {
    return new FleetAircraftIds([])
  }

  private static ensureHasAtLeastOne(ids: string[]): void {
    if (!ids.length) {
      throw new FleetError('A fleet must be registered with at least one aircraft')
    }
  }
}
