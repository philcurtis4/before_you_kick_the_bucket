const Landmark = require('./Landmark')
const Place = require('./Place')
const User = require('./User');

//One to Many association
User.hasMany(Place, {
    foreignKey: 'user_id',
    through: User
})

Place.hasMany(User, {
    foreignKey: 'user_id',
    through: User
})

Place.hasMany(Landmark, {
    through: 'city_id'
})

Landmark.hasOne(Place, {
    through: 'city_id'
})



module.exports = {
    User: User,
    Place: Place,
    Landmark: Landmark
}