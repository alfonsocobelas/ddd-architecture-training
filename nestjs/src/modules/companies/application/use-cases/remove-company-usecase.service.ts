import { Injectable } from '@nestjs/common'
import { CompanyId } from 'src/modules/shared/domain/value-objects/companies/company-id.vo'
import { EntityNotFoundError } from 'src/modules/shared/errors'
import { RemoveCompanyInput } from '../dtos/remove-company-input.dto'
import { CompanyRepository } from '../../domain/company.repository'

@Injectable()
export class RemoveCompanyUseCase {
  constructor(
    private readonly repository: CompanyRepository
  ) {}

  async invoke(input: RemoveCompanyInput): Promise<void> {
    const companyId = CompanyId.create(input.id)

    const company = await this.repository.get(companyId)
    if (!company) {
      throw new EntityNotFoundError('Company', companyId.value)
    }

    await this.repository.remove(companyId)
  }
}
