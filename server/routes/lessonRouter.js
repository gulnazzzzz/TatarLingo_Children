const Router = require('express')
const router = new Router()
const lessonController = require('../controllers/lessonController')

router.post('/', lessonController.create)
router.get('/', lessonController.getAll)
router.get('/:lessonID', lessonController.getOne)
// router.delete('/',)

module.exports = router