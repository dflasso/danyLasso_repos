import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import config from '../../../../settings/config';

@Injectable()
export class ApiMetricsByTribeService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    private readonly httpService: HttpService,
  ) {}

  consumeApi(idTribe: number) {
    let uri = this.configService.externalWs.reposMetric.host;
    uri = uri.concat(
      this.configService.externalWs.reposMetric.apis.v1.findByTribe,
    );
    uri = uri.replace(':idTribe', idTribe.toString());
    return this.httpService.get(uri);
  }
}
