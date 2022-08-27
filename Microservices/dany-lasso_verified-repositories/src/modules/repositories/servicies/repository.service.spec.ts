import { Test, TestingModule } from '@nestjs/testing';
import { lstRepositoriesMock, RepositoryService } from './repository.service';

describe('RepositoryService', () => {
  let service: RepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepositoryService],
    }).compile();

    service = module.get<RepositoryService>(RepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of repositories with status code', () => {
    expect(service.getAllRepositories()).toBe(lstRepositoriesMock);
  });
});
