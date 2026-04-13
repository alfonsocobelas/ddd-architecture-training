import { Filter } from 'src/modules/shared/domain/query/filter'
import { Filters } from 'src/modules/shared/domain/query/filters'
import { Criteria } from 'src/modules/shared/domain/query/criteria'
import { FilterField } from 'src/modules/shared/domain/query/filter-field'
import { FilterValue } from 'src/modules/shared/domain/query/filter-value'
import { FilterOperator, Operator } from 'src/modules/shared/domain/query/filter-operator'
import { AircraftTailNumber } from '../value-objects/aircraft-tail-number.vo'

export class AircraftWithTailNumberSpecification extends Criteria {
  constructor(tailNumber: AircraftTailNumber) {
    super({
      filters: new Filters([
        new Filter(
          new FilterField('tailNumber'),
          FilterOperator.create(Operator.EQUAL),
          new FilterValue(tailNumber.value)
        )
      ])
    })
  }

  static withTailNumber(tailNumber: AircraftTailNumber): AircraftWithTailNumberSpecification {
    return new AircraftWithTailNumberSpecification(tailNumber)
  }
}

export const withTailNumber = AircraftWithTailNumberSpecification.withTailNumber
