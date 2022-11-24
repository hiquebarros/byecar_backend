import { Router } from "express";
import PartnerController from "../controllers/Partner.controller";

const PartnerRouter = Router();

PartnerRouter.get("", PartnerController.getUserFromPartner);

export default PartnerRouter;