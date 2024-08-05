const Place = require('./Place')
const User = require('./User');
const Landmark = require('./Landmark');
const Favorite = require('./Favorite');

//One to Many association

User.hasMany(Favorite)

Favorite.belongsTo(User)

// Place.belongsToMany(User, {
//     foreignKey: 'user_id',
//     through: User
// })

// Place.belongsToMany(Landmark, {
//     through: 'city_id'
// })

// Landmark.hasOne(Place, {
//     through: 'city_id'
// })



module.exports = {
    User: User,
    Favorite: Favorite
    // Place: Place,
    // Landmark: Landmark
}