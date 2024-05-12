import React, {useContext, useState, useEffect} from 'react';
import '../index.css';

import auth_logo from '../assets/auth_logo.svg';
import openEye from '../assets/openEye.svg';
import closeEye from '../assets/closeEye.svg';
import backReg from '../assets/backReg.svg';

import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LESSONS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(user)
      user.setIsAuth(true)
      history(LESSONS_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <div className="regPage">
      <div className="backgroundImage"></div>
      <div className="regLogoBlock">
        <img src={auth_logo} alt="Логотип" className="regLogo" />
      </div>
      <div className="container">
        <h2 className="regTitle">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
        <form className="regForm" id="registration-form">
          <input className="regInput" type="text" placeholder="Введите ваш email..." value={email} onChange={e => setEmail(e.target.value)} />
          <div className="passwordInput">
            <input className="regInput" placeholder="Введите ваш пароль..." value={password} onChange={e => setPassword (e.target.value)} type="password" />
            <img src={openEye} alt="Показать пароль" className="showPassword" />
          </div>
          <div className="regButtons">
            
            <button className="regButton" onClick={click} >
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
    // <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
    //   <Card style={{width: 600}} className="p-5">
    //     <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
    //     <Form className="d-flex flex-column">
    //       <Form.Control className="mt-3" placeholder="Введите ваш email..." value={email} onChange={e => setEmail(e.target.value)} />
    //       <Form.Control className="mt-3" placeholder="Введите ваш пароль..." value={password} onChange={e => setPassword (e.target.value)} type="password" />
    //       <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
    //         {isLogin ?
    //           <div>
    //             Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
    //           </div>
    //           :
    //           <div>
    //             Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
    //           </div>
    //         }
    //         <Button variant={"outline-success"} onClick={click} >
    //           {isLogin ? 'Войти' : 'Регистрация'}
    //         </Button>
    //       </Row>
    //     </Form>
    //   </Card>
    // </Container>
  );
})

export default Auth