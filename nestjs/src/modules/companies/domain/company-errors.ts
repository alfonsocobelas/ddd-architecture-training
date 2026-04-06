import { BusinessRuleViolationError } from 'src/modules/shared/errors'

export class CompanyError extends BusinessRuleViolationError {
  constructor(message: string, cause?: unknown) {
    super(message, 'Company', cause)
  }
}
