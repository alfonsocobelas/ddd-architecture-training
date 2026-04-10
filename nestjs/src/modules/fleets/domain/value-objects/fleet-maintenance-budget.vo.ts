import { IntegerValueObject } from 'src/modules/shared/domain/value-objects/integer-value-object'
import { FleetError } from '../fleet-errors'
import { FLEET_CONSTRAINTS as LIMITS } from '../fleet-constants'

export class FleetMaintenanceBudget extends IntegerValueObject {
  constructor(value: number) {
    super(value)
    this.ensureIsValid(value)
  }

  private ensureIsValid(value: number): void {
    if (value < LIMITS.MAINTENANCE_BUDGET.MIN) {
      throw new FleetError(`Maintenance budget must be at least ${LIMITS.MAINTENANCE_BUDGET.MIN}`)
    }

    if (value > LIMITS.MAINTENANCE_BUDGET.MAX) {
      throw new FleetError(`Maintenance budget must be less than ${LIMITS.MAINTENANCE_BUDGET.MAX}`)
    }
  }
}
