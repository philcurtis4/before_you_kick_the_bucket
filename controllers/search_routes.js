const router = require('express').Router();


router.post('/results', async (req, res) => {
    console.log('form results')
    res.render('search_results', req.body)
})

module.exports = router