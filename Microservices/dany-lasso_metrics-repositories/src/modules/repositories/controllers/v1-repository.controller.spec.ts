import { Test, TestingModule } from '@nestjs/testing';
import { V1RepositoryController } from './v1-repository.controller';

describe('V1RepositoryController', () => {
  let controller: V1RepositoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [V1RepositoryController],
    }).compile();

    controller = module.get<V1RepositoryController>(V1RepositoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
