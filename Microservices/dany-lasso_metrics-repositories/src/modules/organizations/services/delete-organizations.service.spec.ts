import { Test, TestingModule } from '@nestjs/testing';
import { DeleteOrganizationsService } from './delete-organizations.service';

describe('DeleteOrganizationsService', () => {
  let service: DeleteOrganizationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteOrganizationsService],
    }).compile();

    service = module.get<DeleteOrganizationsService>(
      DeleteOrganizationsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
