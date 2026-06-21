// models/Purchase.js
import { DataTypes } from "sequelize";
import { sequelize } from "../connect.js";


const Purchase = sequelize.define("Purchase", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  purchase_date: DataTypes.DATE,
  total_price: DataTypes.FLOAT,

  customer_id: DataTypes.INTEGER,
  car_id: DataTypes.INTEGER,
  employee_id: DataTypes.INTEGER,
});
export default Purchase;