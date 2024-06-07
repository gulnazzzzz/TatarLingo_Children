import React, {useContext, useState, useEffect} from 'react';
import '../index.css';

import auth_logo from '../assets/auth_logo.svg';
import openEye from '../assets/openEye.svg';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {MAIN_ROUTE, LESSONS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ADMIN_ROUTE, EVENTS_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import childPhoto from '../assets/girl.svg'
import lessonBack from '../assets/lessonBack.jpg';

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
        history(LESSONS_ROUTE); // Путь для обычных пользователей
        
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
          <h2 className="regTitle">{isLogin ? 'Войти в систему' : "Регистрация"}</h2>
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
            
            <button className="reg_button" onClick={(e) => {
  e.preventDefault();
  click();}} >
              {isLogin ? 'Войти' : 'Регистрация'}
            </button>
            <NavLink to={MAIN_ROUTE}>
            <button className="back_button" type="submit">
              Назад
            </button></NavLink>
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