const router = require('express').Router();
const userRoutes = require('./user_routes');
const placeRoutes = require('./place_routes');
const landmarkRoutes = require('./landmark_routes');

router.use('/users', userRoutes);
router.use('/places', placeRoutes);
router.use('/landmarks', landmarkRoutes);

module.exports = router;