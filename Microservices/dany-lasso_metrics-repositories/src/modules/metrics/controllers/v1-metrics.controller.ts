import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import {
  CreateMetricRequestDto,
  FindMetricsByTribe,
} from '../dtos/metric-requests.dto';
import { Metric } from '../entities/metric.entity';
import { HandlerFindMetricsByTribesService } from '../service/handler-find-metrics-by-tribes.service';
import { SaveMetricsService } from '../service/save-metrics.service';

@ApiTags('Metrics')
@Controller('/api/v1/metrics')
export class V1MetricsController {
  constructor(
    private saveMetricsService: SaveMetricsService,
    private handlerFindMetricsByTribesService: HandlerFindMetricsByTribesService,
  ) {}

  @ApiOperation({ summary: 'Save Metric' })
  @Post()
  save(@Body() body: CreateMetricRequestDto): Promise<Metric> {
    return this.saveMetricsService.save(body);
  }

  @ApiOperation({ summary: 'Get Metrics of Repositry by Tribe' })
  @Get('/:idTribe/by-tribe')
  findByTribe(
    @Param('idTribe', ParseIntPipe) idTribe: number,
    @Query('CreatedFrom')
    CreatedFrom = new Date(`${new Date().getFullYear()}-01-01`),
    @Query('CreatedTo')
    CreatedTo = new Date(`${new Date().getFullYear()}-12-31`),
    @Query('state') state = 'E',
    @Query('coverageMetricMin') coverageMetricMin = 75,
    @Query('coverageMetricMax') coverageMetricMax = 100,
  ) {
    const request = new FindMetricsByTribe();
    request.idTribe = idTribe;
    request.CreatedFrom = CreatedFrom;
    request.CreatedTo = CreatedTo;
    request.state = state;
    request.coverageMetricMin = coverageMetricMin;
    request.coverageMetricMax = coverageMetricMax;

    return this.handlerFindMetricsByTribesService.handle(request);
  }
}
