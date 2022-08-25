import { Module } from '@nestjs/common';

import { MetricsReposMicroserviceModule } from '../../middleware/clients-ws/metrics-repos-microservice/metrics-repos-microservice.module';
import { V1ReportsCsvController } from './controller/v1-reports-csv.controller';
import { CreateRepMetricsByTribeService } from './service/create-rep-metrics-by-tribe.service';

@Module({
  imports: [MetricsReposMicroserviceModule],
  controllers: [V1ReportsCsvController],
  providers: [CreateRepMetricsByTribeService],
})
export class ReportsCsvModule {}
