import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Repo } from '../entities/repositorie.entity';

@Injectable()
export class FindRepositoryService {
  constructor(
    @InjectRepository(Repo)
    private repoRepository: Repository<Repo>,
  ) {}

  /**
   * Find all repositories with your metrics
   * @returns Promise<Repo[]>
   */
  findAll() {
    return this.repoRepository.find({
      relations: ['metric'],
    });
  }
}
