const { LessonAge } = require('../models/models');
const ApiError = require('../error/ApiError');

class AgeController {
  async create(req, res) {
    const { name } = req.body;
    const lessonAge = await LessonAge.create({ name });
    return res.json(lessonAge);
  }
  
  async getAll(req, res) {
    const lessonAges = await LessonAge.findAll();
    return res.json(lessonAges);
  }
  
  async update(req, res, next) {
    try {
      const { ageID } = req.params;
      const { name } = req.body;
      const [updated] = await LessonAge.update({ name }, { where: { lessonAgeID: ageID } });

      if (updated) {
        const updatedAge = await LessonAge.findOne({ where: { lessonAgeID: ageID } });
        return res.json(updatedAge);
      } else {
        throw new Error('Age not found');
      }
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new AgeController();
