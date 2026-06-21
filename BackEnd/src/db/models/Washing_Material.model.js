import { DataTypes } from "sequelize";
import { sequelize } from "../connect.js";

const Washing_Material = sequelize.define(
  "Washing_Material",
  {
    washing_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    material_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    tableName: "Washing_Material",
    timestamps: false,
  }
);

export default Washing_Material;