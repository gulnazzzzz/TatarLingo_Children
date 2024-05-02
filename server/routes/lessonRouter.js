const Router = require('express')
const router = new Router()
const lessonController = require('../controllers/lessonController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), lessonController.create)
router.get('/', lessonController.getAll)
router.get('/:lessonID', lessonController.getOne)
// router.delete('/',)

module.exports = router