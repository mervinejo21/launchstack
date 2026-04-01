import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common'
import { OrganizationService } from './organization.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CreateOrganizationDto } from './dto/create-organization.dto'
import { OrganizationGuard } from 'src/auth/guards/organization.guard'

@Controller('organizations')
export class OrganizationController {
  constructor(private organizationService: OrganizationService) {}

  @Post()
  @UseGuards(JwtAuthGuard, OrganizationGuard)
  create(@Body() dto: CreateOrganizationDto, @Req() req: any) {
    return this.organizationService.create(dto.name, req.user.userId)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  getMyOrganizations(@Req() req: any) {
  return this.organizationService.findUserOrganizations(
    req.user.userId,
  )
}
}