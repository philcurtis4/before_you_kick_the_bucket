const router = require('express').Router();


router.post('/search', async (req, res) => {
    console.log(req.body)
    res.render('search_results', req.body)
})

module.exports = router