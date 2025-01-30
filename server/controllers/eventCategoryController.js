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
  async update(req, res, next) {
    try {
        const { eventCategoryID } = req.params;
        const { name } = req.body;
        const eventCategory = await EventCategory.findOne({ where: { eventCategoryID } });

        if (!eventCategory) {
            return next(ApiError.notFound('Event Category not found'));
        }

        eventCategory.name = name;
        await eventCategory.save();

        return res.json(eventCategory);
    } catch (e) {
        next(ApiError.badRequest(e.message));
    }
}

}

module.exports = new EventCategoryController()