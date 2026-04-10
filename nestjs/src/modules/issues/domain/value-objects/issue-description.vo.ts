import { StringValueObject } from 'src/modules/shared/domain/value-objects/string-value-object'
import { IssueError } from '../issue-errors'
import { ISSUE_CONSTRAINTS as LIMITS } from '../issue-constants'

export class IssueDescription extends StringValueObject {
  constructor(value: string) {
    super(value)
    this.ensureIsValid(value)
  }

  private ensureIsValid(value: string): void {
    if (value.length < LIMITS.DESCRIPTION.MIN_LENGTH) {
      throw new IssueError(`Description must be at least ${LIMITS.DESCRIPTION.MIN_LENGTH} characters`)
    }

    if (value.length > LIMITS.DESCRIPTION.MAX_LENGTH) {
      throw new IssueError(`Description must be less than or equal to ${LIMITS.DESCRIPTION.MAX_LENGTH} characters`)
    }
  }
}

