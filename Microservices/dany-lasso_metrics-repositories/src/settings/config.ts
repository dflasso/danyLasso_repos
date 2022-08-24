import { registerAs, ConfigModule } from '@nestjs/config';
import { enviroments } from './enviroments';
import * as Joi from 'joi';

const config = registerAs('config', () => {
  return {
    database: {
      clusterId: process.env.DATABASE_CLUSTER_ID,
      url: process.env.DATABASE_URL,
      urlRaw: process.env.DATABASE_URL_RAW,
      type: process.env.DATABASE_TYPE,
    },
    externalWs: {
      reposVerified: {
        host: process.env.HOST_WS_REPOSITORIES_VERIFIED,
        apis: {
          v1: {
            getAll: process.env.WS_REPOSITORIES_VERIFIED_V1_API_GET_ALL,
          },
        },
      },
    },
  };
});

const configSchema = Joi.object({
  DATABASE_URL: Joi.string().required(),
  DATABASE_URL_RAW: Joi.string().required(),
  DATABASE_TYPE: Joi.string().required().equal('cockroachdb', 'postgres'),
  DATABASE_CLUSTER_ID: Joi.string().required(),
  HOST_WS_REPOSITORIES_VERIFIED: Joi.string().required(),
  WS_REPOSITORIES_VERIFIED_V1_API_GET_ALL: Joi.string().required(),
});

const ConfigModuleSettings = ConfigModule.forRoot({
  envFilePath: enviroments[process.env.NODE_ENV] || '.env',
  load: [config],
  isGlobal: true,
  validationSchema: configSchema,
});

export { ConfigModuleSettings };

export default config;
