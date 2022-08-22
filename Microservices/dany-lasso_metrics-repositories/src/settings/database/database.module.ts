import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import clientDb from './client-db.factory';
import config from '../config';
import { DataSource } from 'typeorm';
import { ConfigModule, ConfigType } from '@nestjs/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { type, url, clusterId } = configService.database;
        return {
          type: <any>String(type) || 'cockroachdb',
          ssl: true,
          url: url,
          extra: {
            options: `--cluster=${clusterId}`,
          },
        };
      },
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
  ],
  providers: [clientDb],
  exports: ['PG'],
})
export class DatabaseModule {}
