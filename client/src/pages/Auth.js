// import React, { useContext, useState, useEffect } from 'react';
// import '../index.css';

// import auth_logo from '../assets/auth_logo.svg';
// import openEye from '../assets/openEye.svg';
// import closeEye from '../assets/closeEye.svg';  // Добавьте иконку закрытого глаза
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { MAIN_ROUTE, LESSONS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ADMIN_ROUTE, EVENTS_ROUTE } from "../utils/consts";
// import { login, registration } from "../http/userAPI";
// import { observer } from "mobx-react-lite";
// import { Context } from "../index";
// import lessonBack from '../assets/authBack.jpg';

// const Auth = observer(() => {
//   useEffect(() => {
//     const SystemHeader = document.querySelector('.system-header');
//     const ChildHeader = document.querySelector('.child_header');

//     if (SystemHeader) SystemHeader.style.display = 'none';
//     if (ChildHeader) ChildHeader.style.display = 'none';

//     return () => {
//       if (SystemHeader) SystemHeader.style.display = '';
//       if (ChildHeader) ChildHeader.style.display = '';
//     };
//   }, []);

//   const { user } = useContext(Context);
//   const location = useLocation();
//   const history = useNavigate();
//   const isLogin = location.pathname === LOGIN_ROUTE;
//   const [name, setName] = useState('');
//   const [birthday, setBirthday] = useState('');
//   const [photo, setPhoto] = useState(null);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [repeatPassword, setRepeatPassword] = useState('');

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showRepeatPassword, setShowRepeatPassword] = useState(false);

//   const handlePhotoChange = (e) => {
//     setPhoto(e.target.files[0]);
//   };

//   const validateFields = () => {
//     const newErrors = {};
//     if (!email) newErrors.email = 'Введите email';
//     if (!password) newErrors.password = 'Введите пароль';
//     if (password.length < 4 || password.length > 6 || !/^[a-zA-Z0-9]+$/.test(password)) {
//       newErrors.password = 'Пароль должен содержать от 4 до 6 символов (буквы и цифры)';
//     }
//     if (!isLogin) {
//       if (!name) newErrors.name = 'Введите имя ребенка';
//       if (!/^[a-zA-Zа-яА-Я]+$/.test(name)) {
//         newErrors.name = 'Имя должно состоять только из букв и без пробелов';
//       }
//       if (!birthday) newErrors.birthday = 'Введите возраст ребенка';
//       if (!photo) newErrors.photo = 'Загрузите фотографию';
//       if (!repeatPassword) newErrors.repeatPassword = 'Повторите пароль';
//       if (password !== repeatPassword) newErrors.repeatPassword = 'Пароли не совпадают';
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const click = async () => {
//     setSubmitted(true);
//     if (!validateFields()) {
//       return;
//     }

//     try {
//       let data;
//       if (isLogin) {
//         data = await login(email, password);
//         user.setUser(data);
//         user.setIsAuth(true);
//         if (data.role === 'ADMIN') {
//           history(ADMIN_ROUTE);
//         } else if (data.role === 'USER') {
//           history(LESSONS_ROUTE);
//         }
//       } else {
//         data = await registration(name, birthday, photo, email, password);
//         user.setUser(data);
//         user.setIsAuth(true);
//         alert(`Пользователь ${name} успешно зарегистрирован в системе.`);
//         history(EVENTS_ROUTE);
//       }
//     } catch (e) {
//       if (e.response && e.response.data && e.response.data.message) {
//         alert(e.response.data.message);
//       } else {
//         console.error('Error:', e);
//         alert('Произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте снова.');
//       }
//     }
//   };

//   const handleNameChange = (e) => {
//     let value = e.target.value.replace(/[^a-zA-Zа-яА-Я]/g, '').replace(/\s+/g, '');
//     value = value.charAt(0).toUpperCase() + value.slice(1);
//     setName(value);
//     validateName(value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     validatePassword(e.target.value);
//   };

//   const handleRepeatPasswordChange = (e) => {
//     setRepeatPassword(e.target.value);
//     validatePasswordMatch(e.target.value);
//   };

//   const validatePassword = (value) => {
//     if (value.length < 4 || value.length > 6 || !/^[a-zA-Z0-9]+$/.test(value)) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         password: 'Пароль должен содержать от 4 до 6 символов (буквы и цифры)',
//       }));
//     } else {
//       setErrors((prevErrors) => {
//         const { password, ...rest } = prevErrors;
//         return rest;
//       });
//     }
//   };

//   const validatePasswordMatch = (value) => {
//     if (value !== password) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         repeatPassword: 'Пароли должны совпадать',
//       }));
//     } else {
//       setErrors((prevErrors) => {
//         const { repeatPassword, ...rest } = prevErrors;
//         return rest;
//       });
//     }
//   };

//   const validateEmail = (value) => {
//     if (value.length < 6 || value.length > 254 || !value.includes('@')) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         email: 'Введите корректный email',
//       }));
//     } else {
//       setErrors((prevErrors) => {
//         const { email, ...rest } = prevErrors;
//         return rest;
//       });
//     }
//   };

//   const validateName = (value) => {
//     if (!value || !/^[a-zA-Zа-яА-Я]+$/.test(value)) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         name: 'Имя должно состоять только из букв и без пробелов',
//       }));
//     } else {
//       setErrors((prevErrors) => {
//         const { name, ...rest } = prevErrors;
//         return rest;
//       });
//     }
//   };

//   const validateBirthday = (value) => {
//     if (!value) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         birthday: 'Введите возраст ребенка',
//       }));
//     } else {
//       setErrors((prevErrors) => {
//         const { birthday, ...rest } = prevErrors;
//         return rest;
//       });
//     }
//   };

//   const validatePhoto = (value) => {
//     if (!value) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         photo: 'Загрузите фотографию',
//       }));
//     } else {
//       setErrors((prevErrors) => {
//         const { photo, ...rest } = prevErrors;
//         return rest;
//       });
//     }
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     validateEmail(e.target.value);
//   };

//   const handleBirthdayChange = (e) => {
//     setBirthday(e.target.value);
//     validateBirthday(e.target.value);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       const form = e.target.form;
//       const index = Array.prototype.indexOf.call(form, e.target);
//       form.elements[index + 1].focus();
//       e.preventDefault();
//     }
//   };

//   const backgroundStyle = {
//     backgroundImage: `url(${lessonBack})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '100vh',
//     width: '100%',
//   };

//   return (
//     <div style={backgroundStyle} className="regPage">
//       <div className="regLogoBlock">
//         <NavLink to={MAIN_ROUTE}>
//           <img src={auth_logo} alt="Логотип" className="regLogo" />
//         </NavLink>
//       </div>
//       <div className="container">
//         <form className="regForm" id="registration-form">
//           <h2 className="regTitle">{isLogin ? 'Войти в систему' : 'Регистрация'}</h2>
//           {!isLogin &&
//             <>
//               <input
//                 className="regInput"
//                 type="text"
//                 maxLength={15}
//                 placeholder="Введите имя ребенка"
//                 value={name}
//                 onChange={handleNameChange}
//                 onKeyPress={handleKeyPress}
//               />
//               {submitted && errors.name && <div className="error">{errors.name}</div>}
//               <input
//                 className="regInput"
//                 type="date"
//                 min="2016-01-01"
//                 max="2021-12-31"
//                 value={birthday}
//                 onChange={handleBirthdayChange}
//                 onKeyPress={handleKeyPress}
//               />
//               {submitted && errors.birthday && <div className="error">{errors.birthday}</div>}
//               <input
//                 className="regInput photoInput"
//                 type="file"
//                 placeholder="Фотография ребенка"
//                 onChange={handlePhotoChange}
//                 onKeyPress={handleKeyPress}
//               />
//               {submitted && errors.photo && <div className="error">{errors.photo}</div>}
//             </>
//           }
//           <input
//             className="regInput"
//             type="text"
//             placeholder="Введите почту..."
//             value={email}
//             onChange={handleEmailChange}
//             onKeyPress={handleKeyPress}
//           />
//           {submitted && errors.email && <div className="error">{errors.email}</div>}
//           <div className="passwordInput">
//             <div className="passwordWrapper">
//               <input
//                 className="regInput"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Введите пароль..."
//                 value={password}
//                 onChange={handlePasswordChange}
//                 onKeyPress={handleKeyPress}
//               />
//               <img
//                 src={showPassword ? openEye : closeEye}
//                 alt="Toggle Password"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="eyeIcon"
//               />
//             </div>
//             {submitted && errors.password && <div className="error">{errors.password}</div>}
//             {!isLogin &&
//               <div className="passwordWrapper">
//                 <input
//                   className="regInput"
//                   type={showRepeatPassword ? "text" : "password"}
//                   placeholder="Повторите пароль"
//                   value={repeatPassword}
//                   onChange={handleRepeatPasswordChange}
//                   onKeyPress={handleKeyPress}
//                 />
//                 <img
//                   src={showRepeatPassword ? openEye : closeEye}
//                   alt="Toggle Password"
//                   onClick={() => setShowRepeatPassword(!showRepeatPassword)}
//                   className="eyeIcon"
//                 />
//                 {submitted && errors.repeatPassword && <div className="error">{errors.repeatPassword}</div>}
//               </div>
//             }
//           </div>
//           <div className="regButtons">
//             <button
//               className="reg_button"
//               onClick={(e) => {
//                 e.preventDefault();
//                 click();
//               }}
//               disabled={!email || !password || (!isLogin && (!name || !birthday || !photo || !repeatPassword))}
//             >
//               {isLogin ? 'Войти' : 'Регистрация'}
//             </button>
//             <NavLink to={MAIN_ROUTE}>
//               <button className="back_button" type="submit">
//                 Назад
//               </button>
//             </NavLink>
//             {isLogin ?
//               <p className="regP original-text">
//                 Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} className="regSpan">Зарегистрируйся!</NavLink>
//                 <span className="translated-text">Аккаунт юкмы? Теркәлегез</span>
//               </p>
//               :
//               <p className="regP original-text">
//                 Есть аккаунт? <NavLink to={LOGIN_ROUTE} className="regSpan">Войдите!</NavLink>
//                 <span className="translated-text">Аккаунт бармы? Керегез</span>
//               </p>
//             }
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// });

// export default Auth;




import React, { useContext, useState, useEffect } from 'react';
import '../index.css';

import auth_logo from '../assets/auth_logo.svg';
import openEye from '../assets/openEye.svg';
import closeEye from '../assets/closeEye.svg';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MAIN_ROUTE, LESSONS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ADMIN_ROUTE, EVENTS_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import lessonBack from '../assets/authBack.jpg';

const Auth = observer(() => {
  useEffect(() => {
    const SystemHeader = document.querySelector('.system-header');
    const ChildHeader = document.querySelector('.child_header');

    if (SystemHeader) SystemHeader.style.display = 'none';
    if (ChildHeader) ChildHeader.style.display = 'none';

    return () => {
      if (SystemHeader) SystemHeader.style.display = '';
      if (ChildHeader) ChildHeader.style.display = '';
    };
  }, []);

  const { user } = useContext(Context);
  const location = useLocation();
  const history = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [photo, setPhoto] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  useEffect(() => {
    // Reset form fields when the location changes (navigating between login and registration)
    setName('');
    setBirthday('');
    setPhoto(null);
    setEmail('');
    setPassword('');
    setRepeatPassword('');
    setErrors({});
    setSubmitted(false);
  }, [location.pathname]);

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const validateFields = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) newErrors.email = 'Введите корректный email';
    if (!password || (isLogin && password.length < 1) || (!isLogin && (password.length < 4 || password.length > 6 || !/^[a-zA-Z0-9]+$/.test(password)))) {
      newErrors.password = 'Пароль должен содержать от 4 до 6 символов (буквы и цифры)';
    }
    if (!isLogin) {
      if (!name) newErrors.name = 'Введите имя ребенка';
      if (!/^[a-zA-Zа-яА-Я]+$/.test(name)) {
        newErrors.name = 'Имя должно состоять только из букв и без пробелов';
      }
      if (!birthday) newErrors.birthday = 'Введите возраст ребенка';
      if (!photo) newErrors.photo = 'Загрузите фотографию';
      if (!repeatPassword) newErrors.repeatPassword = 'Повторите пароль';
      if (password !== repeatPassword) newErrors.repeatPassword = 'Пароли не совпадают';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const click = async () => {
    setSubmitted(true);
    if (!validateFields()) {
      return;
    }

    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
        user.setUser(data);
        user.setIsAuth(true);
        if (data.role === 'ADMIN') {
          history(ADMIN_ROUTE);
        } else if (data.role === 'USER') {
          history(LESSONS_ROUTE);
        }
      } else {
        data = await registration(name, birthday, photo, email, password);
        user.setUser(data);
        user.setIsAuth(true);
        alert(`Пользователь ${name} успешно зарегистрирован в системе.`);
        history(EVENTS_ROUTE);
      }
    } catch (e) {
      if (e.response && e.response.data && e.response.data.message) {
        alert(e.response.data.message);
      } else {
        console.error('Error:', e);
        alert('Произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте снова.');
      }
    }
  };

  const handleNameChange = (e) => {
    let value = e.target.value.replace(/[^a-zA-Zа-яА-Я]/g, '').replace(/\s+/g, '');
    value = value.charAt(0).toUpperCase() + value.slice(1);
    setName(value);
    validateName(value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
    validatePasswordMatch(e.target.value);
  };

  const validatePassword = (value) => {
    if ((isLogin && value.length < 1) || (!isLogin && (value.length < 4 || value.length > 6 || !/^[a-zA-Z0-9]+$/.test(value)))) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Пароль должен содержать от 4 до 6 символов (буквы и цифры)',
      }));
    } else {
      setErrors((prevErrors) => {
        const { password, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validatePasswordMatch = (value) => {
    if (value !== password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        repeatPassword: 'Пароли должны совпадать',
      }));
    } else {
      setErrors((prevErrors) => {
        const { repeatPassword, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || !emailRegex.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Введите корректный email',
      }));
    } else {
      setErrors((prevErrors) => {
        const { email, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validateName = (value) => {
    if (!value || !/^[a-zA-Zа-яА-Я]+$/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'Имя должно состоять только из букв',
      }));
    } else {
      setErrors((prevErrors) => {
        const { name, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validateBirthday = (value) => {
    if (!value || value < '2016-01-01' || value > '2021-12-31') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        birthday: 'Введите корректную дату рождения',
      }));
    } else {
      setErrors((prevErrors) => {
        const { birthday, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validatePhoto = (value) => {
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        photo: 'Загрузите фотографию',
      }));
    } else {
      setErrors((prevErrors) => {
        const { photo, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
    validateBirthday(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const form = e.target.form;
      const index = Array.prototype.indexOf.call(form, e.target);
      form.elements[index + 1].focus();
      e.preventDefault();
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${lessonBack})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
  };

  return (
    <div style={backgroundStyle} className="regPage">
      <div className="regLogoBlock">
        <NavLink to={MAIN_ROUTE}>
          <img src={auth_logo} alt="Логотип" className="regLogo" />
        </NavLink>
      </div>
      <div className="container">
        <form className="regForm" id="registration-form">
          <h2 className="regTitle">{isLogin ? 'Войти в систему' : 'Регистрация'}</h2>
          {!isLogin &&
            <>
              <input
                className="regInput"
                type="text"
                placeholder="Введите имя ребенка..."
                value={name}
                onChange={handleNameChange}
                onKeyPress={handleKeyPress}
              />
              {submitted && errors.name && <div className="error">{errors.name}</div>}
              <input
                className="regInput"
                type="date"
                min="2016-01-01"
                max="2021-12-31"
                value={birthday}
                onChange={handleBirthdayChange}
                onKeyPress={handleKeyPress}
                // readOnly
                // onFocus={(e) => e.target.removeAttribute('readonly')}
              />
              {submitted && errors.birthday && <div className="error">{errors.birthday}</div>}
              <input
                className="regInput photoInput"
                type="file"
                placeholder="Фотография ребенка"
                onChange={handlePhotoChange}
                onKeyPress={handleKeyPress}
              />
              {submitted && errors.photo && <div className="error">{errors.photo}</div>}
            </>
          }
          <input
            className="regInput"
            type="text"
            placeholder="Введите почту..."
            value={email}
            onChange={handleEmailChange}
            onKeyPress={handleKeyPress}
          />
          {submitted && errors.email && <div className="error">{errors.email}</div>}
          <div className="passwordInput">
            <div className="passwordWrapper">
              <input
                className="regInput"
                type={showPassword ? "text" : "password"}
                placeholder="Введите пароль..."
                value={password}
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
              />
              <img
                src={showPassword ? openEye : closeEye}
                alt="Toggle Password"
                onClick={() => setShowPassword(!showPassword)}
                className="eyeIcon"
              />
            </div>
            {submitted && errors.password && <div className="error">{errors.password}</div>}
            {!isLogin &&
              <div className="passwordWrapper">
                <input
                  className="regInput"
                  type={showRepeatPassword ? "text" : "password"}
                  placeholder="Повторите пароль"
                  value={repeatPassword}
                  onChange={handleRepeatPasswordChange}
                  onKeyPress={handleKeyPress}
                />
                <img
                  src={showRepeatPassword ? openEye : closeEye}
                  alt="Toggle Password"
                  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                  className="eyeIcon"
                />
                {submitted && errors.repeatPassword && <div className="error">{errors.repeatPassword}</div>}
              </div>
            }
          </div>
          <div className="regButtons">
            <button
              className="reg_button"
              onClick={(e) => {
                e.preventDefault();
                click();
              }}
              disabled={!email || !password || (!isLogin && (!name || !birthday || !photo || !repeatPassword))}
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </button>
            <NavLink to={MAIN_ROUTE}>
              <button className="back_button" type="submit">
                Назад
              </button>
            </NavLink>
            {isLogin ?
              <p className="regP original-text">
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} className="regSpan">Зарегистрируйся!</NavLink>
                <span className="translated-text">Аккаунт юкмы? Теркәлегез</span>
              </p>
              :
              <p className="regP original-text">
                Есть аккаунт? <NavLink to={LOGIN_ROUTE} className="regSpan">Войдите!</NavLink>
                <span className="translated-text">Аккаунт бармы? Керегез</span>
              </p>
            }
          </div>
        </form>
      </div>
    </div>
  );
});

export default Auth;
