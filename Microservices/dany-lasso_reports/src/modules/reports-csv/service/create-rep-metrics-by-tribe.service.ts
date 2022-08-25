import { HttpStatus, Injectable } from '@nestjs/common';
import { ApiMetricsByTribeService } from '../../../middleware/clients-ws/metrics-repos-microservice/services/api-metrics-by-tribe.service';

@Injectable()
export class CreateRepMetricsByTribeService {
  constructor(private apiMetricsByTribeService: ApiMetricsByTribeService) {}

  generate(idTribe: number) {
    return new Promise((resolve, reject) => {
      this.apiMetricsByTribeService
        .consumeApi(idTribe)
        .subscribe((response) => {
          if (
            response.status >= HttpStatus.OK &&
            response.status <= HttpStatus.AMBIGUOUS
          ) {
            resolve(response.data);
          } else {
            reject('Unexpected error consuming API find metrics by tribes');
          }
        });
    });
  }
}
