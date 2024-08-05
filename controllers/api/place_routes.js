const router = require('express').Router();
const { Place } = require('../../models');

router.get('/', async (req, res) => {
	try {
	  const placeData = await Place.findAll();
	  res.status(200).json(placeData);
	} catch (err) {
	  res.status(500).json(err);
	}
  });

  router.get('/:id', async (req, res) => {
	try {
		const id = req.params.id;
	  const placeData = await Place.findByPk(id);
	  res.status(200).json(placeData);
	} catch (err) {
	  res.status(500).json(err);
	}
  });

  router.post('/', async (req, res) => {
	try {
	  const placeData = await Place.create(req.body);
	  res.status(200).json(placeData);
	} catch (err) {
	  res.status(400).json(err);
	}
  });

  router.put('/:id', async (req, res) => {
	try{
		const id = req.params.id;
		
		const place = await Place.update(
			req.body,
			{
				where: {
					id: id
				},
				returning: true,
				plain: true
			}
		)

		res.status(200).json(place[1]);
	}catch(err){
		res.status(400).json(err);
	}
  });




  module.exports = router;