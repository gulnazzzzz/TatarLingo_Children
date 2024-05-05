import React, { useContext } from 'react';
import { Context } from "../index";
import '../index.css';
import { NavLink, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import MainNavBar from './MainNavBar';
import lessons from '../assets/lessons.svg'
import awards from '../assets/awards.svg'
import reports from '../assets/reports.svg'
import materials from '../assets/materials.svg'
import events from '../assets/events.svg'
// import logo from '../assets/logo.svg'
// import phone from '../assets/phone.png'
// import question from '../assets/question.png'
// import vk from '../assets/vk.png'
// import tg from '../assets/tg.png'
import userImage from '../assets/user.png'


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
        <header className="child_header">
          <div className="child_header_block">
            <div className="child_header_left_container">
              <div className="child_header_left">
                <nav className="child_menu">
                  <ul className="child_menu_list">
                    <li className="child_menu_item">
                      <NavLink to="/child_lessons-3" className="child_menu_link child_menu_icon">
                        <img src={lessons} alt="Уроки" />
                      </NavLink>
                    </li>
                    <li className="child_menu_item">
                      <NavLink to="/child_awards" className="child_menu_link child_menu_icon">
                        <img src={awards} alt="Награды" />
                      </NavLink>
                    </li>
                    <li className="child_menu_item">
                      <NavLink to="/child_reports" className="child_menu_link child_menu_icon">
                        <img src={reports} alt="Отчеты" />
                      </NavLink>
                    </li>
                    <li className="child_menu_item">
                      <NavLink to="/child_materials" className="child_menu_link child_menu_icon">
                        <img src={materials} alt="Материалы" />
                      </NavLink>
                    </li>
                    <li className="child_menu_item">
                      <NavLink to="/child_events" className="child_menu_link child_menu_icon">
                        <img src={events} alt="Мероприятия" />
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <button onClick={logOut} className="child_name_link">Выйти</button>
          </div>
        </header>

      ) : (
        <>
        <MainNavBar></MainNavBar>
                <header class="child_header">
          <div class="child_header_block">
            <div class="child_header_left_container">
              <div class="child_header_left">
                <nav class="child_menu">
                  <ul class="child_menu_list">
                    <li class="child_menu_item">
                      <NavLink to="/child_materials" class="child_menu_link child_menu_icon">
                        <img src={lessons} alt="" />
                      </NavLink>
                    </li>
                    <li class="child_menu_item">
                      <NavLink to="/child_materials" class="child_menu_link child_menu_icon">
                        <img src={awards} alt="" />
                      </NavLink>
                    </li>
                    <li class="child_menu_item">
                      <NavLink to="/child_materials" class="child_menu_link child_menu_icon">
                        <img src={reports} alt="" />
                      </NavLink>
                    </li>
                    <li class="child_menu_item">
                      <NavLink to="/child_materials" class="child_menu_link child_menu_icon">
                        <img src={materials} alt="" />
                      </NavLink>
                    </li>
                    <li class="child_menu_item">
                      <NavLink to="/child_materials" class="child_menu_link child_menu_icon">
                        <img src={events} alt="" />
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <NavLink to="/child_materials" class="child_name_link">
              <div class="child_header_right_container_auth">
                <div class="child_header_right">
                  <img class="right_img" src={userImage} alt="пользователь" />
                  <a href="auth.html" class="menu__link">Войти</a>
                </div>
              </div>
            </NavLink>
          </div>
      </header>
      </>
      )}
    </div>
  );
});

export default NavBar;
