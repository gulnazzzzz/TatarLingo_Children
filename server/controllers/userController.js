// const ApiError = require('../error/ApiError');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const { User, UserAward } = require('../models/models');

// const generateJwt = (userID, email, role) => {
//   return jwt.sign(
//       { userID, email, role }, 
//       process.env.SECRET_KEY,
//       { expiresIn: '24h' }
//     )
// }

// class UserController {
//   async registration(req, res, next) {
//         const { name, photo, email, password, role, birthday } = req.body;
//         if (!name || !email || !password) {
//             return next(ApiError.badRequest('Некорректное имя, email или password'));
//         }
//         const candidate = await User.findOne({ where: { email } });
//         if (candidate) {
//             return next(ApiError.badRequest('Пользователь с таким email уже существует'));
//         }
//         const hashedPassword = await bcrypt.hash(password, 5);
//         const user = await User.create({ name, photo, email, role, birthday, password: hashedPassword });
//         await UserAward.create({ userId: user.userID });
//         const token = generateJwt(user.userID, user.email, user.role);
//         return res.json({ token });
//     }
  
//   async login(req, res , next) {
//     const {email, password} = req.body
//     const user = await User.findOne({where: {email}})
//     if (!user) {
//       return next(ApiError.internal('Пользователь не найден'))
//     }
//     let comparePassword = bcrypt.compareSync(password, user.password)
//     if (!comparePassword) {
//       return next(ApiError.internal('Указан неверный пароль'))
//     }
//     const token = generateJwt(user.userID, user.email, user.role)
//     return res.json({token})
//   }
//   async check(req, res , next) {
//     const token = generateJwt(req.user.userID, req.user.email, req.user.role)
//     return res.json({token})
//   }
// }

// module.exports = new UserController()

// const uuid = require('uuid')
// const path = require('path');
// const ApiError = require('../error/ApiError');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const { User, UserAward } = require('../models/models');

// const generateJwt = (userID, email, role, name, birthday, fileName) => {
//   return jwt.sign(
//       { userID, email, role, name, birthday, fileName },
//       process.env.SECRET_KEY,
//       { expiresIn: '24h' }
//   );
// };


// class UserController {
//   async registration(req, res, next) {
//     const { name, email, password, role, birthday } = req.body;
//     const { photo } = req.files; // Предполагаем, что файл приходит в поле 'photo'
//     let fileName = uuid.v4() + path.extname(photo.name); // Генерация имени файла с сохранением расширения
//     let fileSavePath = path.resolve(__dirname, '..', 'static', 'children', fileName);
//     if (!name || !email || !password) {
//       return next(ApiError.badRequest('Некорректное имя, email или password'));
//     }
//     const candidate = await User.findOne({ where: { email } });
//     if (candidate) {
//       return next(ApiError.badRequest('Пользователь с таким email уже существует'));
//     }
//     photo.mv(fileSavePath, async (err) => {
//     if (err) {
//       return next(ApiError.badRequest(err.message));
//     }

//     const hashedPassword = await bcrypt.hash(password, 5);
//     const user = await User.create({ name, email, role, birthday, password: hashedPassword, photo: fileName });

//     const token = generateJwt(user.userID, user.email, user.role, user.name, user.birthday, user.photo);
//     return res.json({ token });
//     });
//   }
  
  
//   async login(req, res , next) {
//   const { email, password } = req.body;
//   const user = await User.findOne({ where: { email } });
//   if (!user) {
//     return next(ApiError.internal('Пользователь не найден'));
//   }
//   let comparePassword = bcrypt.compareSync(password, user.password);
//   if (!comparePassword) {
//     return next(ApiError.internal('Указан неверный пароль'));
//   }
//   const token = generateJwt(user.userID, user.email, user.role, user.name, user.birthday, user.photo);
//   return res.json({ token, user: { ...user.toJSON(), photo: user.photo } });
// }
//   async check(req, res , next) {
//     const token = generateJwt(req.user.userID, req.user.email, req.user.role, req.user.name, req.user.birthday, req.fileName)
//     return res.json({token})
//   }
// }


// module.exports = new UserController()


const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, UserAward } = require('../models/models');

const generateJwt = (userID, email, role, name, birthday, fileName) => {
  return jwt.sign(
    { userID, email, role, name, birthday, fileName },
    process.env.SECRET_KEY,
    { expiresIn: '24h' }
  );
};

class UserController {
  async registration(req, res, next) {
    const { name, email, password, role, birthday } = req.body;
    const { photo } = req.files; // Предполагаем, что файл приходит в поле 'photo'
    let fileName = uuid.v4() + path.extname(photo.name); // Генерация имени файла с сохранением расширения
    let fileSavePath = path.resolve(__dirname, '..', 'static', 'children', fileName);
    if (!name || !email || !password) {
      return next(ApiError.badRequest('Некорректное имя, email или password'));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким email уже существует'));
    }
    photo.mv(fileSavePath, async (err) => {
      if (err) {
        return next(ApiError.badRequest(err.message));
      }

      const hashedPassword = await bcrypt.hash(password, 5);
      const user = await User.create({ name, email, role, birthday, password: hashedPassword, photo: fileName });

      const token = generateJwt(user.userID, user.email, user.role, user.name, user.birthday, user.photo);
      return res.json({ token });
    });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'));
    }
    const token = generateJwt(user.userID, user.email, user.role, user.name, user.birthday, user.photo);
    return res.json({ token, user: { ...user.toJSON(), photo: user.photo } });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.userID, req.user.email, req.user.role, req.user.name, req.user.birthday, req.fileName);
    return res.json({ token });
  }

  async updateProfile(req, res, next) {
  const { userID } = req.params;
  const { name, birthday } = req.body;
  let photo = req.files ? req.files.photo : null;
  let fileName = null;

  if (photo) {
    fileName = uuid.v4() + path.extname(photo.name);
    photo.mv(path.resolve(__dirname, '..', 'static', 'children', fileName));
  }

  const user = await User.findByPk(userID);
  if (!user) {
    return next(ApiError.notFound('Пользователь не найден'));
  }

  user.name = name;
  user.birthday = birthday;
  if (fileName) {
    user.photo = fileName;
  }
  await user.save();

  const token = generateJwt(user.userID, user.email, user.role, user.name, user.birthday, user.photo);
  return res.json({ token, user });
}
}

module.exports = new UserController();
