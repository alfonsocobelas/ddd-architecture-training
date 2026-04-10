import { StringValueObject } from 'src/modules/shared/domain/value-objects/string-value-object'
import { FleetError } from '../fleet-errors'
import { FLEET_CONSTRAINTS as LIMITS } from '../fleet-constants'

export class FleetName extends StringValueObject {
  constructor(value: string) {
    super(value)
    this.ensureIsValid(value)
  }

  private ensureIsValid(value: string): void {
    if (value.length < LIMITS.NAME.MIN_LENGTH) {
      throw new FleetError(`Name must be at least ${LIMITS.NAME.MIN_LENGTH} characters`)
    }

    if (value.length > LIMITS.NAME.MAX_LENGTH) {
      throw new FleetError(`Name must be less than or equal to ${LIMITS.NAME.MAX_LENGTH} characters`)
    }
  }
}
