import { EngineId } from 'src/modules/shared/domain/value-objects/engines/engine-id.vo'
import { AircraftId } from 'src/modules/shared/domain/value-objects/aircrafts/aircraft-id.vo'
import { AggregateRoot } from 'src/modules/shared/domain/aggregate-root'
import { IssueAggregateProps, IssuePrimitiveProps } from './issue-types'
import { IssueId } from './value-objects/issue-id.vo'
import { IssueCode } from './value-objects/issue-code.vo'
import { IssueDescription } from './value-objects/issue-description.vo'
import { IssuePartCategory } from './value-objects/issue-part-category.vo'
import { IssueSeverityLevel } from './value-objects/issue-severity.vo'
import { IssueRequiresGrounding } from './value-objects/issue-requires-grounding.vo'

export class Issue extends AggregateRoot {
  private constructor(
    readonly id: IssueId,
    readonly code: IssueCode,
    readonly description: IssueDescription,
    readonly severity: IssueSeverityLevel,
    readonly requiresGrounding: IssueRequiresGrounding,
    readonly partCategory: IssuePartCategory,
    readonly aircraftId?: AircraftId,
    readonly engineId?: EngineId
  ) {
    super()
  }

  static create(props: IssueAggregateProps): Issue {
    return new Issue(
      props.id,
      props.code,
      props.description,
      props.severity,
      props.requiresGrounding,
      props.partCategory,
      props.aircraftId,
      props.engineId
    )
  }

  static fromPrimitives(props: IssuePrimitiveProps): Issue {
    return new Issue(
      IssueId.create(props.id),
      IssueCode.create(props.code),
      IssueDescription.create(props.description),
      IssueSeverityLevel.create(props.severity),
      IssueRequiresGrounding.create(props.requiresGrounding),
      IssuePartCategory.create(props.partCategory, props.aircraftId, props.engineId),
      props.aircraftId ? AircraftId.create(props.aircraftId) : undefined,
      props.engineId ? EngineId.create(props.engineId) : undefined
    )
  }

  toPrimitives(): IssuePrimitiveProps {
    return {
      id: this.id.value,
      code: this.code.value,
      description: this.description.value,
      severity: this.severity.value,
      requiresGrounding: this.requiresGrounding.value,
      partCategory: this.partCategory.value,
      aircraftId: this.aircraftId ? this.aircraftId.value : undefined,
      engineId: this.engineId ? this.engineId.value : undefined
    }
  }
}
