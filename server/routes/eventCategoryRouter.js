const Router = require('express')
const router = new Router()
const eventController = require('../controllers/eventCategoryController')

router.post('/', eventController.create)
router.get('/', eventController.getAll)
// router.delete('/',)

module.exports = router