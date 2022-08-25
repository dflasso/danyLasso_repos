import { Test, TestingModule } from '@nestjs/testing';
import { V1ReportsCsvController } from './v1-reports-csv.controller';

describe('V1ReportsCsvController', () => {
  let controller: V1ReportsCsvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [V1ReportsCsvController],
    }).compile();

    controller = module.get<V1ReportsCsvController>(V1ReportsCsvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
