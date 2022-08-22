import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';

import config from '../config';

export default {
  provide: 'PG',
  useFactory: async (configService: ConfigType<typeof config>) => {
    const { urlRaw } = configService.database;
    const client = new Client(urlRaw);
    await client.connect();
    return client;
  },
  inject: [config.KEY],
};
