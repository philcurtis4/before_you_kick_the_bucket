const router = require('express').Router();
const { Landmark } = require('../../models');

router.get('/', async (req, res) => {
	try {
	  const landmarkData = await Landmark.findAll();
	  res.status(200).json(landmarkData);
	} catch (err) {
	  res.status(500).json(err);
	}
  });

  router.get('/:id', async (req, res) => {
	try {
		const id = req.params.id;
	  const landmarkData = await Landmark.findByPk(id);
	  res.status(200).json(landmarkData);
	} catch (err) {
	  res.status(500).json(err);
	}
  });

  router.post('/', async (req, res) => {
	try {
	  const landmarkData = await Landmark.create(req.body);
	  res.status(200).json(landmarkData);
	} catch (err) {
	  res.status(400).json(err);
	}
  });

  router.put('/:id', async (req, res) => {
	try{
		const id = req.params.id;
		
		const landmark = await Landmark.update(
			req.body,
			{
				where: {
					id: id
				},
				returning: true,
				plain: true
			}
		)

		res.status(200).json(landmark[1]);
	}catch(err){
		res.status(400).json(err);
	}
  });




  module.exports = router;