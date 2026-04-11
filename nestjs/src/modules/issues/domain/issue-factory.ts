import { RegisterIssueInput } from '../application/dtos/register-issue-input.dto'
import { IssueAggregateProps } from './issue-types'

export class IssueInputMapper {
  static toDomain(raw: RegisterIssueInput): IssueAggregateProps {
    return {

    }
  }
}
