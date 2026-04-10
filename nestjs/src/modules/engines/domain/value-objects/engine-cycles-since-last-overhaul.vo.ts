import { NumberValueObject } from 'src/modules/shared/domain/value-objects/number-value-object'

export class EngineCyclesSinceLastOverhaul extends NumberValueObject {
  constructor(value: number) {
    super(value)
  }
}
