import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // 👈 import
import { Repository } from 'typeorm';

import { Organization } from '../entities/organization.entity';
@Injectable()
export class FindOrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
  ) {}

  findAll() {
    return this.organizationRepository.find();
  }
}
