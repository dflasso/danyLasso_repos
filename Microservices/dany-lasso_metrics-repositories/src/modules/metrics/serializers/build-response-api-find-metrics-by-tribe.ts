import { TypesRepoStateSpanish } from 'src/modules/repositories/constants/type-repo-state';
import { Repo } from 'src/modules/repositories/entities/repositorie.entity';
import { TypesVerificationRepo } from '../constants/types-verification-repo';
import {
  MetricsByTribesResponse,
  ReposVerifiedReponse,
} from '../dtos/metric-response.dto';

const build = (
  responseApiReposVerivied: ReposVerifiedReponse,
  reposRecovery: Repo,
  nameOrganization: string,
): MetricsByTribesResponse => {
  const metricsSerialized = new MetricsByTribesResponse();

  //assignment verificationState
  Object.values(TypesVerificationRepo).forEach((typeVerification) => {
    if (typeVerification.value === responseApiReposVerivied.state) {
      metricsSerialized.verificationState = typeVerification.message;
    }
  });
  console.log(reposRecovery);
  metricsSerialized.id = reposRecovery.id_repository.toString();
  metricsSerialized.name = reposRecovery.name;
  metricsSerialized.tribe = reposRecovery.tribe?.name;
  metricsSerialized.organization = nameOrganization;
  metricsSerialized.coverage = `${Number(reposRecovery.metric.coverage).toFixed(
    2,
  )}%`;
  metricsSerialized.codeSmells = Number(reposRecovery.metric.code_smells);
  metricsSerialized.bugs = Number(reposRecovery.metric.bugs);
  metricsSerialized.vulnerabilities = Number(
    reposRecovery.metric.vulnerabilities,
  );
  metricsSerialized.hotspots = Number(reposRecovery.metric.hotspot);

  metricsSerialized.state = TypesRepoStateSpanish[reposRecovery.state];
  return metricsSerialized;
};

const buildList = (
  responseApiReposVerivied: ReposVerifiedReponse[],
  reposRecovery: Repo[],
  nameOrganization: string,
): MetricsByTribesResponse[] => {
  const ltsMetricsSerialized: MetricsByTribesResponse[] = [];
  responseApiReposVerivied.map((repoVerified) => {
    const repoRecoveryMatched = reposRecovery.filter(
      (repoRecovery) => repoRecovery.id_repository === repoVerified.id,
    );
    if (repoRecoveryMatched.length >= 1) {
      const metricsSerialized = build(
        repoVerified,
        repoRecoveryMatched[0],
        nameOrganization,
      );
      ltsMetricsSerialized.push(metricsSerialized);
    }
  });
  return ltsMetricsSerialized;
};

export const BuilderResponseApiFindMetricsByTribe = {
  buildList,
  build,
};
