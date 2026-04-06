import { Injectable } from '@nestjs/common'
import { AlreadyExistsError } from 'src/modules/shared/errors'
import { RegisterEngineInput } from '../dtos/register-engine-input.dto'
import { EngineRepository } from '../../domain/engine.repository'
import { Engine } from '../../domain/engine'

@Injectable()
export class RegisterEngineUseCase {
  constructor(
    private readonly engineRepository: EngineRepository
  ) {}

  async invoke(input: RegisterEngineInput): Promise<void> {
    const engineExists = await this.engineRepository.exists(input.serialNumber)

    if (engineExists) {
      throw new AlreadyExistsError('Engine', 'serialNumber', input.serialNumber)
    }

    const engine = Engine.create({
      id: input.id,
      serialNumber: input.serialNumber
    })

    await this.engineRepository.register(engine)
  }
}
