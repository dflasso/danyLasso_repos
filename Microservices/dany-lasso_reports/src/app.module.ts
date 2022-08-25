import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsCsvModule } from './modules/reports-csv/reports-csv.module';
import { MetricsReposMicroserviceModule } from './middleware/clients-ws/metrics-repos-microservice/metrics-repos-microservice.module';
import { ConfigApp } from './settings/config';

@Module({
  imports: [ConfigApp, ReportsCsvModule, MetricsReposMicroserviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
