import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateRepositoryRequestDto } from '../dtos/repositories-requests.dto';
import { Repo } from '../entities/repositorie.entity';
import { FindRepositoryService } from '../services/find-repository.service';
import { SaveRepositoryService } from '../services/save-repository.service';
@ApiTags('Repositories')
@Controller('/api/v1/repository')
export class V1RepositoryController {
  constructor(
    private findRepositoryService: FindRepositoryService,
    private saveRepositoryService: SaveRepositoryService,
  ) {}

  @ApiOperation({ summary: 'Get all Repositories' })
  @Get()
  findAll(): Promise<Repo[]> {
    return this.findRepositoryService.findAll();
  }

  @ApiOperation({ summary: 'Save Repository' })
  @Post()
  save(@Body() body: CreateRepositoryRequestDto): Promise<Repo> {
    return this.saveRepositoryService.save(body);
  }
}
