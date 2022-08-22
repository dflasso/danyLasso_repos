import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//controllers
import { V1OrganizationController } from './controllers/v1-organization.controller';
//services
import { SaveOrganizationService } from './services/save-organization.service';
import { UpdateOrganizationService } from './services/update-organization.service';
import { FindOrganizationsService } from './services/find-organizations.service';
import { DeleteOrganizationsService } from './services/delete-organizations.service';
//entities
import { Organization } from './entities/organization.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Organization])],
  controllers: [V1OrganizationController],
  providers: [
    SaveOrganizationService,
    UpdateOrganizationService,
    FindOrganizationsService,
    DeleteOrganizationsService,
  ],
})
export class OrganizationsModule {}
