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
}

module.exports = new CategoryController()