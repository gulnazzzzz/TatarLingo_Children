const {MaterialCategory} = require('../models/models')
const ApiError = require('../error/ApiError')

class materialCategoryController {
  async create(req, res) {
    const {name} = req.body
    const materialCategory = await MaterialCategory.create({name})
    return res.json(materialCategory)
  }
  async getAll(req, res) {
    const materialCategories = await MaterialCategory.findAll()
    return res.json(materialCategories)
  }
}

module.exports = new materialCategoryController()