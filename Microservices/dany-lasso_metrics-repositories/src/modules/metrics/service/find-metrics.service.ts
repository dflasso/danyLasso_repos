import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';

import { FindRepositoryService } from '../../repositories/services/find-repository.service';
import { FindMetricsByTribe } from '../dtos/metric-requests.dto';
import { ApiError } from '../../../scheme/api-error.scheme';
import ValidationsServicesMsg from '../constants/validations-services.messages';
@Injectable()
export class FindMetricsService {
  constructor(private findRepositoryService: FindRepositoryService) {}

  /**
   * Try to find
   * @param idTribe
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
