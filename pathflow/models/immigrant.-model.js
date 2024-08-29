import { DataTypes, Model } from "sequelize";

const tableInmigrant = "Inmigrant";

class Inmigrant extends Model {}

const defInmigrant = (sequelize) => {
  Inmigrant.init(
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
      first_surname: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "first_surname",
      },
      second_surname: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "second_surname",
      },
      gender: {
        type: DataTypes.ENUM("Hombre", "Mujer", "Prefiero no decirlo"),
        allowNull: false,
      },
      disability: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      disability_type: {
        type: DataTypes.ENUM(
          "auditiva",
          "cognitiva",
          "visual",
          "fisica",
          "multiple"
        ),
        allowNull: false,
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      entryDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      departureDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Inmigrant",
      tableName: tableInmigrant,
      timestamps: false,
    }
  );
};

export { tableInmigrant, Inmigrant, defInmigrant };
