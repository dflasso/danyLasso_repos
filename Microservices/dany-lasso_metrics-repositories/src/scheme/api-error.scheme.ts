export class ApiSubError {
  object: string;
  field: string;
  value: string;
  message: string;
  code: number;
}

export class ApiError {
  code: number;
  message: string;
  timestamp: Date;
  subErrors: ApiSubError[];
}
