import { Module } from '@nestjs/common';
import { V1OrganizationController } from './controllers/v1-organization.controller';

@Module({
  controllers: [V1OrganizationController]
})
export class OrganizationsModule {}
