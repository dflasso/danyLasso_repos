import { Test, TestingModule } from '@nestjs/testing';
import { SaveMetricsService } from './save-metrics.service';

describe('SaveMetricsService', () => {
  let service: SaveMetricsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaveMetricsService],
    }).compile();

    service = module.get<SaveMetricsService>(SaveMetricsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
