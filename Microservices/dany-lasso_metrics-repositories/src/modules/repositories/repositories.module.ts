import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//entities
import { Repo } from './entities/repositorie.entity';
import { V1RepositoryController } from './controllers/v1-repository.controller';
import { FindRepositoryService } from './services/find-repository.service';
import { SaveRepositoryService } from './services/save-repository.service';
import { TribesModule } from '../tribes/tribes.module';

@Module({
  imports: [TypeOrmModule.forFeature([Repo]), TribesModule],
  controllers: [V1RepositoryController],
  providers: [FindRepositoryService, SaveRepositoryService],
})
export class RepositoriesModule {}
