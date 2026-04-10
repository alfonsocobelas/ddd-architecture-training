import { UuidV7ValueObject } from 'src/modules/shared/domain/value-objects/uuidv7-value-object'

export class EngineId extends UuidV7ValueObject {
  private constructor(value: string) {
    super(value)
  }

  static create(value: string): EngineId {
    return new EngineId(value)
  }
}
