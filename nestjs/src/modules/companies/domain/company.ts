import { AggregateRoot } from 'src/modules/shared/domain/aggregate-root'
import { CompanyAggregateProps, CompanyPrimitiveProps } from './company-types'
import { CompanyName } from './value-objects/company-name.vo'
import { CompanyId } from '../../shared/domain/value-objects/companies/company-id.vo'

export class Company extends AggregateRoot {
  private constructor(
    readonly id: CompanyId,
    readonly name: CompanyName
  ) {
    super()
  }

  static create(props: CompanyAggregateProps): Company {
    return new Company(
      props.id,
      props.name
    )
  }

  static fromPrimitives(props: CompanyPrimitiveProps): Company {
    return new Company(
      CompanyId.create(props.id),
      CompanyName.create(props.name)
    )
  }

  toPrimitives(): CompanyPrimitiveProps {
    return {
      id: this.id.value,
      name: this.name.value
    }
  }
}
