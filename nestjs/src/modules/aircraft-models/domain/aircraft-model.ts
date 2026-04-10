import { AggregateRoot } from 'src/modules/shared/domain/aggregate-root'
import { AircraftModelError } from './aircraft-model-errors'
import { AircraftModelStatusEnum } from './aircraft-model-enums'
import { AircraftModelAggregateProps, AircraftModelPrimitiveProps } from './aircraft-model-types'
import { AircraftModelId } from './value-objects/aircraft-model-id.vo'
import { AircraftModelName } from './value-objects/aircraft-model-name.vo'
import { AircraftModelCode } from './value-objects/aircraft-model-code.vo'
import { AircraftModelStatus } from './value-objects/aircraft-model-status.vo'
import { AircraftModelNumEngines } from './value-objects/aircraft-model-num-engines.vo'
import { AircraftModelManufacturer } from './value-objects/aircraft-model-manufacturer.vo'
import { AircraftModelPassengerCapacity } from './value-objects/aircraft-model-passenger-capacity.vo'

export class AircraftModel extends AggregateRoot {
  private constructor(
    readonly id: AircraftModelId,
    readonly name: AircraftModelName,
    readonly code: AircraftModelCode,
    readonly manufacturer: AircraftModelManufacturer,
    readonly passengerCapacity: AircraftModelPassengerCapacity,
    readonly numEngines: AircraftModelNumEngines,
    private _status: AircraftModelStatus
  ) {
    super()
  }

  //#region ... Getters ...
  get status(): AircraftModelStatus {
    return this._status
  }
  //#endregion

  static create(props: AircraftModelAggregateProps): AircraftModel {
    return new AircraftModel(
      props.id,
      props.name,
      props.code,
      props.manufacturer,
      props.passengerCapacity,
      props.numEngines,
      AircraftModelStatus.draft()
    )
  }

  static fromPrimitives(props: AircraftModelPrimitiveProps): AircraftModel {
    return new AircraftModel(
      AircraftModelId.create(props.id),
      AircraftModelName.create(props.name),
      AircraftModelCode.create(props.code),
      AircraftModelManufacturer.create(props.manufacturer),
      AircraftModelPassengerCapacity.create(props.passengerCapacity),
      AircraftModelNumEngines.create(props.numEngines),
      AircraftModelStatus.create(props.status)
    )
  }

  toPrimitives(): AircraftModelPrimitiveProps {
    return {
      id: this.id.value,
      name: this.name.value,
      code: this.code.value,
      manufacturer: this.manufacturer.value,
      passengerCapacity: this.passengerCapacity.value,
      numEngines: this.numEngines.value,
      status: this.status.value
    }
  }

  // invariants
  ensureCanBeRemoved(totalAircraftCount: number): void {
    if (totalAircraftCount > 0) {
      throw new AircraftModelError('Cannot remove model with associated aircraft')
    }
  }

  activate(): void {
    if (!this._status.isDraft() && !this._status.isWithdrawn()) {
      throw new AircraftModelError('Only draft or withdrawn models can be activated')
    }

    this._status = AircraftModelStatus.create(AircraftModelStatusEnum.OPERATIONAL)
  }

  withdraw(): void {
    if (!this._status.isOperational()) {
      throw new AircraftModelError('Only operational models can be withdrawn')
    }

    this._status = AircraftModelStatus.create(AircraftModelStatusEnum.WITHDRAW)
  }

  decommission(): void {
    if (!this._status.isOperational()) {
      throw new AircraftModelError('Only operational models can be decommissioned')
    }

    this._status = AircraftModelStatus.create(AircraftModelStatusEnum.DECOMMISSIONED)
  }
}
