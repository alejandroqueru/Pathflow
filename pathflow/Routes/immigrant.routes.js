import { Router } from "express";
import ImmigrantService from "../Services/immigrant.service.js";

const immigrantService = new ImmigrantService();
const router = Router();

router.post("/create", async (req, res, next) => {
  try {
    const immigrantData = req.body;
    const newImmigrant = await immigrantService.createUser(immigrantData);
    res.json(newImmigrant);
  } catch (error) {
    next(error);
  }
});

export default router;
