import { Test, TestingModule } from '@nestjs/testing';
import { FindMetricsService } from './find-metrics.service';

describe('FindMetricsService', () => {
  let service: FindMetricsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindMetricsService],
    }).compile();

    service = module.get<FindMetricsService>(FindMetricsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
