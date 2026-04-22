import { LeadRepository } from "../repositories/lead.repository";
import { AIService } from "./ai.service";

const repo = new LeadRepository();
const ai = new AIService();

export class LeadService {
  async createLead(data: any) {
    const existing = await repo.findByEmail(data.email);
    if (existing) throw new Error("Email ya existe");

    return repo.create(data);
  }

  async getLeads(query: any) {
    return repo.findAll(query);
  }

  async getLeadById(id: number) {
    return repo.findById(id);
  }

  async updateLead(id: number, data: any) {
    return repo.update(id, data);
  }

  async deleteLead(id: number) {
    return repo.softDelete(id);
  }

  async getStats() {
    return repo.getStats();
  }

  async getSummary(filters: any) {
    const leads = await repo.findAll(filters);
    return ai.generateSummary(leads);
  }
}