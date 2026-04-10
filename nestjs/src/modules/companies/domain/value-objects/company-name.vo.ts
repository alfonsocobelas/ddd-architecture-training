import { StringValueObject } from 'src/modules/shared/domain/value-objects/string-value-object'
import { CompanyError } from '../company-errors'
import { COMPANY_CONSTRAINTS as LIMITS } from '../company-constants'

export class CompanyName extends StringValueObject {
  private constructor(value: string) {
    super(value)
    this.ensureIsValid(value)
  }

  static create(value: string): CompanyName {
    return new CompanyName(value)
  }

  private ensureIsValid(value: string): void {
    if (value.length < LIMITS.NAME.MIN_LENGTH) {
      throw new CompanyError(`Name must be at least ${LIMITS.NAME.MIN_LENGTH} characters`)
    }

    if (value.length > LIMITS.NAME.MAX_LENGTH) {
      throw new CompanyError(`Name must be less than or equal to ${LIMITS.NAME.MAX_LENGTH} characters`)
    }
  }
}
