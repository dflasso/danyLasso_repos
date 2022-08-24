import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//Entities
import { Metric } from './entities/metric.entity';
import { V1MetricsController } from './controllers/v1-metrics.controller';
import { FindMetricsService } from './service/find-metrics.service';
import { SaveMetricsService } from './service/save-metrics.service';
import { RepositoriesModule } from '../repositories/repositories.module';
import { TribesModule } from '../tribes/tribes.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Metric]),
    RepositoriesModule,
    TribesModule,
  ],
  controllers: [V1MetricsController],
  providers: [FindMetricsService, SaveMetricsService],
})
export class MetricsModule {}
