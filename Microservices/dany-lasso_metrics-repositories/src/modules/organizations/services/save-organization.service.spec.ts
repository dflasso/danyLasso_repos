import { Test, TestingModule } from '@nestjs/testing';
import { SaveOrganizationService } from './save-organization.service';

describe('SaveOrganizationService', () => {
  let service: SaveOrganizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaveOrganizationService],
    }).compile();

    service = module.get<SaveOrganizationService>(SaveOrganizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
