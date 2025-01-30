// const Router = require('express')
// const router = new Router()
// const lessonController = require('../controllers/lessonController')
// const checkRole = require('../middleware/checkRoleMiddleware')

// router.post('/', checkRole('ADMIN'), lessonController.create)
// router.get('/', lessonController.getAll)
// router.get('/:lessonID', lessonController.getOne)
// // router.delete('/',)

// module.exports = router



// const Router = require('express');
// const router = new Router();
// const lessonController = require('../controllers/lessonController');
// const checkRole = require('../middleware/checkRoleMiddleware');

// // router.post('/', checkRole('ADMIN'), lessonController.create);
// router.post('/', async (req, res) => {
//   try {
//     const { title, lessonAgeLessonAgeID, lessonCategoryLessonCategoryID, theoryBlocks, taskBlocks } = req.body;

//     // Проверяем, являются ли theoryBlocks и taskBlocks строками, и парсим их, если это необходимо
//     if (typeof theoryBlocks === 'string') {
//       req.body.theoryBlocks = JSON.parse(theoryBlocks);
//     }
//     if (typeof taskBlocks === 'string') {
//       req.body.taskBlocks = JSON.parse(taskBlocks);
//     }

//     // Вызываем метод create контроллера для создания урока
//     const createdLesson = await lessonController.create(req, res);

//     // Отправляем ответ клиенту
//     res.status(201).json(createdLesson);
//   } catch (error) {
//     // Обрабатываем ошибку, если что-то пошло не так
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Failed to create lesson' });
//   }
// });
// router.get('/', lessonController.getAll);
// router.get('/:lessonID', lessonController.getOne);

// module.exports = router;


const Router = require('express');
const router = new Router();
const lessonController = require('../controllers/lessonController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), lessonController.create);
router.get('/', lessonController.getAll);
router.get('/:lessonID', lessonController.getOne);
router.delete('/:lessonID', checkRole('ADMIN'), lessonController.delete);

module.exports = router;