import { defInmigrant } from "./immigrant.-model.js"
import { initUserModel } from "./users.model.js"
import { initSessionModel } from "./session.model.js"
import db from '../config/configConnection.js'

const initModels = () => {
    defInmigrant(db);
    initUserModel(db);
    initSessionModel(db);
}

export default initModels