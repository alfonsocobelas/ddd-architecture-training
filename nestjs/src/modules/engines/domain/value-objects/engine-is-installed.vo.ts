import { BooleanValueObject } from 'src/modules/shared/domain/value-objects/boolean-value-object'

export class EngineIsInstalled extends BooleanValueObject {
  constructor(value: boolean) {
    super(value)
  }
}
