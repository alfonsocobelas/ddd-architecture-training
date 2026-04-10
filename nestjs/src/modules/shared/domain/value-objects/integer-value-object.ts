import { NumberValueObject } from './number-value-object'
import { InvalidArgumentError } from '../../errors'

export class IntegerValueObject extends NumberValueObject {
  constructor(value: number) {
    IntegerValueObject.ensureIsInteger(value)
    super(value)
  }

  private static ensureIsInteger(value: number): void {
    if (!Number.isInteger(value)) {
      throw new InvalidArgumentError(`[${this.constructor.name}] Value ${value} must be an integer`)
    }
  }
}
