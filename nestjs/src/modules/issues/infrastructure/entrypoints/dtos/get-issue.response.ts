import { Nullable } from 'src/modules/shared/nullable'
import { Expose } from 'class-transformer'

export class GetIssueResponse {
  @Expose() id!: string
  @Expose() code!: string
  @Expose() description!: string
  @Expose() severity!: string
  @Expose() requiresGrounding!: boolean
  @Expose() partCategory!: string
  @Expose() aircraftId!: Nullable<string>
  @Expose() engineId!: Nullable<string>

  constructor(partial: Partial<GetIssueResponse>) {
    Object.assign(this, partial)
  }
}
