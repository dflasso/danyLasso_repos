import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();
const configService = new ConfigService();

export const AppDataSource = new DataSource({
  type: <any>String(configService.get('DATABASE_TYPE')) || 'cockroachdb',
  url: configService.get('DATABASE_URL'),
  ssl: true,
  extra: {
    options: `--cluster=${configService.get('DATABASE_CLUSTER_ID')}`,
  },
  logging: true,
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/settings/database/migrations/**.ts'],
});
