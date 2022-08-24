import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';

import { ApiError } from '../../../scheme/api-error.scheme';
import { Repo } from '../entities/repositorie.entity';
import ValidationServiceMsg from '../constants/validations-services.messages';
import { FindMetricsByTribe } from 'src/modules/metrics/dtos/metric-requests.dto';

/**
 * Find services in the Model Repo
 * @author dflasso
 * @version 1.0.0
 */
@Injectable()
export class FindRepositoryService {
  constructor(
    @InjectRepository(Repo)
    private repoRepository: Repository<Repo>,
  ) {}

  /**
   * Find all repositories with your metrics
   * @returns Promise<Repo[]>
   */
  findAll() {
    return this.repoRepository.find({
      relations: ['metric'],
    });
  }

  /**
   * Try to find Repo by Id
   * @param id
   * @throw InternalServerErrorException - when exist problems with the comunication with db
   * @throw NotFoundException - when the repository is not found by id inbound
   * @returns Repo
   */
  async findOnById(id: number): Promise<Repo> {
    let repoRecovery: Repo = null;
    try {
      repoRecovery = await this.repoRepository.findOne({
        where: {
          id_repository: id,
        },
      });
    } catch (error) {
      const apiError = new ApiError();
      apiError.code = HttpStatus.NOT_FOUND;
      apiError.message = ValidationServiceMsg.FIND_ONE_BY_ID.UNEXPECTED_ERROR;
      apiError.timestamp = new Date();
      throw new InternalServerErrorException(apiError);
    }

    if (!repoRecovery) {
      const apiError = new ApiError();
      apiError.code = HttpStatus.NOT_FOUND;
      apiError.message = ValidationServiceMsg.FIND_ONE_BY_ID.UNEXPECTED_ERROR;
      apiError.timestamp = new Date();
      throw new NotFoundException(apiError);
    }

    return repoRecovery;
  }

  /**
   * Try Repository by many params
   * @param idTribe
   * @param createTimeFrom
   * @param createTimeTo
   * @param state
   * @param coverageMetricMin
   * @param coverageMetricMax
   * @throw InternalServerErrorException - when exist problems with the comunication with db
   * @throw NotFoundException - when the repositories is not found by params inbound
   * @returns Repo[]
   */
  async findAllByTribeAndCreateTimeAndStateAndCoverageMetric(
    request: FindMetricsByTribe,
  ) {
    let reposRecovery: Repo[] = null;
    try {
      //execute query
      reposRecovery = await this.repoRepository.find({
        relations: {
          metric: true,
          tribe: true,
        },
        where: {
          create_time: Between(request.CreatedFrom, request.CreatedTo),
          state: request.state,
          tribe: {
            id_tribe: request.idTribe,
          },
          metric: {
            coverage: Between(
              request.coverageMetricMin,
              request.coverageMetricMax,
            ),
          },
        },
      });
    } catch (error) {
      const apiError = new ApiError();
      apiError.code = HttpStatus.NOT_FOUND;
      apiError.message =
        ValidationServiceMsg.FIND_ALL_BY_CREATE_TIME_AND_STATE_AND_COVERAGE_METRIC.UNEXPECTED_ERROR;
      apiError.timestamp = new Date();
      throw new InternalServerErrorException(apiError);
    }

    //check if exits repos
    if (!reposRecovery || reposRecovery.length === 0) {
      const apiError = new ApiError();
      apiError.code = HttpStatus.NOT_FOUND;
      apiError.message =
        ValidationServiceMsg.FIND_ALL_BY_CREATE_TIME_AND_STATE_AND_COVERAGE_METRIC.NOT_FOUND;
      apiError.timestamp = new Date();
      throw new NotFoundException(apiError);
    }

    return reposRecovery;
  }
}
