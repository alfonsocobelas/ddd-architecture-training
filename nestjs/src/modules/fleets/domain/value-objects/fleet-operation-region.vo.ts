import { EnumValueObject } from 'src/modules/shared/domain/value-objects/enum-value-object'
import { FleetFleetOperationRegionEnum, FleetFleetOperationRegionValues } from '../fleet-enums'

export class FleetFleetOperationRegion extends EnumValueObject<FleetFleetOperationRegionEnum> {
  private constructor(value: FleetFleetOperationRegionEnum) {
    super(value, FleetFleetOperationRegionValues)
  }

  static create(value: string): FleetFleetOperationRegion {
    return new FleetFleetOperationRegion(value as FleetFleetOperationRegionEnum)
  }

  isAmer(): boolean {
    return this.value === FleetFleetOperationRegionEnum.AMER
  }

  isEmea(): boolean {
    return this.value === FleetFleetOperationRegionEnum.EMEA
  }

  isApac(): boolean {
    return this.value === FleetFleetOperationRegionEnum.APAC
  }
}
