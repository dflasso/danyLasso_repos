import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateRepMetricsByTribeService } from '../service/create-rep-metrics-by-tribe.service';

@ApiTags('Reports CSV')
@Controller('/api/v1/reports/csv')
export class V1ReportsCsvController {
  constructor(
    private createRepMetricsByTribeService: CreateRepMetricsByTribeService,
  ) {}

  @ApiOperation({ summary: 'Generate Report of Metrics Repository by Tribe' })
  @Get('/metrics-repository/:idTribe/by-tribe')
  getReportMetricsByTribe(@Param('idTribe', ParseIntPipe) idTribe: number) {
    return this.createRepMetricsByTribeService.generate(idTribe);
  }
}
