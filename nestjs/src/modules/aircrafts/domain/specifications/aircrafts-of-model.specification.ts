import { Criteria } from 'src/modules/shared/domain/query/criteria'
import { Filter } from 'src/modules/shared/domain/query/filter'
import { Filters } from 'src/modules/shared/domain/query/filters'
import { FilterValue } from 'src/modules/shared/domain/query/filter-value'
import { FilterField } from 'src/modules/shared/domain/query/filter-field'
import { FilterOperator, Operator } from 'src/modules/shared/domain/query/filter-operator'
import { AircraftModelId } from 'src/modules/aircraft-models/domain/value-objects/aircraft-model-id.vo'

class AircraftsOfModelSpecification extends Criteria {
  constructor(modelId: AircraftModelId) {
    super({
      filters: new Filters([
        new Filter(
          new FilterField('modelId'),
          FilterOperator.fromValue(Operator.EQUAL),
          new FilterValue(modelId.value)
        )
      ])
    })
  }

  static aircraftsOfModel(modelId: AircraftModelId): AircraftsOfModelSpecification {
    return new AircraftsOfModelSpecification(modelId)
  }
}

export const aircraftsOfModel = AircraftsOfModelSpecification.aircraftsOfModel
