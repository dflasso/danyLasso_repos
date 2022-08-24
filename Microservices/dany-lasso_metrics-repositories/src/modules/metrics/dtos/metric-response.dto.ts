export class ReposVerifiedReponse {
  id: number;
  state: number;
}

export class MetricsByTribesResponse {
  id: string;
  name: string;
  tribe: string;
  organization: string;
  coverage: string;
  codeSmells: number;
  bugs: number;
  vulnerabilities: number;
  hotspots: number;
  verificationState: string;
  state: string;
}
