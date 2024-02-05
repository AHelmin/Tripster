const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

// Create a new Sequelize model for books
class Trip extends Model {} 

Trip.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
  },
    trip_budget: {
      type: DataTypes.DECIMAL
    },
    traveller_amount: {
      type: DataTypes.INTEGER
    },
    traveller_id: {
        type: DataTypes.INTEGER,
        unique: false,
        references: {
            model: 'traveller',
            key: 'id',
          },
      },
      location_id: {
        type: DataTypes.INTEGER,
        unique: false,
        references: {
            model: 'location',
            key: 'id',
          },
      },
    },
  {
    // Link to database connection
    sequelize,
    freezeTableName: true,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    modelName: 'trip'
  }
);

module.exports = Trip;