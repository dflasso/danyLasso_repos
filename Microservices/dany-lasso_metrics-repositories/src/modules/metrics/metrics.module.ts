import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//Entities
import { Metric } from './entities/metric.entity';
import { V1MetricsController } from './controllers/v1-metrics.controller';
import { FindMetricsService } from './service/find-metrics.service';
import { SaveMetricsService } from './service/save-metrics.service';
import { RepositoriesModule } from '../repositories/repositories.module';
import { TribesModule } from '../tribes/tribes.module';
import { InfoVerifiedRepoMicroserviceModule } from '../../middlewares/clients-ws/info-verified-repo-microservice/info-verified-repo-microservice.module';
import { HandlerFindMetricsByTribesService } from './service/handler-find-metrics-by-tribes.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Metric]),
    RepositoriesModule,
    TribesModule,
    InfoVerifiedRepoMicroserviceModule,
  ],
  controllers: [V1MetricsController],
  providers: [
    FindMetricsService,
    SaveMetricsService,
    HandlerFindMetricsByTribesService,
  ],
})
export class MetricsModule {}
