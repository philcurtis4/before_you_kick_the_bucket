const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Place extends Model {};

Place.init(
	{
		country_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		city_name: {
			type: DataTypes.STRING
		}
	},
	{
	sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'place'
	}
);

module.exports = Place