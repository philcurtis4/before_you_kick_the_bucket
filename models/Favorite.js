const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorite extends Model { }

Favorite.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    release_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imdbID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize: client,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorite'
  }
);

module.exports = Favorite;

