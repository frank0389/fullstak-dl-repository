const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
     process.env.DB_USER,
     process.env.DB_PASSWORD,
     {
      host: process.env.DB_HOST,
      dialect: "mysql",
     }
    );

    const connectToDb = async () => {
        try {
          await sequelize.authenticate();
          console.log('Successfully connected to database');
        } catch (error) {
          console.log(error);
        }
      };

      module.exports = { sequelize, connectToDb };
