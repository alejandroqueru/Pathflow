import { Router } from "express";
import PersonaServices from "../services/persona-services.js";

const personaServices = new PersonaServices();

const router = Router();

router.post("/create", async (req, res, next) => {
  try {
    const userData = req.body;
    const persona = await personaServices.createPersona(userData);
    res.json(persona);
  } catch (error) {
    next(error);
  }
});

export default router;
