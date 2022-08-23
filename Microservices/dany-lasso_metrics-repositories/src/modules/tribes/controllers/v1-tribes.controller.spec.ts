import { Test, TestingModule } from '@nestjs/testing';
import { V1TribesController } from './v1-tribes.controller';

describe('V1TribesController', () => {
  let controller: V1TribesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [V1TribesController],
    }).compile();

    controller = module.get<V1TribesController>(V1TribesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
