const { route } = require('./api');

const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage')
})

router.get('/user', async (req, res) => {
	res.render('user');
})

module.exports = router;