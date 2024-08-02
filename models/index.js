const Place = require('./Place')
const User = require('./User');
const Landmark = require('./Landmark')

//One to Many association
User.belongsToMany(Place, {
    foreignKey: 'user_id',
    through: User
})

Place.belongsToMany(User, {
    foreignKey: 'user_id',
    through: User
})

Place.belongsToMany(Landmark, {
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