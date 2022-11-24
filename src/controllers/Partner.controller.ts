import { Request, Response } from "express";
import PartnerService from "../services/Partner.service";

class PartnerController {
     static getUserFromPartner = async (req: Request, res: Response) => {
        const { getUserFromPartner } = new PartnerService()
        const user = await getUserFromPartner(req.headers.authorization!)
        return res.status(200).json(user)
    }
}

export default PartnerController