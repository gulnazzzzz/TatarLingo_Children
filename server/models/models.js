const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    userID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    photo: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
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
})

const Material = sequelize.define('material', {
    materialID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    file: {type: DataTypes.STRING, allowNull: false},
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

Award.hasMany(UserAward)
UserAward.belongsTo(Award)

Lesson.hasOne(Award)
// Award.belongsTo(Lesson)
Award.belongsTo(Lesson, {foreignKey: 'lessonID'});

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
    AgeCategory
}
