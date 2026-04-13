import { AircraftTailNumber } from 'src/modules/aircrafts/domain/value-objects/aircraft-tail-number.vo'
import { StringMother } from '../../../shared/domain/mothers/string.mother'

export class AircraftTailNumberMother {
  static create(value: string): AircraftTailNumber {
    return AircraftTailNumber.create(value)
  }

  static random(): AircraftTailNumber {
    return this.create(StringMother.random({ minLength: 10, maxLength: 15 }))
  }
}
