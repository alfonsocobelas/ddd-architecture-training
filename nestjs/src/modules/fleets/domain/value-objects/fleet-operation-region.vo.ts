import { EnumValueObject } from 'src/modules/shared/domain/value-objects/enum-value-object'
import { FleetFleetOperationRegionEnum, FleetFleetOperationRegionValues } from '../fleet-enums'

export class FleetFleetOperationRegion extends EnumValueObject<string> {
  constructor(value: string) {
    super(value, FleetFleetOperationRegionValues)
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
