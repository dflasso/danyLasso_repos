import { ApiProperty, OmitType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  Max,
  IsPositive,
  IsDate,
  IsString,
} from 'class-validator';

import { Repo } from '../../repositories/entities/repositorie.entity';

export class MetricBaseDto {
  @ApiProperty()
  @IsNumber()
  id_repository: number;

  @ApiProperty()
  repo: Repo;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Max(100)
  @IsPositive()
  coverage: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  bugs: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  vulnerabilities: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  hotspot: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  code_smells: number;

  @ApiProperty()
  @IsDate()
  createAt: Date;

  @ApiProperty()
  @IsDate()
  updateAt: Date;
}

export class CreateMetricRequestDto extends OmitType(MetricBaseDto, [
  'repo',
  'createAt',
  'updateAt',
] as const) {}

export class FindMetricsByTribe {
  @ApiProperty()
  @IsNumber()
  idTribe: number;

  @ApiProperty()
  @IsDate()
  CreatedFrom: Date;

  @ApiProperty()
  @IsDate()
  CreatedTo: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Max(100)
  @IsPositive()
  coverageMetricMin: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Max(100)
  @IsPositive()
  coverageMetricMax: number;
}
