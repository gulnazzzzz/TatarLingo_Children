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

const uuid = require('uuid')
const path = require('path');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, UserAward } = require('../models/models');

const generateJwt = (userID, email, role, name, birthday, photo) => {
  return jwt.sign(
      { userID, email, role, name, birthday, photo },
      process.env.SECRET_KEY,
      { expiresIn: '24h' }
  );
};

class UserController {
  async registration(req, res, next) {
        const { name, photo, email, password, role, birthday } = req.body;
        if (!name || !email || !password) {
            return next(ApiError.badRequest('Некорректное имя, email или password'));
        }
        const candidate = await User.findOne({ where: { email } });
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'));
        }
        const hashedPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ name, photo, email, role, birthday, password: hashedPassword });
        await UserAward.create({ userId: user.userID });
        const token = generateJwt(user.userID, user.email, user.role, user.name, user.birthday, user.photo);
        return res.json({ token });
    }
  
  async login(req, res , next) {
    const {email, password} = req.body
    const user = await User.findOne({where: {email}})
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'))
    }
    const token = generateJwt(user.userID, user.email, user.role, user.name, user.birthday, user.photo)
    return res.json({token})
  }
  async check(req, res , next) {
    const token = generateJwt(req.user.userID, req.user.email, req.user.role, req.user.name, req.user.birthday, req.user.photo)
    return res.json({token})
  }
}

module.exports = new UserController()