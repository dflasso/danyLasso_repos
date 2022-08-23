import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOrganizationsService } from '../../organizations/services/find-organizations.service';
import { Repository } from 'typeorm';

import { CreateOrganizationRequestDto } from '../dtos/tribes-requests.dto';
import { Tribe } from '../entities/tribe.entity';
import validationsServicesMessages from '../constants/validations-services.messages';
import { ApiError } from '../../../scheme/api-error.scheme';

@Injectable()
export class SaveTribesService {
  constructor(
    @InjectRepository(Tribe)
    private tribeRepository: Repository<Tribe>,
    private findOrganizationsService: FindOrganizationsService,
  ) {}

  /**
   * Try to save new Tribe
   * @throw NotFoundException - when the id organization don't exist (state = 404)
   * @throw InternalServerErrorException - when the process has problems in the comunication with DB (state = 500)
   * @param request
   * @returns Tribe Entiy saved
   */
  async save(request: CreateOrganizationRequestDto) {
    const newTribe = this.tribeRepository.create(request);

    //Recovery Organization from store
    const organizationFound = await this.findOrganizationsService.findOneById(
      request.id_organization,
    );
    newTribe.organization = organizationFound;
    try {
      return this.tribeRepository.save(newTribe);
    } catch (error) {
      const apiError = new ApiError();
      apiError.code = HttpStatus.INTERNAL_SERVER_ERROR;
      apiError.message = validationsServicesMessages.SAVE.UNEXPECTED_ERROR;
      apiError.timestamp = new Date();
      throw new InternalServerErrorException(apiError);
    }
  }
}
