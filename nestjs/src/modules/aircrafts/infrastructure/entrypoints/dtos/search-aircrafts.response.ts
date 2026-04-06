import { Expose, Type } from 'class-transformer'

class AircraftResponse {
  @Expose() id!: string
  @Expose() modelId!: string
  @Expose() tailNumber!: string
  @Expose() totalFlightHours!: number
  @Expose() fuelLevelPercentage!: number
  @Expose() status!: string
}

export class SearchAircraftsResponse {
  @Expose() total!: number
  @Expose() page!: number
  @Expose() pageSize!: number
  @Expose() totalPages!: number
  @Expose() @Type(() => AircraftResponse) items!: AircraftResponse[]

  constructor(partial: Partial<SearchAircraftsResponse>) {
    Object.assign(this, partial)
  }
}
