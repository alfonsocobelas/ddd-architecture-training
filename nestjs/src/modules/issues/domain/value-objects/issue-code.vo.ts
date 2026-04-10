import { StringValueObject } from 'src/modules/shared/domain/value-objects/string-value-object'
import { IssueError } from '../issue-errors'
import { ISSUE_CONSTRAINTS as LIMITS } from '../issue-constants'

export class IssueCode extends StringValueObject {
  constructor(value: string) {
    super(value)
    this.ensureIsValid(value)
  }

  private ensureIsValid(value: string): void {
    if (value.length < LIMITS.CODE.MIN_LENGTH) {
      throw new IssueError(`Code must be at least ${LIMITS.CODE.MIN_LENGTH} characters`)
    }

    if (value.length > LIMITS.CODE.MAX_LENGTH) {
      throw new IssueError(`Code must be less than or equal to ${LIMITS.CODE.MAX_LENGTH} characters`)
    }
  }
}
