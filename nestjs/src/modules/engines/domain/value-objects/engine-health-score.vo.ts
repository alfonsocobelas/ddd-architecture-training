import { NumberValueObject } from 'src/modules/shared/domain/value-objects/number-value-object'

export class EngineHealthScore extends NumberValueObject {
  constructor(value: number) {
    super(value)
  }
}
