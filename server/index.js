require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');
const helmet = require('helmet');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',  // Разрешить запросы только от этого источника
  credentials: true,  // Разрешить отправку cookies и аутентификационных заголовков с фронтенда
}));
app.use(express.json());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    imgSrc: ["'self'", "data:", "http://localhost:5000"]
  }
}));

app.use('/static', express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));

app.use('/api', router);

// Обработка ошибок последний Middleware
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
