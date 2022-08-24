import { Test, TestingModule } from '@nestjs/testing';
import { HandlerFindMetricsByTribesService } from './handler-find-metrics-by-tribes.service';

describe('HandlerFindMetricsByTribesService', () => {
  let service: HandlerFindMetricsByTribesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HandlerFindMetricsByTribesService],
    }).compile();

    service = module.get<HandlerFindMetricsByTribesService>(
      HandlerFindMetricsByTribesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
