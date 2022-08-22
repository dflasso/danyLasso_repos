import { Test, TestingModule } from '@nestjs/testing';
import { FindTribesService } from './find-tribes.service';

describe('FindTribesService', () => {
  let service: FindTribesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindTribesService],
    }).compile();

    service = module.get<FindTribesService>(FindTribesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
