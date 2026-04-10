import { UuidV7ValueObject } from 'src/modules/shared/domain/value-objects/uuidv7-value-object'

export class IssueId extends UuidV7ValueObject {
  constructor(value: string) {
    super(value)
  }
}
