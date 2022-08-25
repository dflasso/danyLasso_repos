import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ApiMetricsByTribeService } from './services/api-metrics-by-tribe.service';

@Module({
  imports: [HttpModule],
  providers: [ApiMetricsByTribeService],
  exports: [ApiMetricsByTribeService],
})
export class MetricsReposMicroserviceModule {}
