import { BusinessRuleViolationError } from 'src/modules/shared/errors'

export class AircraftError extends BusinessRuleViolationError {
  constructor(message: string, cause?: unknown) {
    super(message, 'Aircraft', cause)
  }
}
