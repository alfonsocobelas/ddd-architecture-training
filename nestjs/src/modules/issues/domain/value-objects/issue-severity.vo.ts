import { EnumValueObject } from 'src/modules/shared/domain/value-objects/enum-value-object'
import { IssueSeverityLevelEnum, IssueSeverityLevelValue } from '../issue-enums'

export class IssueSeverityLevel extends EnumValueObject<string> {
  constructor(value: string) {
    super(value, IssueSeverityLevelValue)
  }

  isLow(): boolean {
    return this.value === IssueSeverityLevelEnum.LOW
  }

  isMedium(): boolean {
    return this.value === IssueSeverityLevelEnum.MEDIUM
  }

  isHigh(): boolean {
    return this.value === IssueSeverityLevelEnum.HIGH
  }
}
