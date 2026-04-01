import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module'
import { AppController } from './app.controller'
import { AuthModule } from './auth/auth.module'
import { OrganizationModule } from './organization/organization.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    OrganizationModule
  ],
  controllers: [AppController],
})
export class AppModule {}