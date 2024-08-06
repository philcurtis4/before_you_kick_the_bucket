const router = require('express').Router();
const { Favorite } = require('../../models');

router.post('/', async (req, res) => {
	const data = req.body;
	console.log(req.body);
	await Favorite.create({
		country_name: data.country,
		city_name: data.city,
		landmark_name: data.landmark,
		state_name: data.state,
		userId: req.session.user_id
	});

	res.json({
		message: 'Favorited added.'
	});
});

//   // Set Favorite Rating
//   router.put('/rate', async (req, res) => {
//     const favId = req.body.favId;
//     const ratingLevel = req.body.level;

//     await Favorite.update(
//       {
//         rating: ratingLevel
//       },
//       {
//         where: {
//           id: favId
//         }
//       }
//     );

//     res.json({
//       message: 'Rating updated.'
//     });
//   });

// Delete Favorite
router.delete('/unfav', async (req, res) => {
	const id = req.body.id;

	await Favorite.destroy({
		where: {
			id: id
		}
	});

	res.json({
		message: 'Fav removed successfully!'
	});
});

module.exports = router
