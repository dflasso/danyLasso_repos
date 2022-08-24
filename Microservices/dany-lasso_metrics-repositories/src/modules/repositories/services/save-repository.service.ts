import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ApiError } from '../../../scheme/api-error.scheme';
import { FindTribesService } from '../../tribes/services/find-tribes.service';
import { CreateRepositoryRequestDto } from '../dtos/repositories-requests.dto';
import { Repo } from '../entities/repositorie.entity';
import ValidationServiceMsg from '../constants/validations-services.messages';

@Injectable()
export class SaveRepositoryService {
  constructor(
    @InjectRepository(Repo)
    private repoRepository: Repository<Repo>,
    private findTribesService: FindTribesService,
  ) {}

  async save(request: CreateRepositoryRequestDto): Promise<Repo> {
    const newRepo = this.repoRepository.create(request);

    const tribeRecovery = await this.findTribesService.findOneById(
      request.id_tribe,
    );
    newRepo.tribe = tribeRecovery;

    try {
      return this.repoRepository.save(newRepo);
    } catch (error) {
      const apiError = new ApiError();
      apiError.code = HttpStatus.NOT_FOUND;
      apiError.message = ValidationServiceMsg.SAVE.UNEXPECTED_ERROR;
      apiError.timestamp = new Date();
      throw new InternalServerErrorException(apiError);
    }
  }
}
