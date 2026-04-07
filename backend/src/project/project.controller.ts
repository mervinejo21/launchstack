import { Controller, Post, Get, Param, Body, UseGuards, Req } from '@nestjs/common'
import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard'
import { OrganizationGuard } from '@/auth/guards/organization.guard'
import { ProjectService } from './project.service'
import { CreateProjectDto } from './dto/create-project-dto'
import { RolesGuard } from '@/auth/guards/roles.guard'
import { Roles } from '@/auth/decorators/roles.decorator'

@Controller('organizations/:organizationId/projects')
@UseGuards(JwtAuthGuard, OrganizationGuard)
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Post()
@UseGuards(JwtAuthGuard, OrganizationGuard, RolesGuard)
@Roles('OWNER', 'ADMIN')
create(
  @Param('organizationId') organizationId: string,
  @Body() dto: CreateProjectDto,
  @Req() req: any,
) {
  return this.projectService.create(
    organizationId,
    req.user.userId,
    dto,
  )
}

  @Get()
  findAll(@Param('organizationId') organizationId: string) {
    return this.projectService.findAll(organizationId)
  }
}