import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';

import { FindTribesService } from '../../tribes/services/find-tribes.service';
import { FindRepositoryService } from '../../repositories/services/find-repository.service';
import { FindMetricsByTribe } from '../dtos/metric-requests.dto';
import { ApiError } from 'src/scheme/api-error.scheme';
import ValidationsServicesMsg from '../constants/validations-services.messages';
@Injectable()
export class FindMetricsService {
  constructor(
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
