import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProjectDto } from "./dto/create-project-dto";

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) { }

  async create(organizationId: string, userId: string, dto: CreateProjectDto) {
    return this.prisma.project.create({
      data: {
        name: dto.name,
        description: dto.description,
        organizationId,
        createdById: userId,
      },
    })
  }

  async findAll(organizationId: string) {
    return this.prisma.project.findMany({
      where: { organizationId },
    });
  }

}