const router = require('express').Router();
const { User} = require('../../models');

// GET all users
//localhost:3333/api/users
router.get('/', async (req, res) => {
	try {
	  const userData = await User.findAll();
	  res.status(200).json(userData);
	} catch (err) {
	  res.status(500).json(err);
	}
  });


  // CREATE a user
router.post('/', async (req, res) => {
	try {
	  const userData = await User.create(req.body);
	  res.status(200).json(userData);
	} catch (err) {
	  res.status(400).json(err);
	}
  });

  module.exports = router;