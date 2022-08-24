import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FindTribesService } from '../../tribes/services/find-tribes.service';
import { Metric } from '../entities/metric.entity';
import { FindRepositoryService } from '../../repositories/services/find-repository.service';
import { FindMetricsByTribe } from '../dtos/metric-requests.dto';
import { ApiError } from 'src/scheme/api-error.scheme';
import ValidationsServicesMsg from '../constants/validations-services.messages';
@Injectable()
export class FindMetricsService {
  constructor(
    @InjectRepository(Metric)
    private metricRepository: Repository<Metric>,
    private findTribesService: FindTribesService,
    private findRepositoryService: FindRepositoryService,
  ) {}

  /**
   * Try to find
   * @param idTribe
   * @throw NotFoundException - when tribe is not found by id inbound
   * @throw NotFoundException - when repositories is not found by params
   */
  async findAllByIdTribe(request: FindMetricsByTribe) {
    //if tribe not exist throw NotFoundException
    await this.findTribesService.findOneById(request.idTribe);

    try {
      return await this.findRepositoryService.findAllByTribeAndCreateTimeAndStateAndCoverageMetric(
        request,
      );
    } catch (exception) {
      if (exception instanceof NotFoundException) {
        const apiError = new ApiError();
        apiError.code = HttpStatus.NOT_FOUND;
        apiError.message =
          ValidationsServicesMsg.FIND_ALL_BY_ID_TRIBE.NOT_FOUND;
        apiError.timestamp = new Date();
        throw new NotFoundException(apiError);
      }

      throw exception;
    }
  }
}
