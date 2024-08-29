import { DataTypes, Model } from "sequelize";

const tablePersona = "Persona";

class Persona extends Model {}

const defPersona = (sequelize) => {
  Persona.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstSurname: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "first_surname",
      },
      secondSurname: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "second_surname",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Persona",
      tableName: tablePersona,
      timestamps: false,
    }
  );
};

export { tablePersona, Persona, defPersona };
