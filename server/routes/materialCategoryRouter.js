const Router = require('express')
const router = new Router()
const materialCategoryController = require('../controllers/materialCategoryController')

router.post('/', materialCategoryController.create)
router.get('/', materialCategoryController.getAll)
// router.delete('/',)

module.exports = router