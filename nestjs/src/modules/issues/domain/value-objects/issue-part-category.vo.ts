import { EnumValueObject } from 'src/modules/shared/domain/value-objects/enum-value-object'
import { IssuePartCategoryEnum, IssuePartCategoryValue } from '../issue-enums'
import { IssueError } from '../issue-errors'

export class IssuePartCategory extends EnumValueObject<string> {
  constructor(value: string, aircraftId?: string, engineId?: string) {
    super(value, IssuePartCategoryValue)
    this.ensureCategoryIsValid(value, aircraftId, engineId)
  }

  private ensureCategoryIsValid(value: string, aircraftId?: string, engineId?: string): void {
    if ((value === IssuePartCategoryEnum.AVIONICS || value === IssuePartCategoryEnum.FUSELAGE) && !aircraftId) {
      throw new IssueError('aircraftId is required when partCategory is Aircraft')
    }

    if (value === IssuePartCategoryEnum.ENGINE && !engineId) {
      throw new IssueError('engineId is required when partCategory is ENGINE')
    }
  }

  isEngine(): boolean {
    return this.value === IssuePartCategoryEnum.ENGINE
  }

  isFuselage(): boolean {
    return this.value === IssuePartCategoryEnum.FUSELAGE
  }

  isAvionics(): boolean {
    return this.value === IssuePartCategoryEnum.AVIONICS
  }
}
