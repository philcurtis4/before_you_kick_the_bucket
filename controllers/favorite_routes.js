const router = require('express').Router();
const { Favorite, User } = require('../models');

function redirectGuest(req, res, next) {
	if (!req.session.user_id) {
	  return res.redirect('/list');
	}
  
	next();
  }

router.get('/favorites', redirectGuest, async (req, res) => {
    const user = await User.findByPk(req.session.user_id, {
      attributes: ['username'],
      include: Favorite
    });
  
    res.render('favorites', {
      user: user.get({ plain: true }),
      title: 'My Bucket List - Favorites',
      user_page: true,
      favorites: true
    });
  });

  router.post('/favorite', async (req, res) => {
    
  
    await Favorite.create({
      country_name: data.country_naame,
      city_name: data.city_name,
      landmark_name: data.landmark_name,
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
  