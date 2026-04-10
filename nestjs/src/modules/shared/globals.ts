import { TypeORMConfig } from 'src/modules/shared/infrastructure/config/env.types'

declare global {
  namespace NestJS {
    interface Config {
      app: {
        env: string;
        port: number;
      };
      database: TypeORMConfig;
    }
  }
}
