import { Persona } from "../models/persona-model.js";
import bcrypt from "bcrypt";

class PersonaServices {
  async findByEmail(email) {
    return Persona.findOne({ where: { email } });
  }
  async checkEmailRegistered(email) {
    const existingUser = await this.findByEmail(email);
    if (existingUser) {
      throw new Error("The email is already registered");
    }
  }

  async createPersona(personaData) {
    console.log("Received personaData:", personaData);
    if (!personaData.email) {
      throw new Error("Email is required");
    }

    await this.checkEmailRegistered(personaData.email);
    const hashedPassword = await bcrypt.hash(personaData.password, 10);
    return Persona.create({
      ...personaData,
      password: hashedPassword,
    });
  }
}

export default PersonaServices;
