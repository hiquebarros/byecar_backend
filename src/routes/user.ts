import { Router } from "express";
import PartnerController from "../controllers/Partner.controller";

const PartnerRouter = Router();

PartnerRouter.get("", (req, res) => res.status(200).json({message: "oi"}));


export default PartnerRouter;