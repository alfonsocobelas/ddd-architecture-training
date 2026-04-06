import { Injectable } from '@nestjs/common'
import { SearchIssuesUseCase } from 'src/modules/issues/application/use-cases/search-issues-usecase.service'
import { PaginateCursorDto } from 'src/modules/shared/infrastructure/dtos/paginate-cursor.dto'
import { SearchIssuesResponse } from '../../infrastructure/entrypoints/dtos/search-issues.response'

@Injectable()
export class SearchIssuesHandler {
  constructor(
    private readonly useCase: SearchIssuesUseCase
  ) {}

  async run(dto: PaginateCursorDto): Promise<SearchIssuesResponse> {
    const output = await this.useCase.invoke(dto)

    return new SearchIssuesResponse(output)
  }
}
