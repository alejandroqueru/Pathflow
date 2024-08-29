import express from "express";
import cors from "cors";
import initModels from "./models/init.model.js";
import initAssociations from "./models/associations.js";
import initStrategies from "./Auth/init.strategies.js";
import initRoutes from "./Routes/initialize.routes.js";
import db from "./config/configConnection.js";

const app = express();

app.use(cors());
app.use(express.json());

const initDataBase = async () => {
  try {
    //Authenticate db
    await db.authenticate();
    console.log("Could not connect to the DB.");

    //initialize strategies
    initStrategies();

    //initialize models of sequelizie that are created
    initModels();

    //initialize associations between the models
    initAssociations();

    //sync models of sequelize that are created
    await db.sync({ alter: true });
    console.log("running.");
  } catch (error) {
    console.error("not running", error);
  }
};

const port = 3000;

initRoutes(app);
console.log(process.env.REACT_APP_SUPABASE_URL);
console.log("Routes initialized");
initDataBase();

app.listen(port, () => console.log(`connected on port ${port}`));
