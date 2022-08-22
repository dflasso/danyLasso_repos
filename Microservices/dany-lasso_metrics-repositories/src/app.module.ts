import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { DatabaseModule } from './settings/database/database.module';

import { ConfigModuleSettings } from './settings/config';
@Module({
  imports: [ConfigModuleSettings, OrganizationsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
