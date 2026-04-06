import { Injectable } from '@nestjs/common'
import { EntityNotFoundError } from 'src/modules/shared/errors'
import { GetIssueInput } from '../dtos/get-issue-input.dto'
import { GetIssueOutput } from '../dtos/get-issue-output.dto'
import { IssueRepository } from '../../domain/issue.repository'

@Injectable()
export class GetIssueUseCase {
  constructor(
    private readonly issueRepository: IssueRepository
  ) {}

  async invoke(input: GetIssueInput): Promise<GetIssueOutput> {
    const issue = await this.issueRepository.get(input.id)

    if (!issue) {
      throw new EntityNotFoundError('Issue', input.id)
    }

    return {
      id: issue.id,
      code: issue.code,
      description: issue.description,
      severity: issue.severity,
      requiresGrounding: issue.requiresGrounding,
      partCategory: issue.partCategory,
      aircraftId: issue.aircraftId ?? null,
      engineId: issue.engineId ?? null
    }
  }
}
