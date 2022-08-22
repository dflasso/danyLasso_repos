import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // 👈 import
import { ApiError } from 'src/scheme/api-error.scheme';
import { Repository } from 'typeorm';

import { Organization } from '../entities/organization.entity';
import ValidationServiceMsg from '../constants/validations-services.messages';
@Injectable()
export class FindOrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
  ) {}

  findAll() {
    return this.organizationRepository.find();
  }

  async findOneById(id: number) {
    const organizationFound = await this.organizationRepository.findOne({
      where: {
        id_organization: id,
      },
    });

    if (!organizationFound) {
      const apiError = new ApiError();
      apiError.code = HttpStatus.NOT_FOUND;
      apiError.message = ValidationServiceMsg.FIND_ONE_BY_ID.NOT_FOUND;
      apiError.timestamp = new Date();
      throw new NotFoundException(apiError);
    }

    return organizationFound;
  }
}
