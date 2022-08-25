import { ApiMetricsByTribeResponse } from '../../../middleware/clients-ws/metrics-repos-microservice/dtos/apis-response.dto';
import { HeadersReportMetricsByTribe } from '../constants/headers-reportes';

export const convertFromApiMetricsByTribeResponseToCsvAsString = (
  data: ApiMetricsByTribeResponse[],
) => {
  const headers = HeadersReportMetricsByTribe.map((header) => header.columnName).join(',');

  const rows = data
    .map((repository) => {
      let row = '';
      HeadersReportMetricsByTribe.forEach((header) => {
        row = row.concat(repository[header.fieldObject]).concat(',');
      });
      return row;
    })
    .join('\n');

  return headers.concat('\n').concat(rows);
};
