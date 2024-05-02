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
  //   let {brandId, typeId, limit, page} = req.query
  //   page = page || 1
  //   limit = limit || 9
  //   let offset = page * limit - limit
  //   let devices; 
  //   if (!brandId && !typeId) {
  //     devices = await Device.findAndCountAll({limit, offset})
  //   }
  //   if (brandId && !typeId) {
  //     devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
  //   }
  //   if (!brandId && typeId) {
  //     devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
  //   }
  //   if (brandId && typeId) {
  //     devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
  //   }
  //   return res.json(devices)
  }
  async getOne(req, res) {
  //   const {id} = req.params
  //   const device = await Device.findOne(
  //     {where: {id}, 
  //     include: [{model: DeviceInfo, as: 'info'}]},
  //   )
  //   return res.json(device)
  }
}

module.exports = new LessonController()