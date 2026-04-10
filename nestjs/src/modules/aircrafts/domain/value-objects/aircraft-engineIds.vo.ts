import { AircraftModelNumEngines } from 'src/modules/aircraft-models/domain/value-objects/aircraft-model-num-engines.vo'
import { EngineId } from 'src/modules/shared/domain/value-objects/engines/engine-id.vo'
import { ValueObjectList } from 'src/modules/shared/domain/value-objects/value-object-list'

export class AircraftEngineIds extends ValueObjectList<EngineId, AircraftEngineIds> {
  private constructor(engineIds: EngineId[]) {
    super(engineIds)
  }

  static create(engineIds: string[]): AircraftEngineIds {
    const vos = engineIds.map(id => EngineId.create(id))
    return new AircraftEngineIds(vos)
  }

  static empty(): AircraftEngineIds {
    return new AircraftEngineIds([])
  }

  isFull(max: AircraftModelNumEngines): boolean {
    return this.length >= max.value
  }

  add(engineId: EngineId): AircraftEngineIds {
    return new AircraftEngineIds([...this._items, engineId])
  }

  remove(engineId: EngineId): AircraftEngineIds {
    return new AircraftEngineIds(this._items.filter(e => !e.equals(engineId)))
  }
}
