import { Test, TestingModule } from '@nestjs/testing';
import { FindRepositoryService } from './find-repository.service';

describe('FindRepositoryService', () => {
  let service: FindRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindRepositoryService],
    }).compile();

    service = module.get<FindRepositoryService>(FindRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
