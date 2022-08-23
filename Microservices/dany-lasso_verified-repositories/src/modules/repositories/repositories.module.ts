import { Module } from '@nestjs/common';
import { ControllerController } from './controllers/controller.controller';
import { RepositoryService } from './servicies/repository.service';

@Module({
  controllers: [ControllerController],
  providers: [RepositoryService],
})
export class RepositoriesModule {}
