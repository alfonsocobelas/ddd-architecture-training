import { Injectable } from '@nestjs/common'
import { AlreadyExistsError } from 'src/modules/shared/errors'
import { RegisterCompanyInput } from '../dtos/register-company-input.dto'
import { CompanyRepository } from '../../domain/company.repository'
import { Company } from '../../domain/company'
import { CompanyId } from 'src/modules/shared/domain/value-objects/companies/company-id.vo'
import { CompanyName } from '../../domain/value-objects/company-name.vo'

@Injectable()
export class RegisterCompanyUseCase {
  constructor(
    private readonly repository: CompanyRepository
  ) {}

  async invoke(input: RegisterCompanyInput): Promise<void> {
    const companyName = CompanyName.create(input.name)
    const companyExists = await this.repository.exists(companyName)

    if (companyExists) {
      throw new AlreadyExistsError('Company', 'name', input.name)
    }

    const company = Company.create({
      id: CompanyId.create(input.id),
      name: CompanyName.create(input.name)
    })

    await this.repository.register(company)
  }
}
