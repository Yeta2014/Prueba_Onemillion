import { Router } from "express";
import { LeadController } from "../controllers/lead.controller";

const router = Router();
const controller = new LeadController();

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/stats", controller.getStats);
router.get("/:id", controller.getById);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);
router.post("/ai/summary", controller.getSummary);

export default router;  