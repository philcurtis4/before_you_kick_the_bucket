const router = require('express').Router();

const { User } = require('../models');

function redirectGuest(req, res, next) {
	if (!req.session.user_id) {
	  return res.redirect('/login');
	}
  
	next();
  }

router.get('/', async (req, res) => {
    res.render('homepage')
})

router.get('/register', async (req, res) => {
	res.render('register');
});

router.get('/login', async (req, res) => {
	res.render('login');
});

router.get('/search', redirectGuest, async (req, res) => {
	
	const user = await User.findByPk(req.session.user_id);
	
	res.render('search', {
		user: user.get({
			plain: true
		})
	});
});

// router.get('/results', async (req, res) => {
// 	res.render('search_results');
// });

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