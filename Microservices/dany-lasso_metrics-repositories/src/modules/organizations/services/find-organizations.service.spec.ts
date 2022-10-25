import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from '../entities/organization.entity';
import { FindOrganizationsService } from './find-organizations.service';
import { NotFoundException } from '@nestjs/common';

describe('Model Serive - Operation Find  in Organizations', () => {
  let service: FindOrganizationsService;
  let organizationRepository: Repository<Organization>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOrganizationsService,
        {
          // how you provide the injection token in a test instance
          provide: getRepositoryToken(Organization),
          // as a class value, Repository needs no generics
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<FindOrganizationsService>(FindOrganizationsService);
    organizationRepository = module.get<Repository<Organization>>(
      getRepositoryToken(Organization),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe(`Cases where data inbound haven't errors`, () => {
    it('should return one organization', async () => {
      const result: Organization = {
        id_organization: 1,
        name: 'test',
        status: 1,
        tribes: null,
        createAt: new Date(),
        updateAt: new Date(),
      };

      jest
        .spyOn(organizationRepository, 'findOne')
        .mockImplementation(() => Promise.resolve(result));

      expect(await service.findOneById(1)).toBe(result);
    });

    it('should return all organizations', async () => {
      const result: Organization = {
        id_organization: 1,
        name: 'test',
        status: 1,
        tribes: null,
        createAt: new Date(),
        updateAt: new Date(),
      };

      jest
        .spyOn(organizationRepository, 'find')
        .mockImplementation(() => Promise.resolve([result]));

      expect(await service.findAll()).toStrictEqual([result]);
    });
  });

  describe(`Cases where data inbound have errors`, () => {
    it('should throw NotFoundException', async () => {
      const result: Organization = null;

      jest
        .spyOn(organizationRepository, 'findOne')
        .mockImplementation(() => Promise.resolve(result));

      expect(await service.findOneById(1)).toThrowError(NotFoundException);
    });
  });
});
