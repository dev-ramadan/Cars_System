import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const dbUrl = process.env.DB_URL || "postgres://localhost:5432/dummy";

export const sequelize = new Sequelize(dbUrl, {
  dialect: "postgres",
  dialectModule: pg,
  protocol: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// ✅ اتصال بالداتا بيز
export const connectionDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected ✅");
  } catch (error) {
    console.log("DB connection error ❌", error.message);
  }
};

// ✅ إنشاء الجداول
export const syncModels = async () => {
  try {
    await sequelize.sync();
    console.log("Models synced ✅");
  } catch (error) {
    console.log("Sync error ❌", error.message);
  }
};










// import { Sequelize } from 'sequelize';
// export const sequelize = new Sequelize("cars_system" , "root" ,"" ,{
//     host:"127.0.0.1" , 
//     dialect: "mysql",
// })


// export const connectionDB = async ()=>{
//    try {
//     await sequelize.authenticate()
//     console.log("db connection successfully");
    
//    } catch (error) {
//     console.log("fail to connected " , error.message);
//    }
// }

// export const syncModels = async()=>{
//    await sequelize.sync()
// }