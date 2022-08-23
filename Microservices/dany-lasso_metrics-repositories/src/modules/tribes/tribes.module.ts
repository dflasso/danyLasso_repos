import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//Entities
import { Tribe } from './entities/tribe.entity';
import { V1TribesController } from './controllers/v1-tribes.controller';
import { FindTribesService } from './services/find-tribes.service';
import { SaveTribesService } from './services/save-tribes.service';
import { OrganizationsModule } from '../organizations/organizations.module';
@Module({
  imports: [TypeOrmModule.forFeature([Tribe]), OrganizationsModule],
  controllers: [V1TribesController],
  providers: [FindTribesService, SaveTribesService],
})
export class TribesModule {}
