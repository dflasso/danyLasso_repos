import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { DatabaseModule } from './settings/database/database.module';

import { ConfigModuleSettings } from './settings/config';
import { TribesModule } from './modules/tribes/tribes.module';
import { RepositoriesModule } from './modules/repositories/repositories.module';
import { MetricsModule } from './modules/metrics/metrics.module';
@Module({
  imports: [ConfigModuleSettings, OrganizationsModule, DatabaseModule, TribesModule, RepositoriesModule, MetricsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
