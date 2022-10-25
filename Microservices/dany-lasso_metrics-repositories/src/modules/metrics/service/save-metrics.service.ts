import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FindRepositoryService } from '../../repositories/services/find-repository.service';
import { CreateMetricRequestDto } from '../dtos/metric-requests.dto';
import { Metric } from '../entities/metric.entity';
import { ApiError } from '../../../scheme/api-error.scheme';
import ValidationServiceMsg from '../constants/validations-services.messages';

/**
 * @author dflasso
 * @version 1.0.0
 */
@Injectable()
export class SaveMetricsService {
  constructor(
    @InjectRepository(Metric)
    private metricRepository: Repository<Metric>,
    private findRepositoryService: FindRepositoryService,
  ) {}

  /**
   * try register new metric
   * @param request
   * @throw NotFoundException - when the repository is not found by id inbound
   * @returns
   */
  async save(request: CreateMetricRequestDto): Promise<Metric> {
    const newMetric = this.metricRepository.create(request);

    const repoReovery = await this.findRepositoryService.findOnById(
      request.id_repository,
    );
    newMetric.repo = repoReovery;
    newMetric.id_repository = repoReovery.id_repository;

    try {
      return await this.metricRepository.save(newMetric);
    } catch (error) {
      const apiError = new ApiError();
      apiError.code = HttpStatus.NOT_FOUND;
      apiError.message = ValidationServiceMsg.SAVE.UNEXPECTED_ERROR;
      apiError.timestamp = new Date();
      throw new InternalServerErrorException(apiError);
    }
  }
}
