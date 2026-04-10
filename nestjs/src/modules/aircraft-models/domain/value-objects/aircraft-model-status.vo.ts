import { EnumValueObject } from 'src/modules/shared/domain/value-objects/enum-value-object'
import { AircraftModelStatusEnum, AircraftModelStatusValues } from '../aircraft-model-enums'

export class AircraftModelStatus extends EnumValueObject<AircraftModelStatusEnum> {
  private constructor(value: AircraftModelStatusEnum) {
    super(value, AircraftModelStatusValues)
  }

  static create(value: string): AircraftModelStatus {
    return new AircraftModelStatus(value as AircraftModelStatusEnum)
  }

  static draft(): AircraftModelStatus {
    return new AircraftModelStatus(AircraftModelStatusEnum.DRAFT)
  }

  isDraft(): boolean {
    return this.value === AircraftModelStatusEnum.DRAFT
  }

  isOperational(): boolean {
    return this.value === AircraftModelStatusEnum.OPERATIONAL
  }

  isDecommissioned(): boolean {
    return this.value === AircraftModelStatusEnum.DECOMMISSIONED
  }

  isWithdrawn(): boolean {
    return this.value === AircraftModelStatusEnum.WITHDRAW
  }
}
