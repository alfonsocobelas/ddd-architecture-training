import { ValueObject } from './value-object'
import { InvalidArgumentError } from '../../errors'

export abstract class StringValueObject extends ValueObject<string> {
  constructor(value: string) {
    StringValueObject.ensureIsString(value)
    super(value)
  }

  private static ensureIsString(value: string): void {
    if (!value || !value.trim().length) {
      throw new InvalidArgumentError(`${this.constructor.name} Value cannot be empty string`)
    }

    if (typeof value !== 'string') {
      throw new InvalidArgumentError(`${this.constructor.name} Value must be a string`)
    }
  }
}
