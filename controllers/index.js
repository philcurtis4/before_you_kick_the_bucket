const router = require('express').Router();
const apiRoutes = require('./api');
const viewRoutes = require('./view_routes');
const searchRoutes = require('./search_routes');
const favoriteRoutes = require('./favorite_routes');
const userRoutes = require('./user_routes');

router.use('/', [viewRoutes, searchRoutes, favoriteRoutes, userRoutes]);

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;