const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorite extends Model { }

Favorite.init(
  {
		country_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		city_name: {
			type: DataTypes.STRING
		},
    landmark_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
    // rating: {
    //   type: DataTypes.INTEGER
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorite'
  }
);

module.exports = Favorite;

