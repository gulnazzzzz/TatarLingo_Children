// const sequelize = require('../db')
// const {DataTypes} = require('sequelize')

// const User = sequelize.define('user', {
//     userID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type: DataTypes.STRING, allowNull: false},
//     photo: {type: DataTypes.STRING},
//     email: {type: DataTypes.STRING, unique: true},
//     password: {type: DataTypes.STRING},
//     role: {type: DataTypes.STRING, defaultValue: "USER"},
//     birthday: {type: DataTypes.DATE},
// })

// const Lesson = sequelize.define('lesson', {
//     lessonID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     title: {type: DataTypes.STRING, unique: true},
//     img: {type: DataTypes.STRING, allowNull: false},
// })

// const UserLesson = sequelize.define('user_lesson', {
//     user_lessonID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     isCompleted: {type: DataTypes.BOOLEAN , defaultValue: false, /* boolean, true или false, по умолчанию false */ allowNull: false },
// })

// const Award = sequelize.define('award', {
//     awardID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     img: {type: DataTypes.STRING, allowNull: false},
// })

// const UserAward = sequelize.define('user_award', {
//     user_AwardID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// });

// const Material = sequelize.define('material', {
//     materialID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     file: {type: DataTypes.STRING, allowNull: false},
//     title: {type: DataTypes.STRING, unique: true}
// })

// const Event = sequelize.define('event', {
//     eventID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     img: {type: DataTypes.STRING, allowNull: false},
//     title: {type: DataTypes.STRING, unique: true},
//     description: {type: DataTypes.STRING, allowNull: false},
//     dateAndTime: {type: DataTypes.STRING, allowNull: false},
//     location: {type: DataTypes.STRING, allowNull: false},
//     link: {type: DataTypes.STRING, allowNull: false},
// })

// const MaterialCategory = sequelize.define('materialCategory', {
//     materialCategoryID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type: DataTypes.STRING, unique: true, allowNull: false},
// })

// const EventCategory = sequelize.define('eventCategory', {
//     eventCategoryID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type: DataTypes.STRING, unique: true, allowNull: false},
// })

// const LessonAge = sequelize.define('lessonAge', {
//     lessonAgeID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type: DataTypes.STRING, unique: true, allowNull: false},
// })

// const LessonCategory = sequelize.define('lessonCategory', {
//     lessonCategoryID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type: DataTypes.STRING, unique: true, allowNull: false},
// })

// const AgeCategory = sequelize.define('age_category', {
//     lessonAgeCategoryID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })


// User.hasMany(UserAward)
// UserAward.belongsTo(User)

// User.hasMany(UserLesson)
// UserLesson.belongsTo(User)

// Lesson.hasMany(UserLesson)
// UserLesson.belongsTo(Lesson)

// LessonAge.hasMany(Lesson)
// Lesson.belongsTo(LessonAge)

// LessonCategory.hasMany(Lesson)
// Lesson.belongsTo(LessonCategory)

// LessonAge.belongsToMany(LessonCategory, {through: AgeCategory })
// LessonCategory.belongsToMany(LessonAge, {through: AgeCategory })


// MaterialCategory.hasMany(Material)
// Material.belongsTo(MaterialCategory)

// EventCategory.hasMany(Event)
// Event.belongsTo(EventCategory)

// Award.hasMany(UserAward)
// UserAward.belongsTo(Award)

// Lesson.hasOne(Award)
// // Award.belongsTo(Lesson)
// Award.belongsTo(Lesson, {foreignKey: 'lessonID'});

// module.exports = {
//     User,
//     Lesson,
//     UserLesson,
//     Award,
//     UserAward,
//     Material,
//     Event,
//     MaterialCategory,
//     EventCategory,
//     LessonCategory,
//     LessonAge,
//     AgeCategory
// }




// const sequelize = require('../db');
// const { DataTypes } = require('sequelize');

// const User = sequelize.define('user', {
//     userID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, allowNull: false },
//     photo: { type: DataTypes.STRING },
//     email: { type: DataTypes.STRING, unique: true },
//     password: { type: DataTypes.STRING },
//     role: { type: DataTypes.STRING, defaultValue: "USER" },
//     birthday: { type: DataTypes.DATE },
// });

// const Lesson = sequelize.define('lesson', {
//     lessonID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     title: { type: DataTypes.STRING, unique: true },
//     img: { type: DataTypes.STRING, allowNull: false },
// });

// const UserLesson = sequelize.define('user_lesson', {
//     userLessonID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     userID: { type: DataTypes.INTEGER, references: { model: User, key: 'userID' } },
//     lessonID: { type: DataTypes.INTEGER, references: { model: Lesson, key: 'lessonID' } },
//     isCompleted: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
// });

// const Award = sequelize.define('award', {
//     awardID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     img: { type: DataTypes.STRING, allowNull: false },
// });

// const UserAward = sequelize.define('user_award', {
//     userAwardID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     userID: { type: DataTypes.INTEGER, references: { model: User, key: 'userID' } },
//     awardID: { type: DataTypes.INTEGER, references: { model: Award, key: 'awardID' } },
// });

// const TheoryBlock = sequelize.define('theory_block', {
//     theoryBlockID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     lessonID: { type: DataTypes.INTEGER, references: { model: Lesson, key: 'lessonID' } },
//     audio: { type: DataTypes.STRING, allowNull: false },
//     tatarText: { type: DataTypes.STRING, allowNull: false },
//     translatedText: { type: DataTypes.STRING, allowNull: false },
//     img: { type: DataTypes.STRING, allowNull: false },
// });

// const TaskBlock = sequelize.define('task_block', {
//     taskBlockID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     lessonID: { type: DataTypes.INTEGER, references: { model: Lesson, key: 'lessonID' } },
//     audio: { type: DataTypes.STRING, allowNull: false },
//     tatarText: { type: DataTypes.STRING, allowNull: false },
//     translatedText: { type: DataTypes.STRING, allowNull: false },
//     correctImg: { type: DataTypes.STRING, allowNull: false },
//     wrongImg: { type: DataTypes.TEXT, allowNull: false },
// });

// const UserLessonProgress = sequelize.define('user_lesson_progress', {
//     userLessonProgressID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     userLessonID: { type: DataTypes.INTEGER, references: { model: UserLesson, key: 'userLessonID' } },
//     blockID: { type: DataTypes.INTEGER },
//     isCompleted: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
//     correctAnswers: { type: DataTypes.INTEGER, defaultValue: 0 },
//     wrongAnswers: { type: DataTypes.INTEGER, defaultValue: 0 },
// });

// const Material = sequelize.define('material', {
//     materialID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     file: { type: DataTypes.STRING, allowNull: false },
//     title: { type: DataTypes.STRING, unique: true },
// });

// const Event = sequelize.define('event', {
//     eventID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     img: { type: DataTypes.STRING, allowNull: false },
//     title: { type: DataTypes.STRING, unique: true },
//     description: { type: DataTypes.STRING, allowNull: false },
//     dateAndTime: { type: DataTypes.STRING, allowNull: false },
//     location: { type: DataTypes.STRING, allowNull: false },
//     link: { type: DataTypes.STRING, allowNull: false },
// });

// const MaterialCategory = sequelize.define('material_category', {
//     materialCategoryID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, unique: true, allowNull: false },
// });

// const EventCategory = sequelize.define('event_category', {
//     eventCategoryID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, unique: true, allowNull: false },
// });

// const LessonAge = sequelize.define('lesson_age', {
//     lessonAgeID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, unique: true, allowNull: false },
// });

// const LessonCategory = sequelize.define('lesson_category', {
//     lessonCategoryID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, unique: true, allowNull: false },
// });

// const AgeCategory = sequelize.define('age_category', {
//     lessonAgeCategoryID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
// });

// User.hasMany(UserAward);
// UserAward.belongsTo(User);

// User.hasMany(UserLesson);
// UserLesson.belongsTo(User);

// Lesson.hasMany(UserLesson);
// UserLesson.belongsTo(Lesson);

// Lesson.hasMany(TheoryBlock);
// TheoryBlock.belongsTo(Lesson);

// Lesson.hasMany(TaskBlock);
// TaskBlock.belongsTo(Lesson);

// UserLesson.hasMany(UserLessonProgress);
// UserLessonProgress.belongsTo(UserLesson);

// MaterialCategory.hasMany(Material);
// Material.belongsTo(MaterialCategory);

// EventCategory.hasMany(Event);
// Event.belongsTo(EventCategory);

// Award.hasMany(UserAward);
// UserAward.belongsTo(Award);

// LessonAge.hasMany(Lesson);
// Lesson.belongsTo(LessonAge);

// LessonCategory.hasMany(Lesson);
// Lesson.belongsTo(LessonCategory);

// LessonAge.belongsToMany(LessonCategory, { through: AgeCategory });
// LessonCategory.belongsToMany(LessonAge, { through: AgeCategory });

// module.exports = {
//     User,
//     Lesson,
//     UserLesson,
//     Award,
//     UserAward,
//     TheoryBlock,
//     TaskBlock,
//     UserLessonProgress,
//     Material,
//     Event,
//     MaterialCategory,
//     EventCategory,
//     LessonCategory,
//     LessonAge,
//     AgeCategory,
// };




const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    userID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    photo: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    birthday: {type: DataTypes.DATE},
})

const Lesson = sequelize.define('lesson', {
    lessonID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true},
    img: {type: DataTypes.STRING, allowNull: false},
})

const UserLesson = sequelize.define('user_lesson', {
    user_lessonID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    isCompleted: {type: DataTypes.BOOLEAN , defaultValue: false, /* boolean, true или false, по умолчанию false */ allowNull: false },
})

const Award = sequelize.define('award', {
    awardID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING, allowNull: false},
})

const UserAward = sequelize.define('user_award', {
    user_AwardID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Material = sequelize.define('material', {
    materialID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    file: {type: DataTypes.STRING, allowNull: false},
    title: {type: DataTypes.STRING, unique: true}
})

const Event = sequelize.define('event', {
    eventID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING, allowNull: false},
    title: {type: DataTypes.STRING, unique: true},
    description: {type: DataTypes.STRING, allowNull: false},
    dateAndTime: {type: DataTypes.STRING, allowNull: false},
    location: {type: DataTypes.STRING, allowNull: false},
    link: {type: DataTypes.STRING, allowNull: false},
})

const MaterialCategory = sequelize.define('materialCategory', {
    materialCategoryID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const EventCategory = sequelize.define('eventCategory', {
    eventCategoryID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const LessonAge = sequelize.define('lessonAge', {
    lessonAgeID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const LessonCategory = sequelize.define('lessonCategory', {
    lessonCategoryID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const AgeCategory = sequelize.define('age_category', {
    lessonAgeCategoryID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const TheoryBlock = sequelize.define('lessonTheoryBlock', {
    theoryBlockID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    lessonID: { type: DataTypes.INTEGER, references: { model: Lesson, key: 'lessonID' } },
    audio: { type: DataTypes.STRING, allowNull: false },
    tatarText: { type: DataTypes.STRING, allowNull: false },
    translatedText: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
});

const TaskBlock = sequelize.define('lessonTaskBlock', {
    taskBlockID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    lessonID: { type: DataTypes.INTEGER, references: { model: Lesson, key: 'lessonID' } },
    audio: { type: DataTypes.STRING, allowNull: false },
    tatarText: { type: DataTypes.STRING, allowNull: false },
    translatedText: { type: DataTypes.STRING, allowNull: false },
    correctImg: { type: DataTypes.STRING, allowNull: false },
    wrongImg: { type: DataTypes.STRING, allowNull: false },
});

const UserLessonProgress = sequelize.define('user_lesson_progress', {
    userLessonProgressID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userLessonID: { type: DataTypes.INTEGER, references: { model: UserLesson, key: 'userLessonID' } },
    blockID: { type: DataTypes.INTEGER },
    isCompleted: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    correctAnswers: { type: DataTypes.INTEGER, defaultValue: 0 },
    wrongAnswers: { type: DataTypes.INTEGER, defaultValue: 0 },
});


User.hasMany(UserAward)
UserAward.belongsTo(User)

User.hasMany(UserLesson)
UserLesson.belongsTo(User)

Lesson.hasMany(UserLesson)
UserLesson.belongsTo(Lesson)

LessonAge.hasMany(Lesson)
Lesson.belongsTo(LessonAge)

LessonCategory.hasMany(Lesson)
Lesson.belongsTo(LessonCategory)

LessonAge.belongsToMany(LessonCategory, {through: AgeCategory })
LessonCategory.belongsToMany(LessonAge, {through: AgeCategory })


MaterialCategory.hasMany(Material)
Material.belongsTo(MaterialCategory)

EventCategory.hasMany(Event)
Event.belongsTo(EventCategory)

Lesson.belongsToMany(Award, { through: 'LessonAwards' });
Award.belongsToMany(Lesson, { through: 'LessonAwards' });

// Award.hasMany(UserAward)
// UserAward.belongsTo(Award)

// Lesson.hasOne(Award)
// // Award.belongsTo(Lesson)
// Award.belongsTo(Lesson, {foreignKey: 'lessonID'});

Lesson.hasMany(TheoryBlock);
TheoryBlock.belongsTo(Lesson);

Lesson.hasMany(TaskBlock);
TaskBlock.belongsTo(Lesson);

UserLesson.hasMany(UserLessonProgress);
UserLessonProgress.belongsTo(UserLesson);



module.exports = {
    User,
    Lesson,
    UserLesson,
    Award,
    UserAward,
    Material,
    Event,
    MaterialCategory,
    EventCategory,
    LessonCategory,
    LessonAge,
    AgeCategory,
    TheoryBlock,
    TaskBlock,
    UserLessonProgress,
}