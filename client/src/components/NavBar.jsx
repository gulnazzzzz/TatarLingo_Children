import React, { useContext, useEffect } from 'react';
import { Context } from "../index";
import '../index.css';
import { NavLink, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import SystemNavBar from './NavBars/SystemNavBar';
import MainNavBar from './NavBars/MainNavBar';
import AdminNavBar from './NavBars/AdminNavBar'; 
import ChildNavBar from './NavBars/ChildNavBar';
import materials from '../assets/materials.svg'
import events from '../assets/events.svg'
import userImage from '../assets/user.png'
import bigLogo from '../assets/childLogo.svg'
import lessons from '../assets/lessons.svg'
import awards from '../assets/awards.svg'
import reports from '../assets/reports.svg'
import { ADMIN_ROUTE, LESSONS_ROUTE, LESSON_ROUTE, AWARDS_ROUTE, MATERIALS_ROUTE, PROFILE_ROUTE, MAIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAINLESSONS_ROUTE, MAINAWARDS_ROUTE, MAINREPORTS_ROUTE, MAINMATERIALS_ROUTE, EVENTS_ROUTE, EVENT_ROUTE } from "../utils/consts"
import {jwtDecode as jwt_decode} from 'jwt-decode';


const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  // const logOut = () => {
  //   user.setUser({});
  //   user.setIsAuth(false);
  //   // navigate('/login'); // Переход на страницу логина после выхода
  // }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        const userData = jwt_decode(token);
        user.setUser(userData); // Устанавливаем данные пользователя
        user.setIsAuth(true); // Устанавливаем статус аутентификации в true
    }
}, []);

  const logOut = () => {
    localStorage.removeItem('token'); // Удаление токена из localStorage
    user.setIsAuth(false);
    user.setUser(null); // Очистка данных пользователя
    // Переход на страницу логина или другую страницу
}

  

  return (
    <div>
      {user.isAuth ? (
        <>
        {user.user.role === 'ADMIN' ? (
        <AdminNavBar />
      ) : (
        <ChildNavBar />
      )}
        </>
      ) : (
        <>
          <SystemNavBar></SystemNavBar>
          <MainNavBar></MainNavBar>
        </>
      )}
    </div>
  );
});

export default NavBar;
