import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateOrganizationRequestDto } from '../dtos/organization.dto';
import { Organization } from '../entities/organization.entity';

@Injectable()
export class UpdateOrganizationService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
  ) {}

  async update(
    id_organization: number,
    request: UpdateOrganizationRequestDto,
  ): Promise<Organization> {
    const organization = await this.organizationRepository.findOne({
      where: { id_organization },
    });
    this.organizationRepository.merge(organization, request);
    return this.organizationRepository.save(organization);
  }
}
