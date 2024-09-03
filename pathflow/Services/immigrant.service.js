import { Inmigrant } from "../models/immigrant.-model.js";

class ImmigrantService {
  async createImmigrant(immigrantData) {
    return User.create({
      ...immigrantData,
    });
  }
}

export default ImmigrantService;
