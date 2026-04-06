import { Expose } from 'class-transformer'

export class GetEngineResponse {
  @Expose() id!: string
  @Expose() healthScore!: number
  @Expose() serialNumber!: string
  @Expose() flyingHoursAccumulated!: number
  @Expose() cyclesSinceLastOverhaul!: number
  @Expose() isInstalled!: boolean
  @Expose() status!: string
  @Expose() aircraftId!: string | null

  constructor(partial: Partial<GetEngineResponse>) {
    Object.assign(this, partial)
  }
}
