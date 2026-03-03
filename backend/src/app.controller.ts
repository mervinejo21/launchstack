import { Controller, Get } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('health')
  async health() {
    const result = await this.prisma.user.findMany()
    return { status: 'ok', users: result.length }
  }
}