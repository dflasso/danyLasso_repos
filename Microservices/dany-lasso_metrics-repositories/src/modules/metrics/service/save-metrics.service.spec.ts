import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FindRepositoryService } from 'src/modules/repositories/services/find-repository.service';
import { Repository } from 'typeorm';
import { CreateMetricRequestDto } from '../dtos/metric-requests.dto';
import { Metric } from '../entities/metric.entity';
import { SaveMetricsService } from './save-metrics.service';

describe('SaveMetricsService', () => {
  let service: SaveMetricsService;
  let metricRepository: Repository<Metric>;
  let findRepositoryService: FindRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SaveMetricsService,
        {
          provide: getRepositoryToken(Metric),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<SaveMetricsService>(SaveMetricsService);
    metricRepository = module.get<Repository<Metric>>(
      getRepositoryToken(Metric),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return one organization saved', async () => {
    const request: CreateMetricRequestDto = {
      id_repository: 1,
      coverage: 75.01,
      bugs: 1,
      vulnerabilities: 0,
      hotspot: 0,
      code_smells: 1,
    };

    const metricCreated: Metric = {
      repo: null,
      createAt: new Date(),
      updateAt: new Date(),
      ...request,
    };

    const fakeRepo = {
      id_repository: 1,
      name: 'test',
      state: 'A',
      status: 'E',
      metric: null,
      tribe: null,
      create_time: new Date(),
      updateAt: new Date(),
    };

    jest
      .spyOn(metricRepository, 'create')
      .mockImplementation(() => metricCreated);

      jest
      .spyOn(metricRepository, 'create')
      .mockImplementation(() => metricCreated);
  });
});
