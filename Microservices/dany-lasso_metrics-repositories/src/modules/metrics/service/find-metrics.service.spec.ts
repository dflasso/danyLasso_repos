import { Test, TestingModule } from '@nestjs/testing';

import { FindMetricsService } from './find-metrics.service';
import { FindRepositoryService } from '../../repositories/services/find-repository.service';
import { Repo } from '../../repositories/entities/repositorie.entity';
import { FindMetricsByTribe } from '../dtos/metric-requests.dto';
import { createMock } from '@golevelup/ts-jest';

describe('FindMetricsService', () => {
  let service: FindMetricsService;
  let findRepositoryService: FindRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindMetricsService,
        {
          provide: FindRepositoryService,
          useValue: createMock<FindRepositoryService>(),
        },
      ],
    }).compile();

    service = module.get<FindMetricsService>(FindMetricsService);
    findRepositoryService = module.get<FindRepositoryService>(
      FindRepositoryService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe(`Cases where data inbound haven't errors`, () => {
    it('should return repositories that meet the filters ', async () => {
      const requets: FindMetricsByTribe = {
        idTribe: 1,
        CreatedFrom: new Date(`${new Date().getFullYear()}-01-01`),
        CreatedTo: new Date(`${new Date().getFullYear()}-12-31`),
        state: 'E',
        coverageMetricMin: 75,
        coverageMetricMax: 100,
      };

      const reposRecovery: Repo = {
        id_repository: 1,
        name: 'test',
        state: 'E',
        status: 'A',
        metric: null,
        tribe: null,
        create_time: new Date(),
        updateAt: new Date(),
      };

      jest
        .spyOn(
          findRepositoryService,
          'findAllByTribeAndCreateTimeAndStateAndCoverageMetric',
        )
        .mockImplementation(() => Promise.resolve([reposRecovery]));

      expect(await service.findAllByIdTribe(requets)).toStrictEqual([
        reposRecovery,
      ]);
    });
  });
});
