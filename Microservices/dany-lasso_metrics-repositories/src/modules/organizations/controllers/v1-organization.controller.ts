import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  HttpCode,
} from '@nestjs/common';
import { FindOrganizationsService } from '../services/find-organizations.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

//DTOs
import {
  CreateOrganizationRequestDto,
  UpdateOrganizationRequestDto,
} from '../dtos/organization.dto';
import { Organization } from '../entities/organization.entity';
//Services
import { UpdateOrganizationService } from '../services/update-organization.service';
import { SaveOrganizationService } from '../services/save-organization.service';
import { DeleteOrganizationsService } from '../services/delete-organizations.service';

@ApiTags('Organizations')
@Controller('/api/v1/organizations')
export class V1OrganizationController {
  constructor(
    private findOrganizationService: FindOrganizationsService,
    private saveOrganizationService: SaveOrganizationService,
    private updateOrganizationService: UpdateOrganizationService,
    private deleteOrganizationService: DeleteOrganizationsService,
  ) {}

  @ApiOperation({ summary: 'Get all organizations' })
  @Get()
  findAll(): Promise<Organization[]> {
    return this.findOrganizationService.findAll();
  }

  @ApiOperation({ summary: 'Save organization' })
  @Post()
  save(@Body() body: CreateOrganizationRequestDto): Promise<Organization> {
    return this.saveOrganizationService.save(body);
  }

  @Put(':id_organization')
  update(
    @Param('id_organization', ParseIntPipe) id_organization: number,
    @Body() body: UpdateOrganizationRequestDto,
  ): Promise<Organization> {
    return this.updateOrganizationService.update(id_organization, body);
  }

  @Delete(':id_organization')
  @HttpCode(204)
  removeById(@Param('id_organization', ParseIntPipe) id_organization: number) {
    this.deleteOrganizationService.removeById(id_organization);
  }
}
