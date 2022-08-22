import { Controller, Get } from '@nestjs/common';
import { RepositoryService } from '../servicies/repository.service';

@Controller('/api/v1/repositories')
export class ControllerController {
  constructor(private repositoryService: RepositoryService) {}

  @Get('/verified')
  getAllRepositories() {
    return this.repositoryService.getAllRepositories();
  }
}
