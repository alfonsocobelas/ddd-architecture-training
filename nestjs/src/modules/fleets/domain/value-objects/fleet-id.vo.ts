import { UuidV7ValueObject } from 'src/modules/shared/domain/value-objects/uuidv7-value-object'

export class FleetId extends UuidV7ValueObject {
  private constructor(value: string) {
    super(value)
  }

  static create(value: string): FleetId {
    return new FleetId(value)
  }
}
