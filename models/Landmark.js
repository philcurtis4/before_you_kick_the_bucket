const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Landmark extends Model {}

Landmark.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      city_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      landmark_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
        travel_time: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'landmark'
    }
  );

module.exports = Landmark;