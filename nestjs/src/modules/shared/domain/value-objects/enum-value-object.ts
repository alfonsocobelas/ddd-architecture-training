import { InvalidArgumentError } from 'src/modules/shared/errors'
import { ValueObject } from './value-object'

export abstract class EnumValueObject<T> extends ValueObject<T> {
  constructor(value: T, readonly validValues: T[]) {
    EnumValueObject.ensureIsValidEnum(value, validValues)
    super(value)
  }

  private static ensureIsValidEnum<T>(value: T, validValues: T[]): void {
    if (!validValues.includes(value)) {
      throw new InvalidArgumentError(`[${this.name}] The value '${value}' is not a valid enum`)
    }
  }
}
