import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { PrismaService } from 'src/prisma/prisma.service'
import { ROLES_KEY } from '../decorators/roles.decorator'
import { Role } from '@prisma/client'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    )

    if (!requiredRoles) {
      return true
    }

    const request = context.switchToHttp().getRequest()
    const user = request.user
    const organizationId = request.params.organizationId

    const membership = await this.prisma.membership.findUnique({
      where: {
        userId_organizationId: {
          userId: user.userId,
          organizationId,
        },
      },
    })

    if (!membership) {
      throw new ForbiddenException('Access denied')
    }

    if (!requiredRoles.includes(membership.role)) {
      throw new ForbiddenException('Insufficient role')
    }

    return true
  }
}