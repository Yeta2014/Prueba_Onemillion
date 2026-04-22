import { Request, Response } from "express";
import { LeadService } from "../services/lead.service";

const service = new LeadService();

export class LeadController {
  async create(req: Request, res: Response) {
    const result = await service.createLead(req.body);
    res.status(201).json(result);
  }

  async getAll(req: Request, res: Response) {
    const result = await service.getLeads(req.query);
    res.json(result);
  }

  async getById(req: Request, res: Response) {
    const result = await service.getLeadById(Number(req.params.id));
    res.json(result);
  }

  async update(req: Request, res: Response) {
    const result = await service.updateLead(Number(req.params.id), req.body);
    res.json(result);
  }

  async delete(req: Request, res: Response) {
    await service.deleteLead(Number(req.params.id));
    res.json({ message: "Lead eliminado" });
  }

  async getStats(req: Request, res: Response) {
    const result = await service.getStats();
    res.json(result);
  }

  async getSummary(req: Request, res: Response) {
    const result = await service.getSummary(req.body);
    res.json(result);
  }
}