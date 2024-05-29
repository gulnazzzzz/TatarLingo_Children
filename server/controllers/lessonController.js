// const uuid = require('uuid')
// const path = require('path');
// const {Lesson /* , DeviceInfo */} = require('../models/models')
// const ApiError = require('../error/ApiError')
// class LessonController {
//   async create(req, res, next) {
//     try {
//     let {title, lessonAgeLessonAgeID, lessonCategoryLessonCategoryID} = req.body
//     const {img} = req.files
//     let fileName = uuid.v4() + ".jpg"
//     img.mv(path.resolve(__dirname, '..', 'static', fileName))


//     const lesson = await Lesson.create({title, lessonAgeLessonAgeID, lessonCategoryLessonCategoryID, img: fileName})

//     return res.json(lesson)
//     } catch (e){
//       next(ApiError.badRequest(e.message))
//     }
    
//   }
//   async getAll(req, res) {
//     let {lessonAgeLessonAgeID, lessonCategoryLessonCategoryID} = req.query
//     let lessons; 
//     if (!lessonAgeLessonAgeID && !lessonCategoryLessonCategoryID) {
//       lessons = await Lesson.findAll()
//     }
//     if (lessonAgeLessonAgeID && !lessonCategoryLessonCategoryID) {
//       lessons = await Lesson.findAll({where: {lessonAgeLessonAgeID}})
//     }
//     if (!lessonAgeLessonAgeID && lessonCategoryLessonCategoryID) {
//       lessons = await Lesson.findAll({where: {lessonCategoryLessonCategoryID}})
//     }
//     if (lessonAgeLessonAgeID && lessonCategoryLessonCategoryID) {
//       lessons = await Lesson.findAll({where: {lessonCategoryLessonCategoryID, lessonAgeLessonAgeID}})
//     }
//     return res.json(lessons)
//   }
//   async getOne(req, res) {
//     const {lessonID} = req.params
//     const lesson = await Lesson.findOne(
//       {where: {lessonID}},
//     )
//     return res.json(lesson)
//   }
// }

// module.exports = new LessonController()



const uuid = require('uuid')
const path = require('path');
const { Lesson, TheoryBlock, TaskBlock } = require('../models/models');
const ApiError = require('../error/ApiError')
class LessonController {

    async create(req, res, next) {
    try {
        console.log(req.body);
        console.log(req.files);
        let { title, lessonAgeLessonAgeID, lessonCategoryLessonCategoryID } = req.body;

        let { theoryBlocks, taskBlocks } = req.body;
        theoryBlocks = [];
        taskBlocks = [];

if (typeof theoryBlocks === 'string') {
    try {
        theoryBlocks = JSON.parse(theoryBlocks);
    } catch (error) {
        return res.status(400).json({ error: 'Ошибка парсинга theoryBlocks' });
    }
}

if (typeof taskBlocks === 'string') {
    try {
        taskBlocks = JSON.parse(taskBlocks);
    } catch (error) {
        return res.status(400).json({ error: 'Ошибка парсинга taskBlocks' });
    }
}

console.log(Array.isArray(theoryBlocks)); // Должно быть true
console.log(Array.isArray(taskBlocks)); // Должно быть true

        const { img } = req.files;
        let fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, '..', 'static', fileName), (err) => {
    if (err) {
        return res.status(500).json({ error: 'Ошибка при сохранении файла' });
    }
});

        const lesson = await Lesson.create({
            title,
            lessonAgeLessonAgeID,
            lessonCategoryLessonCategoryID,
            img: fileName
        });

        for (const block of theoryBlocks) {
            let blockFileName;
    if (block.img) {
        blockFileName = uuid.v4() + ".jpg";
        block.img.mv(path.resolve(__dirname, '..', 'static', blockFileName), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Ошибка при сохранении файла блока' });
            }
        });
    }
            const theoryBlock = await TheoryBlock.create({
                lessonID: lesson.lessonID,
                audio: block.audio,
                tatarText: block.tatarText,
                translatedText: block.translatedText,
                img: blockFileName
            });
            console.log('theoryBlocks:', theoryBlocks);
        }

        for (const block of taskBlocks) {
            let correctFileName;
            if (block.correctImg) {
                correctFileName = uuid.v4() + ".jpg";
                block.correctImg.mv(path.resolve(__dirname, '..', 'static', correctFileName)), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Ошибка при сохранении файла блока' });
            }
        };
    }

            let wrongFileName;
            if (block.wrongImg) {
                wrongFileName = uuid.v4() + ".jpg";
                block.wrongImg.mv(path.resolve(__dirname, '..', 'static', wrongFileName), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Ошибка при сохранении файла блока' });
            }
        });
    }

            const taskBlock = await TaskBlock.create({
                lessonID: lesson.lessonID,
                audio: block.audio,
                tatarText: block.tatarText,
                translatedText: block.translatedText,
                correctImg: correctFileName,
                wrongImg: wrongFileName
            });
            console.log('taskBlocks:', taskBlocks);

            
        }
        console.log(theoryBlocks)
        console.log(taskBlocks)
        
        return res.json(lesson);
        return res.json(theoryBlocks);
        return res.json(taskBlocks);
    } catch (e) {
        next(ApiError.badRequest(e.message));
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
    const { lessonID } = req.params;
    const lesson = await Lesson.findOne({
        where: { lessonID },
        include: [
        { model: TheoryBlock },
        { model: TaskBlock }
        ]
    });

    if (!lesson) {
        return next(ApiError.notFound('Lesson not found'));
    }

    return res.json(lesson);
    }

    async delete(req, res, next) {
    try {
    const { lessonID } = req.params;

    // Найдите материал по его ID
    const lesson = await Lesson.findOne({ where: { lessonID } });
    if (!lesson) {
        return next(ApiError.notFound('Lesson not found'));
    }

    // Удалите материал из базы данных
    await lesson.destroy();

    return res.json({ message: 'Lesson deleted successfully' });
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }
}
}

module.exports = new LessonController()



// const { Lesson, TheoryBlock, TaskBlock } = require('../models/models');
// const ApiError = require('../error/ApiError');

// class LessonController {
//   // ...

//   async getOne(req, res) {
//     const { lessonID } = req.params;
//     const lesson = await Lesson.findOne({
//       where: { lessonID },
//       include: [
//         { model: TheoryBlock },
//         { model: TaskBlock }
//       ]
//     });

//     if (!lesson) {
//       return next(ApiError.notFound('Lesson not found'));
//     }

//     return res.json(lesson);
//   }
// }

// module.exports = new LessonController();