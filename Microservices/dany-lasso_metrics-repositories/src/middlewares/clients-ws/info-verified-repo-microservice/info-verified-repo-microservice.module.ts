import { Module } from '@nestjs/common';
import { ExternalWsGetReposVerifiedService } from './external-ws-get-repos-verified.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ExternalWsGetReposVerifiedService],
  exports: [ExternalWsGetReposVerifiedService],
})
export class InfoVerifiedRepoMicroserviceModule {}
