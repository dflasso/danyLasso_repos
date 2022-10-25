import { Test, TestingModule } from '@nestjs/testing';
import {
  lstRepositoriesMock,
  RepositoryService,
} from '../servicies/repository.service';
import { ControllerController } from './controller.controller';

describe('ControllersController', () => {
  let controller: ControllerController;
  let service: RepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllerController],
      providers: [RepositoryService],
    }).compile();

    controller = module.get<ControllerController>(ControllerController);
    service = module.get<RepositoryService>(RepositoryService);
  });

  it('should return an array of repositories with status code', async () => {
    jest
      .spyOn(service, 'getAllRepositories')
      .mockImplementation(() => lstRepositoriesMock);

    expect(await controller.getAllRepositories()).toBe(lstRepositoriesMock);
  });
});
