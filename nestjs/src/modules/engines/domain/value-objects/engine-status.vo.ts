import { EnumValueObject } from 'src/modules/shared/domain/value-objects/enum-value-object'
import { EngineStatusEnum } from '../engine-enums'

export class EngineStatus extends EnumValueObject<string> {
  constructor(value: string) {
    super(value, Object.values(EngineStatusEnum))
  }

  isOperational(): boolean {
    return this.value === EngineStatusEnum.OPERATIONAL
  }

  isMaintenance(): boolean {
    return this.value === EngineStatusEnum.MAINTENANCE
  }
}
