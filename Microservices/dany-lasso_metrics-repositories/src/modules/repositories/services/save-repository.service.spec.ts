import { Test, TestingModule } from '@nestjs/testing';
import { SaveRepositoryService } from './save-repository.service';

describe('SaveRepositoryService', () => {
  let service: SaveRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaveRepositoryService],
    }).compile();

    service = module.get<SaveRepositoryService>(SaveRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
