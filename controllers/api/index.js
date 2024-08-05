const router = require('express').Router();
const placeRoutes = require('./place_routes');
const landmarkRoutes = require('./landmark_routes');

router.use('/places', placeRoutes);
router.use('/landmarks', landmarkRoutes);

module.exports = router;