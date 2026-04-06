import { Exclude, Expose } from 'class-transformer'

export class FindAircraftsInMaintenanceResponse {
  @Expose() id!: string
  @Expose() modelId!: string
  @Expose() tailNumber!: string
  @Expose() totalFlightHours!: number
  @Expose() fuelLevelPercentage!: number
  @Expose() status!: string
  @Exclude() isActive!: boolean

  constructor(partial: Partial<FindAircraftsInMaintenanceResponse>) {
    Object.assign(this, partial)
  }
}
