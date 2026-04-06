import { BusinessRuleViolationError } from 'src/modules/shared/errors'

export class EngineError extends BusinessRuleViolationError {
  constructor(message: string, cause?: unknown) {
    super(message, 'Engine', cause)
  }
}
