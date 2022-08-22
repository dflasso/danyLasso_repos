import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

import { Organization } from '../../organizations/entities/organization.entity';
import { Repo } from '../../repositories/entities/repositorie.entity';

export class TribesBaseDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  id_tribe: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  status: number;

  @ApiProperty()
  repositories: Repo[];

  @ApiProperty()
  organization: Organization;

  @ApiProperty()
  createAt: Date;

  @ApiProperty()
  updateAt: Date;
}

export class CreateOrganizationRequestDto extends OmitType(TribesBaseDto, [
  'id_tribe',
  'createAt',
  'updateAt',
  'repositories',
  'organization',
] as const) {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  id_organization: number;
}
