const Router = require('express');
const router = new Router();
const eventController = require('../controllers/eventController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), eventController.create);
router.get('/', eventController.getAll);
router.get('/:eventID', eventController.getOne);
router.put('/:eventID', checkRole('ADMIN'), eventController.update);
router.delete('/:eventID', checkRole('ADMIN'), eventController.delete);
// router.delete('/',)

module.exports = router;
