import { Test, TestingModule } from '@nestjs/testing';
import { CreateRepMetricsByTribeService } from './create-rep-metrics-by-tribe.service';

describe('CreateRepMetricsByTribeService', () => {
  let service: CreateRepMetricsByTribeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateRepMetricsByTribeService],
    }).compile();

    service = module.get<CreateRepMetricsByTribeService>(
      CreateRepMetricsByTribeService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
