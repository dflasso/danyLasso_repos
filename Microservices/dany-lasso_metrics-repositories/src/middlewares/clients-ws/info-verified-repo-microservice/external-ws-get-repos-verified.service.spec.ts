import { Test, TestingModule } from '@nestjs/testing';
import { ExternalWsGetReposVerifiedService } from './external-ws-get-repos-verified.service';

describe('ExternalWsGetReposVerifiedService', () => {
  let service: ExternalWsGetReposVerifiedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalWsGetReposVerifiedService],
    }).compile();

    service = module.get<ExternalWsGetReposVerifiedService>(
      ExternalWsGetReposVerifiedService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
