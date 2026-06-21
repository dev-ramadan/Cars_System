// models/Payment.js
import { DataTypes } from "sequelize";
import { sequelize } from "../connect.js";


const Payment = sequelize.define("Payment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  method: DataTypes.STRING(20),
  amount: DataTypes.FLOAT,
  payment_date: DataTypes.DATE,

  customer_id: DataTypes.INTEGER,
  sale_id: DataTypes.INTEGER,
  purchase_id: DataTypes.INTEGER,
});
export default Payment;