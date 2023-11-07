const { Router } = require('express')
const { genresController } = require('../controllers/genres.controller')
const router = Router()

router.get('./genres',genresController.getGenres)
router.get('./genres', genresController.addGenre)
router.delete('./genres', genresController.deleteGenre)






module.exports = router