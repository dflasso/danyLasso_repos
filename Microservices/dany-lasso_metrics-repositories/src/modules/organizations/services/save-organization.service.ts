import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizationRequestDto } from '../dtos/organization.dto';
import { Organization } from '../entities/organization.entity';

@Injectable()
export class SaveOrganizationService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
  ) {}

  save(request: CreateOrganizationRequestDto) {
    const newOrganization = this.organizationRepository.create(request);
    return this.organizationRepository.save(newOrganization);
  }
}
