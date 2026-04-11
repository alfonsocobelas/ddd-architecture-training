import { CompanyId } from 'src/modules/shared/domain/value-objects/companies/company-id.vo'
import { AircraftId } from 'src/modules/shared/domain/value-objects/aircrafts/aircraft-id.vo'
import { AggregateRoot } from 'src/modules/shared/domain/aggregate-root'
import { FleetError } from './fleet-errors'
import { FleetAggregateProps, FleetPrimitiveProps } from './fleet-types'
import { FleetId } from './value-objects/fleet-id.vo'
import { FleetName } from './value-objects/fleet-name.vo'
import { FleetType } from './value-objects/fleet-type.vo'
import { FleetStatus } from './value-objects/fleet-status.vo'
import { FleetAircraftIds } from './value-objects/fleet-aircraftIds.vo'
import { FleetMaintenanceBudget } from './value-objects/fleet-maintenance-budget.vo'
import { FleetFleetOperationRegion } from './value-objects/fleet-operation-region.vo'

export class Fleet extends AggregateRoot {
  private constructor(
    readonly id: FleetId,
    readonly companyId: CompanyId,
    readonly name: FleetName,
    readonly type: FleetType,
    readonly operationRegion: FleetFleetOperationRegion,
    readonly maintenanceBudget: FleetMaintenanceBudget,
    private _aircraftIds: FleetAircraftIds,
    private _status: FleetStatus
  ) {
    super()
  }

  //#region ... Getters ...
  get status(): FleetStatus {
    return this._status
  }

  get aircraftIds(): FleetAircraftIds {
    return this._aircraftIds
  }
  //#endregion

  static create(props: FleetAggregateProps): Fleet {
    return new Fleet(
      props.id,
      props.companyId,
      props.name,
      props.type,
      props.operationRegion,
      props.maintenanceBudget,
      props.aircraftIds,
      FleetStatus.draft()
    )
  }

  static fromPrimitives(props: FleetPrimitiveProps): Fleet {
    return new Fleet(
      FleetId.create(props.id),
      CompanyId.create(props.companyId),
      FleetName.create(props.name),
      FleetType.create(props.type),
      FleetFleetOperationRegion.create(props.operationRegion),
      FleetMaintenanceBudget.create(props.maintenanceBudget),
      FleetAircraftIds.create(props.aircraftIds),
      FleetStatus.create(props.status)
    )
  }

  toPrimitives(): FleetPrimitiveProps {
    return {
      id: this.id.value,
      name: this.name.value,
      type: this.type.value,
      status: this._status.value,
      companyId: this.companyId.value,
      aircraftIds: this._aircraftIds.values,
      operationRegion: this.operationRegion.value,
      maintenanceBudget: this.maintenanceBudget.value
    }
  }

  addAircraft(aircraftId: AircraftId): void {
    this.ensureAircraftIsNotPartOfFleet(aircraftId)
    this._aircraftIds = this._aircraftIds.add(aircraftId)
  }

  retireAircraft(aircraftId: AircraftId): void {
    this.ensureAircraftIsPartOfFleet(aircraftId)
    this._aircraftIds = this._aircraftIds.remove(aircraftId)
  }

  prepareForRetire(): void {
    this.ensureCanBeRetired()
    this._status = FleetStatus.retired()
  }

  private ensureAircraftIsNotPartOfFleet(aircraftId: AircraftId): void {
    if (this._aircraftIds.contains(aircraftId)) {
      throw new FleetError(`Aircraft with id ${aircraftId} is already part of the fleet`)
    }
  }

  private ensureAircraftIsPartOfFleet(aircraftId: AircraftId): void {
    if (!this._aircraftIds.contains(aircraftId)) {
      throw new FleetError(`Aircraft with id ${aircraftId} is not part of the fleet`)
    }
  }

  private ensureCanBeRetired(): void {
    if (this._status.isRetired()) {
      throw new FleetError('Fleet is already retired')
    }
  }
}
