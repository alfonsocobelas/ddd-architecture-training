import { EnumValueObject } from 'src/modules/shared/domain/value-objects/enum-value-object'
import { FleetStatusValues } from '../fleet-enums'

export class FleetStatus extends EnumValueObject<string> {
  constructor(value: string) {
    super(value, FleetStatusValues)
  }
}
