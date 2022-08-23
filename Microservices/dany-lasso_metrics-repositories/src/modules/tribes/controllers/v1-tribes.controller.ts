import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateOrganizationRequestDto } from '../dtos/tribes-requests.dto';
import { Tribe } from '../entities/tribe.entity';
import { FindTribesService } from '../services/find-tribes.service';
import { SaveTribesService } from '../services/save-tribes.service';

@ApiTags('Organizations')
@Controller('/api/v1/tribes')
export class V1TribesController {
  constructor(
    private saveTribesService: SaveTribesService,
    private findTribesService: FindTribesService,
  ) {}

  @ApiOperation({ summary: 'Create new register of tribe' })
  @Post()
  save(@Body() request: CreateOrganizationRequestDto): Promise<Tribe> {
    return this.saveTribesService.save(request);
  }

  @Get()
  findAll() {
    return this.findTribesService.findAll();
  }
}
