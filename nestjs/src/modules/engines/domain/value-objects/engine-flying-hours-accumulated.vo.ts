import { NumberValueObject } from 'src/modules/shared/domain/value-objects/number-value-object'

export class EngineFlyingHoursAccumulated extends NumberValueObject {
  constructor(value: number) {
    super(value)
  }
}
