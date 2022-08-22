import { Module } from '@nestjs/common';
import { V1OrganizationController } from './controllers/v1-organization.controller';
import { SaveOrganizationService } from './services/save-organization.service';
import { UpdateOrganizationService } from './services/update-organization.service';
import { FindOrganizationsService } from './services/find-organizations.service';
import { DeleteOrganizationsService } from './services/delete-organizations.service';

@Module({
  controllers: [V1OrganizationController],
  providers: [
    SaveOrganizationService,
    UpdateOrganizationService,
    FindOrganizationsService,
    DeleteOrganizationsService,
  ],
})
export class OrganizationsModule {}
