const Router = require('express')
const router = new Router()
const materialCategoryController = require('../controllers/materialCategoryController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), materialCategoryController.create)
router.get('/', materialCategoryController.getAll)
router.put('/:materialCategoryID', checkRole('ADMIN'), materialCategoryController.update);
// router.delete('/',)

module.exports = router