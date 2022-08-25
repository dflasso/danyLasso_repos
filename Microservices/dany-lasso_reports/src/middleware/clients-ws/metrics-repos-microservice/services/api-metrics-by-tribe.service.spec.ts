import { Test, TestingModule } from '@nestjs/testing';
import { ApiMetricsByTribeService } from './api-metrics-by-tribe.service';

describe('ApiMetricsByTribeService', () => {
  let service: ApiMetricsByTribeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiMetricsByTribeService],
    }).compile();

    service = module.get<ApiMetricsByTribeService>(ApiMetricsByTribeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
