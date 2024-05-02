const {LessonAge} = require('../models/models')
const ApiError = require('../error/ApiError')

class AgeController {
  async create(req, res) {
    const {name} = req.body
    const lessonAge = await LessonAge.create({name})
    return res.json(lessonAge)
  }
  async getAll(req, res) {
    const lessonAges = await LessonAge.findAll()
    return res.json(lessonAges)
  }
}

module.exports = new AgeController()