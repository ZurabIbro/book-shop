const { Router } = require('express')
const { authorsController } = require('../controllers/authors.controller')
const router = Router()

router.get('./authors', authorsController.getAuthors)
router.post('/authors', authorsController.addAuthor)






module.exports = router