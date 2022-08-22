import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsAlpha,
  IsPositive,
} from 'class-validator';
import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';

import validationsDtoMsg from '../constants/validations-dtos.messages';

export class OrganizationBaseDto {
  @ApiProperty()
  @IsNumber()
  id_organization: number;

  @ApiProperty()
  @IsNotEmpty({ message: validationsDtoMsg.FIELDS.NAME.IS_EMPTY })
  @IsString({ message: validationsDtoMsg.FIELDS.NAME.IS_NOT_STRING })
  @IsAlpha()
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: validationsDtoMsg.FIELDS.STATUS.IS_EMPTY })
  @IsNumber()
  @IsPositive({ message: validationsDtoMsg.FIELDS.STATUS.IS_NOT_POSITIVE })
  status: number;
}

export class CreateOrganizationRequestDto extends OmitType(
  OrganizationBaseDto,
  ['id_organization'] as const,
) {}

export class UpdateOrganizationRequestDto extends PartialType(
  OrganizationBaseDto,
) {}
