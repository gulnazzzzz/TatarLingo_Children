const Router = require('express')
const router = new Router()
const ageController = require('../controllers/ageController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), ageController.create)
router.get('/', ageController.getAll)
// router.delete('/',)

module.exports = router