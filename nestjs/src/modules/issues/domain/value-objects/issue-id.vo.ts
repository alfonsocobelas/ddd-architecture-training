import { UuidV7ValueObject } from 'src/modules/shared/domain/value-objects/uuidv7-value-object'

export class IssueId extends UuidV7ValueObject {
  private constructor(value: string) {
    super(value)
  }

  static create(value: string): IssueId {
    return new IssueId(value)
  }
}
