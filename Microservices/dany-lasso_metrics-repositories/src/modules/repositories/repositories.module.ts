import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//entities
import { Repo } from './entities/repositorie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Repo])],
})
export class RepositoriesModule {}
