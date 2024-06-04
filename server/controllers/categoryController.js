const {LessonCategory} = require('../models/models')
const ApiError = require('../error/ApiError')

class CategoryController {
  async create(req, res) {
    const {name} = req.body
    const lessonCategory = await LessonCategory.create({name})
    return res.json(lessonCategory)
  }
  async getAll(req, res) {
    const lessonCategories = await LessonCategory.findAll()
    return res.json(lessonCategories)
  }
  async update(req, res, next) {
    try {
      const { categoryID } = req.params;
      const { name } = req.body;

      const lessonCategory = await LessonCategory.findOne({ where: { lessonCategoryID: categoryID } });
      if (!lessonCategory) {
        return next(ApiError.notFound('Lesson Category not found'));
      }

      lessonCategory.name = name;
      await lessonCategory.save();

      return res.json(lessonCategory);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new CategoryController()