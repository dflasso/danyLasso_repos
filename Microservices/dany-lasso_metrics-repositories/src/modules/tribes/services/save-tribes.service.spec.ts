import { Test, TestingModule } from '@nestjs/testing';
import { SaveTribesService } from './save-tribes.service';

describe('SaveTribesService', () => {
  let service: SaveTribesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaveTribesService],
    }).compile();

    service = module.get<SaveTribesService>(SaveTribesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
