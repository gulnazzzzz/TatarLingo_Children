// const Router = require('express');
// const router = new Router();
// const userController = require('../controllers/userController');
// const authMiddleware = require('../middleware/authMiddleware');
// const checkRole = require('../middleware/checkRoleMiddleware');

// router.post('/registration', userController.registration);
// router.post('/login', userController.login);
// router.get('/auth', authMiddleware, userController.check);
// router.put('/:userID', checkRole('USER'), userController.updateProfile);

// module.exports = router;


const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware'); // Добавлено middleware для авторизации

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check); // Добавлена middleware для авторизации
router.put('/:userID', userController.updateProfile); // Убран middleware для проверки роли

module.exports = router;