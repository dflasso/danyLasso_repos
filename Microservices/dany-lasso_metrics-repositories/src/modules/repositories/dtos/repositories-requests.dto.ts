import { ApiProperty, OmitType } from '@nestjs/swagger';
import {
  IsAlpha,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsDate,
} from 'class-validator';
import { Metric } from '../../metrics/entities/metric.entity';
import { Tribe } from '../../tribes/entities/tribe.entity';

export class RepositoryBaseDto {
  @ApiProperty()
  @IsNumber()
  id_repository: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsAlpha()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsAlpha()
  state: string;

  @ApiProperty()
  @IsDate()
  create_time: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsAlpha()
  status: string;
  @ApiProperty()
  metric: Metric;
  @ApiProperty()
  tribe: Tribe;
  @ApiProperty()
  @IsDate()
  updateAt: Date;
}

export class CreateRepositoryRequestDto extends OmitType(RepositoryBaseDto, [
  'id_repository',
  'create_time',
  'metric',
  'tribe',
  'updateAt',
] as const) {
  @ApiProperty()
  @IsNumber()
  id_tribe: number;
}
