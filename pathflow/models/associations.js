import { User } from "./users.model.js"
import { Session } from "./session.model.js";

const initAssociations = () => {

    User.hasMany(Session, { as: "session", foreignKey: "userId" });
    Session.belongsTo(User, { as: "user" });
  
}

export default initAssociations