import { InvalidArgumentError } from 'src/modules/shared/errors'

export class OrderBy {
  constructor(readonly value: string) {
    if (!value) {
      throw new InvalidArgumentError('OrderBy value cannot be empty')
    }
  }
}
