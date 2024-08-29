import PersonaRoutes from "./persona-routes.js";
import AccountRoutes from "./account-routes.js";

const defRoutes = (app) => {
  app.use("/persona", PersonaRoutes);
  app.use("/account", AccountRoutes);
};

export default defRoutes;
