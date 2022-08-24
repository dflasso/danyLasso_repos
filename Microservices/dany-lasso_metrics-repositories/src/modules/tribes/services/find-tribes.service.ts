import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ApiError } from '../../../scheme/api-error.scheme';
import { Tribe } from '../entities/tribe.entity';
import ValidationServiceMsg from '../constants/validations-services.messages';

@Injectable()
export class FindTribesService {
  constructor(
    @InjectRepository(Tribe)
    private tribeRepository: Repository<Tribe>,
  ) {}

  findAll() {
    return this.tribeRepository.find();
  }

  async findOneById(id: number): Promise<Tribe> {
    let tribeReovery = null;

    try {
      tribeReovery = await this.tribeRepository.findOne({
        relations: {
          organization: true,
        },
        where: {
          id_tribe: id,
        },
      });
    } catch (error) {
      const apiError = new ApiError();
      apiError.code = HttpStatus.NOT_FOUND;
      apiError.message = ValidationServiceMsg.FIND_ONE_BY_ID.UNEXPECTED_ERROR;
      apiError.timestamp = new Date();
      throw new InternalServerErrorException(apiError);
    }

    if (!tribeReovery) {
      const apiError = new ApiError();
      apiError.code = HttpStatus.NOT_FOUND;
      apiError.message = ValidationServiceMsg.FIND_ONE_BY_ID.NOT_FOUND;
      apiError.timestamp = new Date();
      throw new NotFoundException(apiError);
    }

    return tribeReovery;
  }
}
