const Router = require('express');
const router = new Router();
const lessonRouter = require('./lessonRouter');
const userRouter = require('./userRouter');
const ageRouter = require('./ageRouter');
const categoryRouter = require('./categoryRouter');
const materialCategoryRouter = require('./materialCategoryRouter');
const eventCategoryRouter = require('./eventCategoryRouter');
const materialRouter = require('./materialRouter');
const eventRouter = require('./eventRouter');

router.use('/user', userRouter);
router.use('/age', ageRouter);
router.use('/category', categoryRouter);
router.use('/lesson', lessonRouter);
router.use('/materialCategory', materialCategoryRouter);
router.use('/eventCategory', eventCategoryRouter);
router.use('/material', materialRouter);
router.use('/event', eventRouter);

module.exports = router;
