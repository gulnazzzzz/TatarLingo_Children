const uuid = require('uuid')
const path = require('path');
const {Lesson /* , DeviceInfo */} = require('../models/models')
const ApiError = require('../error/ApiError')
class LessonController {
  async create(req, res, next) {
    try {
    let {title, lessonAgeLessonAgeID, lessonCategoryLessonCategoryID} = req.body
    const {img} = req.files
    let fileName = uuid.v4() + ".jpg"
    img.mv(path.resolve(__dirname, '..', 'static', fileName))

    // if(info) {
    //   info = JSON.parse(info)
    //   info.forEach(i =>
    //   DeviceInfo.create({
    //     title: i.title,
    //     description: i.description,
    //     deviceId: device.id
    //   }))
    // }

    const lesson = await Lesson.create({title, lessonAgeLessonAgeID, lessonCategoryLessonCategoryID, img: fileName})

    return res.json(lesson)
    } catch (e){
      next(ApiError.badRequest(e.message))
    }
    
  }
  async getAll(req, res) {
    let {lessonAgeLessonAgeID, lessonCategoryLessonCategoryID} = req.query
    let lessons; 
    if (!lessonAgeLessonAgeID && !lessonCategoryLessonCategoryID) {
      lessons = await Lesson.findAll()
    }
    if (lessonAgeLessonAgeID && !lessonCategoryLessonCategoryID) {
      lessons = await Lesson.findAll({where: {lessonAgeLessonAgeID}})
    }
    if (!lessonAgeLessonAgeID && lessonCategoryLessonCategoryID) {
      lessons = await Lesson.findAll({where: {lessonCategoryLessonCategoryID}})
    }
    if (lessonAgeLessonAgeID && lessonCategoryLessonCategoryID) {
      lessons = await Lesson.findAll({where: {lessonCategoryLessonCategoryID, lessonAgeLessonAgeID}})
    }
    return res.json(lessons)
  }
  async getOne(req, res) {
    const {lessonID} = req.params
    const lesson = await Lesson.findOne(
      {where: {lessonID}},
    )
    return res.json(lesson)
  }
}

module.exports = new LessonController()