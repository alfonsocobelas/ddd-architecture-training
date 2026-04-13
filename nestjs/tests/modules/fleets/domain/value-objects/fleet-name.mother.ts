import { FleetName } from 'src/modules/fleets/domain/value-objects/fleet-name.vo'
import { StringMother } from '../../../shared/domain/mothers/string.mother'

export class FleetNameMother {
  static create(value: string): FleetName {
    return FleetName.create(value)
  }

  static random(): FleetName {
    return this.create(StringMother.random({ minLength: 3, maxLength: 50 }))
  }
}
