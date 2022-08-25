import { registerAs, ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { enviroments } from './enviroments';

const config = registerAs('config', () => {
  return {
    externalWs: {
      reposMetric: {
        host: process.env.HOST_WS_REPOSITORIES_METRICS,
        apis: {
          v1: {
            findByTribe: process.env.WS_REPOSITORIES_METRICS_V1_FIND_BY_TRIBE,
          },
        },
      },
    },
  };
});

const configSchema = Joi.object({
  HOST_WS_REPOSITORIES_METRICS: Joi.string().required(),
  WS_REPOSITORIES_METRICS_V1_FIND_BY_TRIBE: Joi.string().required(),
});

export const ConfigApp = ConfigModule.forRoot({
  envFilePath: enviroments[process.env.NODE_ENV] || '.env',
  load: [config],
  isGlobal: true,
  validationSchema: configSchema,
});

export default config;
