import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'cockroachdb',
  url: 'postgresql://dba-ch-dlasso:9cw4p3SgquBJ-b1xGaMKug@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb',
  ssl: true,
  extra: {
    options: '--cluster=dany-lasso-cluster-4395',
  },
  logging: true,
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/settings/database/migrations/*.ts'],
});
