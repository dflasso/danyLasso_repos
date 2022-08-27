import { Injectable } from '@nestjs/common';
import { AllRepositoriesVerifiedResponse } from '../dtos/all-repos-verified-res.dto';

export const lstRepositoriesMock: AllRepositoriesVerifiedResponse[] = [
  {
    id: 1,
    state: 604,
  },
  {
    id: 2,
    state: 605,
  },
  {
    id: 3,
    state: 606,
  },
];

@Injectable()
export class RepositoryService {
  getAllRepositories() {
    return lstRepositoriesMock;
  }
}
