import { Test, TestingModule } from '@nestjs/testing';
import { FindOrganizationsService } from './find-organizations.service';

describe('FindOrganizationsService', () => {
  let service: FindOrganizationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOrganizationsService],
    }).compile();

    service = module.get<FindOrganizationsService>(FindOrganizationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
