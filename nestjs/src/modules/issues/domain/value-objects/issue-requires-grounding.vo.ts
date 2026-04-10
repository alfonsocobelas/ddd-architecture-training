import { BooleanValueObject } from 'src/modules/shared/domain/value-objects/boolean-value-object'

export class IssueRequiresGrounding extends BooleanValueObject {
  constructor(value: boolean) {
    super(value)
  }
}
