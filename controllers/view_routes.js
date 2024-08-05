const { route } = require('./api');

const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage')
})

router.get('/register', async (req, res) => {
	res.render('register');
});

router.get('/login', async (req, res) => {
	res.render('login');
});

router.get('/search', async (req, res) => {
	res.render('search');
});

router.get('/results', async (req, res) => {
	res.render('search_results');
});

router.get('/favorites', redirectGuest, async (req, res) => {
    const user = await User.findByPk(req.session.user_id, {
      include: Favorite
    });
  
    res.render('favorites', {
      user: user.get({ plain: true }),
      title: 'My Destinations - Favorites',
      user_page: true,
      favorites: true
    });
  });

module.exports = router;