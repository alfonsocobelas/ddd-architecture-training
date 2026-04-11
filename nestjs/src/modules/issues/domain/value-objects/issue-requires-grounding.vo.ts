import { BooleanValueObject } from 'src/modules/shared/domain/value-objects/boolean-value-object'

export class IssueRequiresGrounding extends BooleanValueObject {
  private constructor(value: boolean) {
    super(value)
  }

  static create(value: boolean): IssueRequiresGrounding {
    return new IssueRequiresGrounding(value)
  }
}
