import { NumberValueObject } from 'src/modules/shared/domain/value-objects/number-value-object'
import { ENGINE_DEFAULTS as DEFAULT } from '../engine-constants'

export class EngineFlyingHoursAccumulated extends NumberValueObject {
  private constructor(value: number) {
    super(value)
  }

  static create(value: number): EngineFlyingHoursAccumulated {
    return new EngineFlyingHoursAccumulated(value)
  }

  static initial(): EngineFlyingHoursAccumulated {
    return new EngineFlyingHoursAccumulated(DEFAULT.FLYING_HOURS)
  }
}
