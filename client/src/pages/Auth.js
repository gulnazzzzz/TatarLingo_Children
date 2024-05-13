import React, {useContext, useState, useEffect} from 'react';
import '../index.css';

import auth_logo from '../assets/auth_logo.svg';
import openEye from '../assets/openEye.svg';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LESSONS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ADMIN_ROUTE, EVENTS_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import childPhoto from '../assets/girl.svg'

// import exp from 'constants';

const Auth = observer(() =>{
  
  useEffect(() => {
    // Находим заголовки по классам
    const SystemHeader = document.querySelector('.system-header');
    const ChildHeader = document.querySelector('.child_header');

    // Скрываем оба заголовка
    if (SystemHeader) SystemHeader.style.display = 'none';
    if (ChildHeader) ChildHeader.style.display = 'none';

    // Возвращаем стиль к исходному при демонтировании компонента
    return () => {
      if (SystemHeader) SystemHeader.style.display = '';
      if (ChildHeader) ChildHeader.style.display = '';
    };
  }, []);
  

  const {user} = useContext(Context)
  const location = useLocation()
  const history = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [photo, setPhoto] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  
//   const click = async () => {
//   try {
//     let data;
//     if (isLogin) {
//       data = await login(email, password);
//     } else {
//       data = await registration(name, email, password);
//     }

//     user.setUser(data); // предполагаем, что userData содержит всю нужную информацию о пользователе
//     user.setIsAuth(true);

//     // Проверяем роль и перенаправляем пользователя
//     switch (data.role) {
//       case 'ADMIN':
//         history('/admin'); // Путь для администратора
//         break;
//       default:
//         history(LESSONS_ROUTE); // Общий путь или страница по умолчанию
//         break;
//     }
//   } catch (e) {
//     if (e.response && e.response.data && e.response.data.message) {
//       alert(e.response.data.message);
//     } else {
//       // Если ошибка не в стандартном формате, выводим общее сообщение
//       alert('Произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте снова.');
//     }
//   }
// };


//   const click = async () => {
//     try {
//       let data;
//       if (isLogin) {
//   data = await login(email, password);
// } else {
//   data = await registration(name, email, password);
// }
// user.setUser(data); // предполагаем, что функции login и registration возвращают объект пользователя
// user.setIsAuth(true);
//       history(ADMIN_ROUTE)
//     } /* catch (e) {
//       alert(e.response.data.message)
//     } */
//     catch (e) {
//       if (e.response && e.response.data && e.response.data.message) {
//       alert(e.response.data.message);
//     } else {
//       // Если в объекте ошибки нет ожидаемой структуры, выводим общее сообщение об ошибке
//       console.error('Error:', e);
//       alert('Произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте снова.');
//     }
//     }
//   }

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);  // Передаем файл, а не значение
}

  const click = async () => {
  try {
    let data;
    if (isLogin) {
      data = await login(email, password);
      user.setUser(data); // предполагаем, что функции login возвращает объект пользователя
      user.setIsAuth(true);
      if (data.role === 'ADMIN') {
        history(ADMIN_ROUTE); // Путь для администратора
      } else if (data.role === 'USER') {
        history(EVENTS_ROUTE); // Путь для обычных пользователей
        
      }
       // Перенаправляем пользователя после успешного входа
    } else {
      data = await registration(name, birthday, photo, email, password);
      user.setUser(data);
      
       // предполагаем, что функции registration возвращает объект пользователя
      user.setIsAuth(true);
      alert(`Пользователь ${name} успешно зарегистрирован в системе.`);
      history(EVENTS_ROUTE); // Перенаправляем пользователя после успешной регистрации
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



// const { user } = useContext(Context);
//   const location = useLocation();
//   const history = useNavigate();
//   const isLogin = location.pathname === LOGIN_ROUTE;
//   const [name, setName] = useState('');
//   const [birthday, setBirthday] = useState('');
//   const [photo, setPhoto] = useState(childPhoto);  // Инициализация стандартным фото
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [repeatPassword, setRepeatPassword] = useState('');

//   const handlePhotoChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       const reader = new FileReader();
//       reader.onload = (ev) => {
//         setPhoto(ev.target.result);  // Установка нового изображения
//       };
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };

//   const click = async () => {
//     try {
//       let data;
//       if (isLogin) {
//         data = await login(email, password);
//       } else {
//         const userData = {
//           name,
//           birthday,
//           photo,  // Используется текущее значение состояния
//           email,
//           password,
//           role: 'USER'
//         };
//         data = await registration(userData);
//       }
//       user.setUser(data);
//       user.setIsAuth(true);
//       history(EVENTS_ROUTE);  // Перенаправляем пользователя после успешной регистрации/авторизации
//     } catch (e) {
//       console.error('Registration/Login Error:', e);
//       alert('Ошибка при обработке запроса.');
//     }
//   };


  return (
    <div className="regPage">
      <div className="backgroundImage"></div>
      <div className="regLogoBlock">
        <img src={auth_logo} alt="Логотип" className="regLogo" />
      </div>
      <div className="container">
        <h2 className="regTitle">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
        <form className="regForm" id="registration-form">
          {!isLogin ? 
          <>
          <input className="regInput" type="text" maxLength={15} placeholder="Введите имя ребенка" value={name} onChange={e => setName(e.target.value)} /> 
          <input className="regInput" type="date"  placeholder="Введите возраст ребенка" value={birthday} onChange={e => setBirthday(e.target.value)} />
          <input className="regInput" type="file" placeholder="Фотография ребенка" onChange={handlePhotoChange} />
          
          </>
          : null}
          <input className="regInput" type="text" placeholder="Введите ваш email..." value={email} onChange={e => setEmail(e.target.value)} />
          <div className="passwordInput">
            <input className="regInput" placeholder="Введите ваш пароль..." value={password} onChange={e => setPassword (e.target.value)} type="password" />
            {/* <img src={openEye} alt="Показать пароль" className="showPassword" /> */}
            {!isLogin ? 
          <input className="regInput" type="password" placeholder="Повторите пароль" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} />
          : null}
          </div>
          <div className="regButtons">
            
            <button className="regButton" onClick={(e) => {
  e.preventDefault(); // Добавьте эту строку
  click();}} >
              {isLogin ? 'Войти' : 'Регистрация'}
            </button>
            <button className="backButton" type="submit">
              <a className="regA" href="#" onClick={(e) => {
                e.preventDefault();
                window.history.go(-1);
              }}>Назад</a>
            </button>
            {isLogin ?
              <p className="regP">
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} className="regSpan">Зарегистрируйся!</NavLink>
              </p>
              :
              <p className="regP">
                Есть аккаунт? <NavLink to={LOGIN_ROUTE} className="regSpan">Войдите!</NavLink>
              </p>
            }
          </div>
        </form>
      </div>
    </div>
  );
})

export default Auth