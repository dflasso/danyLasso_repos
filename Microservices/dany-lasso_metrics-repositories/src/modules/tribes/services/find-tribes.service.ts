import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tribe } from '../entities/tribe.entity';

@Injectable()
export class FindTribesService {
  constructor(
    @InjectRepository(Tribe)
    private tribeRepository: Repository<Tribe>,
  ) {}

  findAll() {
    return this.tribeRepository.find();
  }
}
