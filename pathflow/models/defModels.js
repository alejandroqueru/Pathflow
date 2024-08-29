import { defPersona } from "./persona-model.js";
import db from "../config/configConnection.js";

const defModels = () => {
  defPersona(db);
};

export default defModels;
