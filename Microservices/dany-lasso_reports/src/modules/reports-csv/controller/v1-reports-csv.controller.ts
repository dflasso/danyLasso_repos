import {
  Controller,
  Get,
  Header,
  Param,
  ParseIntPipe,
  StreamableFile,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { Readable } from 'stream';
import { CreateRepMetricsByTribeService } from '../service/create-rep-metrics-by-tribe.service';

@ApiTags('Reports CSV')
@Controller('/api/v1/reports/csv')
export class V1ReportsCsvController {
  constructor(
    private createRepMetricsByTribeService: CreateRepMetricsByTribeService,
  ) {}

  @ApiOperation({ summary: 'Generate Report of Metrics Repository by Tribe' })
  @Get('/metrics-repository/:idTribe/by-tribe')
  @Header('Content-Type', 'text/csv')
  @Header(
    'Content-Disposition',
    'attachment; filename="reporte-metricas-repos-de-tribu.csv"',
  )
  async getReportMetricsByTribe(
    @Param('idTribe', ParseIntPipe) idTribe: number,
  ) {
    const fileStream: Readable =
      await this.createRepMetricsByTribeService.generate(idTribe);
    return new StreamableFile(fileStream);
  }
}
