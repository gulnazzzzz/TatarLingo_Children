require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const multer = require('multer')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'server/static/children');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });

// const upload = multer({ storage: storage });



const app = express()
app.use(cors())
app.use(express.json())


app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

// app.post('/upload', upload.single('photo'), (req, res) => {
//     res.status(200).send("File uploaded successfully");
// });

app.use('/api', router)


// Обработка ошибок последний Middleware
app.use(errorHandler)



const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`)
    )
  } catch (e) {
    console.log(e)
  }
}


start()