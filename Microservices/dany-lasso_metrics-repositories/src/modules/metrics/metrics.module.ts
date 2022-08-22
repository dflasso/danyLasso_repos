import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//Entities
import { Metric } from './entities/metric.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Metric])],
})
export class MetricsModule {}
