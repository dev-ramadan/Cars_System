import { DataTypes } from "sequelize";
import { sequelize } from "../connect.js";

const WashingMaterial = sequelize.define("WashingMaterial", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING(50),
  price: DataTypes.FLOAT,
});


export default WashingMaterial;