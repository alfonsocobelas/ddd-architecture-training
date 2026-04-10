import { EnumValueObject } from 'src/modules/shared/domain/value-objects/enum-value-object'
import { FleetTypeEnum, FleetTypeValues } from '../fleet-enums'

export class FleetType extends EnumValueObject<string> {
  constructor(value: string) {
    super(value, FleetTypeValues)
  }

  isCargo(): boolean {
    return this.value === FleetTypeEnum.CARGO
  }

  isPassenger(): boolean {
    return this.value === FleetTypeEnum.PASSENGER
  }

  isMilitary(): boolean {
    return this.value === FleetTypeEnum.MILITARY
  }

  isPrivate(): boolean {
    return this.value === FleetTypeEnum.PRIVATE
  }

  isSpecialized(): boolean {
    return this.value === FleetTypeEnum.SPECIALIZED
  }
}
