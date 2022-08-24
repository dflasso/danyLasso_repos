import { HttpStatus, Injectable } from '@nestjs/common';

import { ExternalWsGetReposVerifiedService } from '../../../middlewares/clients-ws/info-verified-repo-microservice/external-ws-get-repos-verified.service';
import { FindMetricsByTribe } from '../dtos/metric-requests.dto';
import { FindMetricsService } from './find-metrics.service';
import { FindTribesService } from '../../tribes/services/find-tribes.service';
import { BuilderResponseApiFindMetricsByTribe } from '../serializers/build-response-api-find-metrics-by-tribe';
import {
  MetricsByTribesResponse,
  ReposVerifiedReponse,
} from '../dtos/metric-response.dto';
import { ApiError } from 'src/scheme/api-error.scheme';

import ValidationsServicesMsg from '../constants/validations-services.messages';

@Injectable()
export class HandlerFindMetricsByTribesService {
  constructor(
    private findMetricsService: FindMetricsService,
    private externalWsGetReposVerifiedService: ExternalWsGetReposVerifiedService,
    private findTribesService: FindTribesService,
  ) {}

  /**
   * Try to find
   * @param idTribe
   * @throw NotFoundException - when tribe is not found by id inbound
   * @throw NotFoundException - when repositories is not found by params
   */
  async handle(
    request: FindMetricsByTribe,
  ): Promise<MetricsByTribesResponse[]> {
    //if tribe not exist throw NotFoundException
    const tribeRecovery = await this.findTribesService.findOneById(
      request.idTribe,
    );
    const reposRecovery = await this.findMetricsService.findAllByIdTribe(
      request,
    );

    const observableApi =
      await this.externalWsGetReposVerifiedService.apiV1RepositoriesVerified();

    return new Promise((resolve, reject) => {
      observableApi.subscribe((response) => {
        if (
          response.status >= HttpStatus.OK &&
          response.status <= HttpStatus.AMBIGUOUS
        ) {
          const data: ReposVerifiedReponse[] = response.data;
          const lstMetricsByTribe =
            BuilderResponseApiFindMetricsByTribe.buildList(
              data,
              reposRecovery,
              tribeRecovery.organization.name,
            );
          console.log('lstMetricsByTribe ', lstMetricsByTribe);
          resolve(lstMetricsByTribe);
        } else {
          const apiError = new ApiError();
          apiError.code = HttpStatus.INTERNAL_SERVER_ERROR;
          apiError.message =
            ValidationsServicesMsg.FIND_ALL_BY_ID_TRIBE.NOT_FOUND;
          apiError.timestamp = new Date();
          reject(apiError);
        }
      });
    });
  }
}
