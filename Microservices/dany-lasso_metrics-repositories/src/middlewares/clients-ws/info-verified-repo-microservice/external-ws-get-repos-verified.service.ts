import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

import config from '../../../settings/config';

@Injectable()
export class ExternalWsGetReposVerifiedService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    private readonly httpService: HttpService,
  ) {}

  async apiV1RepositoriesVerified() {
    const uri = `${this.configService.externalWs.reposVerified.host}${this.configService.externalWs.reposVerified.apis.v1.getAll}`;
    return this.httpService.get(uri);
  }
}
