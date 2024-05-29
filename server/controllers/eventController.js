const uuid = require('uuid');
const path = require('path');
const { Event } = require('../models/models');
const ApiError = require('../error/ApiError');

class EventController {
  async create(req, res, next) {
    try {
      let { title, description, dateAndTime, location, link, eventCategoryEventCategoryID } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const event = await Event.create({ title, description, dateAndTime, location, link, eventCategoryEventCategoryID, img: fileName });

      return res.json(event);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { eventCategoryEventCategoryID } = req.query;
    let events;
    if (!eventCategoryEventCategoryID) {
      events = await Event.findAll();
    }
    if (eventCategoryEventCategoryID) {
      events = await Event.findAll({ where: { eventCategoryEventCategoryID } });
    }
    return res.json(events);
  }

  async getOne(req, res) {
    const { eventID } = req.params;
    const event = await Event.findOne({ where: { eventID } });
    return res.json(event);
  }

  async update(req, res, next) {
    try {
      const { eventID } = req.params;
      let { title, description, dateAndTime, location, link, eventCategoryEventCategoryID } = req.body;
      let updatedData = { title, description, dateAndTime, location, link, eventCategoryEventCategoryID };

      if (req.files && req.files.img) {
        const { img } = req.files;
        let fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, '..', 'static', fileName));
        updatedData.img = fileName;
      }

      const [updated] = await Event.update(updatedData, { where: { eventID } });

      if (updated) {
        const updatedEvent = await Event.findOne({ where: { eventID } });
        return res.json(updatedEvent);
      } else {
        throw new Error('Event not found');
      }
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async delete(req, res, next) {
  try {
    const { eventID } = req.params;

    // Найдите материал по его ID
    const event = await Event.findOne({ where: { eventID } });
    if (!event) {
      return next(ApiError.notFound('Event not found'));
    }

    // Удалите материал из базы данных
    await event.destroy();

    return res.json({ message: 'Event deleted successfully' });
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }
}
}

module.exports = new EventController();
