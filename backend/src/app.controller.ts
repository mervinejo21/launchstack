import { Controller, Get, UseGuards, Req } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard'

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) { }

  @Get('health')
  async health() {
    const result = await this.prisma.user.findMany()
    return { status: 'ok', users: result.length }
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@Req() req: any) {
    return req.user
  }
}