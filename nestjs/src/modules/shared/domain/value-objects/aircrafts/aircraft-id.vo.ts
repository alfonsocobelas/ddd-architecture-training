import { UuidV7ValueObject } from '../uuidv7-value-object'

export class AircraftId extends UuidV7ValueObject {
  private constructor(value: string) {
    super(value)
  }

  static create(value: string): AircraftId {
    return new AircraftId(value)
  }
}
