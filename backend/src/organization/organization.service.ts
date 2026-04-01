import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class OrganizationService {
  constructor(private prisma: PrismaService) {}

  async create(name: string, userId: string) {
    return this.prisma.organization.create({
      data: {
        name,
        memberships: {
          create: {
            userId,
            role: 'OWNER',
          },
        },
      },
      include: {
        memberships: true,
      },
    })
  }
}