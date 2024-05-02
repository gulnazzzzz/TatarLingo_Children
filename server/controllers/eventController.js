const uuid = require('uuid')
const path = require('path');
const {Event} = require('../models/models')
const ApiError = require('../error/ApiError')
class EventController {
  async create(req, res, next) {
    try {
      let {title, description, dateAndTime, location, link, eventCategoryEventCategoryID} = req.body
      const {img} = req.files
      let fileName = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))

    const event = await Event.create({title, description, dateAndTime, location, link, eventCategoryEventCategoryID, img: fileName})

    return res.json(event)
    } catch (e){
      next(ApiError.badRequest(e.message))
    }
    
  }
  async getAll(req, res) {
    let {eventCategoryEventCategoryID} = req.query
    let events; 
    if (!eventCategoryEventCategoryID) {
      events = await Event.findAll()
    }
    if (eventCategoryEventCategoryID) {
      events = await Event.findAll({where: {eventCategoryEventCategoryID}})
    }
    return res.json(events)
  }
  async getOne(req, res) {
    const {eventID} = req.params
    const event = await Event.findOne(
      {where: {eventID}},
    )
    return res.json(event)
  }
}

module.exports = new EventController()