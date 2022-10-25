import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizationRequestDto } from '../dtos/organization.dto';
import { Organization } from '../entities/organization.entity';
import { SaveOrganizationService } from './save-organization.service';

describe('SaveOrganizationService', () => {
  let service: SaveOrganizationService;
  let organizationRepository: Repository<Organization>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SaveOrganizationService,
        {
          provide: getRepositoryToken(Organization),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<SaveOrganizationService>(SaveOrganizationService);
    organizationRepository = module.get<Repository<Organization>>(
      getRepositoryToken(Organization),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return one organization saved', async () => {
    const request: CreateOrganizationRequestDto = {
      name: 'test',
      status: 1,
    };

    const result: Organization = {
      id_organization: 1,
      name: 'test',
      status: 1,
      tribes: null,
      createAt: new Date(),
      updateAt: new Date(),
    };

    jest
      .spyOn(organizationRepository, 'create')
      .mockImplementation(() => result);

    jest
      .spyOn(organizationRepository, 'save')
      .mockImplementation(() => Promise.resolve(result));

    expect(await service.save(request)).toBe(result);
  });
});
