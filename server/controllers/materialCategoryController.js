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
  async update(req, res, next) {
    try {
      const { materialCategoryID } = req.params;
      const { name } = req.body;

      const materialCategory = await MaterialCategory.findOne({ where: { materialCategoryID } });
      if (!materialCategory) {
        return next(ApiError.notFound('Material Category not found'));
      }

      materialCategory.name = name;
      await materialCategory.save();

      return res.json(materialCategory);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new materialCategoryController()