import { prisma } from "../config/prisma";

export class LeadRepository {

  async create(data: any) {
    return await prisma.lead.create({ data });
  }

  async findByEmail(email: string) {
    return await prisma.lead.findUnique({
      where: { email }
    });
  }

  async findAll(query: any) {
    const { page = 1, limit = 10, fuente, from, to } = query;

    return await prisma.lead.findMany({
      where: {
        deleted: false,
        ...(fuente && { fuente }),
        ...(from && to && {
          created_at: {
            gte: new Date(from),
            lte: new Date(to)
          }
        })
      },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      orderBy: { created_at: "desc" }
    });
  }

  async findById(id: number) {
    return await prisma.lead.findUnique({
      where: { id }
    });
  }

  async update(id: number, data: any) {
    return await prisma.lead.update({
      where: { id },
      data
    });
  }

  async softDelete(id: number) {
    return await prisma.lead.update({
      where: { id },
      data: { deleted: true }
    });
  }

  async getStats() {
    const [total, porFuente, promedio, ultimos7] = await Promise.all([
      prisma.lead.count({
        where: { deleted: false }
      }),

      prisma.lead.groupBy({
        by: ["fuente"],
        _count: true
      }),

      prisma.lead.aggregate({
        _avg: { presupuesto: true }
      }),

      prisma.lead.count({
        where: {
          created_at: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
          }
        }
      })
    ]);

    return {
      total,
      porFuente,
      promedio: promedio._avg.presupuesto,
      ultimos_7_dias: ultimos7
    };
  }
}