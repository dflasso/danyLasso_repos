import { Test, TestingModule } from '@nestjs/testing';
import { V1OrganizationController } from './v1-organization.controller';

describe('V1OrganizationController', () => {
  let controller: V1OrganizationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [V1OrganizationController],
    }).compile();

    controller = module.get<V1OrganizationController>(V1OrganizationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
