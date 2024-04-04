const { DataTypes } = require('sequelize');
const { sequelize } = require('./../config/db');

const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'user_name',
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name',
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name',
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'password_hash'
      },
      email: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false,
      tableName: 'um_user',
    }
  );
  
  module.exports = User;
