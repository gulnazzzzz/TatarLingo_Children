import React, { useContext } from 'react';
import { Context } from "../index";
import '../index.css';
import { NavLink, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import SystemNavBar from './NavBars/SystemNavBar';
import MainNavBar from './NavBars/MainNavBar';
import AdminNavBar from './NavBars/AdminNavBar'; 
import ChildNavBar from './NavBars/ChildNavBar';
import lessons from '../assets/lessons.svg'
import awards from '../assets/awards.svg'
import reports from '../assets/reports.svg'
import materials from '../assets/materials.svg'
import events from '../assets/events.svg'
import userImage from '../assets/user.png'
import { LESSONS_ROUTE, AWARDS_ROUTE, MATERIALS_ROUTE, PROFILE_ROUTE,  LOGIN_ROUTE, MAINLESSONS_ROUTE, MAINAWARDS_ROUTE, MAINREPORTS_ROUTE, MAINMATERIALS_ROUTE, EVENTS_ROUTE } from "../utils/consts"


const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    navigate('/login'); // Переход на страницу логина после выхода
  }

  return (
    <div>
      {user.isAuth ? (
        <>
          {user.role === 'USER' && <ChildNavBar />}
          {user.role === 'ADMIN' && <AdminNavBar />}
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
