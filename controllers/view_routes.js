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

module.exports = router;