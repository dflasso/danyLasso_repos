import { HttpStatus, Injectable } from '@nestjs/common';
import { Readable } from 'stream';
import { ApiMetricsByTribeResponse } from '../../../middleware/clients-ws/metrics-repos-microservice/dtos/apis-response.dto';
import { ApiMetricsByTribeService } from '../../../middleware/clients-ws/metrics-repos-microservice/services/api-metrics-by-tribe.service';
import { convertFromApiMetricsByTribeResponseToCsvAsString } from '../serializer/dto-to-csv-format.serializer';

@Injectable()
export class CreateRepMetricsByTribeService {
  constructor(private apiMetricsByTribeService: ApiMetricsByTribeService) {}

  generate(idTribe: number): Promise<Readable> {
    return new Promise((resolve, reject) => {
      this.apiMetricsByTribeService
        .consumeApi(idTribe)
        .subscribe((response) => {
          if (
            response.status >= HttpStatus.OK &&
            response.status <= HttpStatus.AMBIGUOUS
          ) {
            const fileStream = this.createFile(response.data);
            resolve(fileStream);
          } else {
            reject('Unexpected error consuming API find metrics by tribes');
          }
        });
    });
  }

  createFile(data: ApiMetricsByTribeResponse[]): Readable {
    const csvContent = convertFromApiMetricsByTribeResponseToCsvAsString(data);
    const readable = Readable.from([csvContent]);
    readable.setEncoding('utf-8');
    return readable;
  }
}
