import { Test, TestingModule } from '@nestjs/testing';
import { UpdateOrganizationService } from './update-organization.service';

describe('UpdateOrganizationService', () => {
  let service: UpdateOrganizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateOrganizationService],
    }).compile();

    service = module.get<UpdateOrganizationService>(UpdateOrganizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
