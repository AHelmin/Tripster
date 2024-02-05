const Location = require('./Location');
const Trip = require('./Trip');
const Traveller = require('./Traveller');

Traveller.belongsToMany(Location, {
  through: {model: Trip, unique: false},
  alias: 'trips'
});

Location.belongsToMany(Traveller, {
  through: {model: Trip, unique: false},
  alias: "trips"
});

// Trip.hasMany(Traveller, {
//   foreignKey: 'traveller_id'
// });

// Trip.hasOne(Location, {
//   foreignKey: 'location_id'
// });

// Traveller.belongsTo(Trip, {
//   foreignKey: 'traveller_id',
// });

// Location.belongsTo(Trip, {
//   foreignKey: 'location_id',
// });

module.exports = { Location, Trip, Traveller };
