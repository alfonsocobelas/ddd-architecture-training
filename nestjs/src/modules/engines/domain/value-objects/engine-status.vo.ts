import { EnumValueObject } from 'src/modules/shared/domain/value-objects/enum-value-object'
import { EngineStatusEnum, EngineStatusValues } from '../engine-enums'

export class EngineStatus extends EnumValueObject<EngineStatusEnum> {
  private constructor(value: EngineStatusEnum) {
    super(value, EngineStatusValues)
  }

  static create(value: string): EngineStatus {
    return new EngineStatus(value as EngineStatusEnum)
  }

  static operational(): EngineStatus {
    return new EngineStatus(EngineStatusEnum.OPERATIONAL)
  }

  isOperational(): boolean {
    return this.value === EngineStatusEnum.OPERATIONAL
  }

  isMaintenance(): boolean {
    return this.value === EngineStatusEnum.MAINTENANCE
  }
}
