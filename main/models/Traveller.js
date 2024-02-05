const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

// Create a new Sequelize model for books
class Traveller extends Model {} 

Traveller.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    },
  {
    // Link to database connection
    sequelize,
    freezeTableName: true,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    modelName: 'traveller'
  }
);

module.exports = Traveller;