const Router = require('express')
const router = new Router()
const eventController = require('../controllers/eventCategoryController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), eventController.create)
router.get('/', eventController.getAll)
router.put('/:eventCategoryID', checkRole('ADMIN'), eventController.update);
// router.delete('/',)

module.exports = router