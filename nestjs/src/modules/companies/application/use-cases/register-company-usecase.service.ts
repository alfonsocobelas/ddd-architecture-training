import { Injectable } from '@nestjs/common'
import { AlreadyExistsError } from 'src/modules/shared/errors'
import { RegisterCompanyInput } from '../dtos/register-company-input.dto'
import { Company } from '../../domain/company'
import { CompanyRepository } from '../../domain/company.repository'
import { CompanyInputMapper } from '../../domain/company-factory'

@Injectable()
export class RegisterCompanyUseCase {
  constructor(
    private readonly repository: CompanyRepository
  ) {}

  async invoke(input: RegisterCompanyInput): Promise<void> {
    const props = CompanyInputMapper.toDomain(input)

    const companyExists = await this.repository.exists(props.name)
    if (companyExists) {
      throw new AlreadyExistsError('Company', 'name', props.name.value)
    }

    const company = Company.create(props)
    await this.repository.register(company)
  }
}
