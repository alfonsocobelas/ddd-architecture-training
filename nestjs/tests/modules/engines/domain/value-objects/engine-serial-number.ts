import { EngineSerialNumber } from 'src/modules/engines/domain/value-objects/engine-serial-number.vo'
import { StringMother } from '../../../shared/domain/mothers/string.mother'

export class EngineSerialNumberMother {
  static create(value: string): EngineSerialNumber {
    return EngineSerialNumber.create(value)
  }

  static random(): EngineSerialNumber {
    return this.create(StringMother.random({ minLength: 5, maxLength: 20 }))
  }
}
