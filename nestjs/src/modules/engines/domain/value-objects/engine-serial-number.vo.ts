import { StringValueObject } from 'src/modules/shared/domain/value-objects/string-value-object'
import { EngineError } from '../engine-errors'
import { ENGINE_CONSTRAINTS as LIMITS } from '../engine-constants'

export class EngineSerialNumber extends StringValueObject {
  constructor(value: string) {
    super(value)
    this.ensureIsValid(value)
  }

  private ensureIsValid(value: string): void {
    if (value.length < LIMITS.SERIAL_NUMBER.MIN_LENGTH) {
      throw new EngineError(`Serial number must be at least ${LIMITS.SERIAL_NUMBER.MIN_LENGTH} characters`)
    }

    if (value.length > LIMITS.SERIAL_NUMBER.MAX_LENGTH) {
      throw new EngineError(`Serial number must be less than or equal to ${LIMITS.SERIAL_NUMBER.MAX_LENGTH} characters`)
    }
  }
}
