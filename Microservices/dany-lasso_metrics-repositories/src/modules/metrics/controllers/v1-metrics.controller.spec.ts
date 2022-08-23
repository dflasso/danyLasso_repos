import { Test, TestingModule } from '@nestjs/testing';
import { V1MetricsController } from './v1-metrics.controller';

describe('V1MetricsController', () => {
  let controller: V1MetricsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [V1MetricsController],
    }).compile();

    controller = module.get<V1MetricsController>(V1MetricsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
