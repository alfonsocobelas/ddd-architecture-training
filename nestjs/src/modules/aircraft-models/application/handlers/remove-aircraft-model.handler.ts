import { Injectable } from '@nestjs/common'
import { RemoveAircraftModelUseCase } from '../use-cases/remove-aircraft-model-usecase.service'

@Injectable()
export class RemoveAircraftModelHandler {
  constructor(
    private readonly useCase: RemoveAircraftModelUseCase
  ) {}

  async run(id: string): Promise<void> {
    await this.useCase.invoke({ id })
  }
}
