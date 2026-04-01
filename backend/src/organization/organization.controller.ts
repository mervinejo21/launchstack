import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common'
import { OrganizationService } from './organization.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CreateOrganizationDto } from './dto/create-organization.dto'

@Controller('organizations')
export class OrganizationController {
  constructor(private organizationService: OrganizationService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateOrganizationDto, @Req() req: any) {
    return this.organizationService.create(dto.name, req.user.userId)
  }
}