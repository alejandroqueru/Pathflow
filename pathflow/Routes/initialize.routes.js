import SessionRoutes from "./session.routes.js";
import UserRoutes from "./user.routes.js";
import ImmigrantRoutes from "./immigrant.routes.js";

const initRoutes = (app) => {
  app.use("/users", UserRoutes);
  app.use("/sessions", SessionRoutes);
  app.use("/immigrants", ImmigrantRoutes);
};

export default initRoutes;
