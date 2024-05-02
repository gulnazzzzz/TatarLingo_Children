const {EventCategory} = require('../models/models')
const ApiError = require('../error/ApiError')

class EventCategoryController {
  async create(req, res) {
    const {name} = req.body
    const eventCategory = await EventCategory.create({name})
    return res.json(eventCategory)
  }
  async getAll(req, res) {
    const eventCategories = await EventCategory.findAll()
    return res.json(eventCategories)
  }
}

module.exports = new EventCategoryController()