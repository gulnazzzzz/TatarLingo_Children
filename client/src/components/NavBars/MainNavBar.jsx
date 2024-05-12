import React, { useContext } from 'react';
import { Context } from "../../index";
import '../../index.css';
import { NavLink, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import lessons from '../../assets/lessons.svg'
import awards from '../../assets/awards.svg'
import reports from '../../assets/reports.svg'
import materials from '../../assets/materials.svg'
import events from '../../assets/events.svg'
import userImage from '../../assets/user.png'
import { LESSONS_ROUTE, AWARDS_ROUTE, MATERIALS_ROUTE, PROFILE_ROUTE,  LOGIN_ROUTE, MAINLESSONS_ROUTE, MAINAWARDS_ROUTE, MAINREPORTS_ROUTE, MAINMATERIALS_ROUTE, EVENTS_ROUTE } from "../../utils/consts"


const MainNavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    navigate('/login'); // Переход на страницу логина после выхода
  }

  return (
    <>
      <header class="child_header">
          <div class="child_header_block">
            <div class="child_header_left_container">
              <div class="child_header_left">
                <nav class="child_menu">
                  <ul class="child_menu_list">
                    <li class="child_menu_item">
                      <NavLink to={MAINLESSONS_ROUTE} class="original-text child_menu_link child_menu_icon">
                        <img src={lessons} alt="" />
                        <span className="translated-text">Дэреслэр</span>
                      </NavLink>
                    </li>
                    <li class="child_menu_item">
                      <NavLink to={MAINAWARDS_ROUTE} class="original-text child_menu_link child_menu_icon">
                        <img src={awards} alt="" />
                        <span className="translated-text">Булэклэр</span>
                      </NavLink>
                    </li>
                    <li class="child_menu_item">
                      <NavLink to={MAINREPORTS_ROUTE} class="original-text child_menu_link child_menu_icon">
                        <img src={reports} alt="" />
                        <span className="translated-text">Атналык кузэту</span>
                      </NavLink>
                    </li>
                    <li class="child_menu_item">
                      <NavLink to={MAINMATERIALS_ROUTE} class="original-text child_menu_link child_menu_icon">
                        <img src={materials} alt="" />
                        <span className="translated-text">Вакыйгалар</span>
                      </NavLink>
                    </li>
                    <li class="child_menu_item">
                      <NavLink to={EVENTS_ROUTE} className="original-text child_menu_link child_menu_icon">
                        <img src={events} alt=""  />
                        <span className="translated-text">Вакыйгалар</span>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <NavLink to={LOGIN_ROUTE} className="child_name_link">
              <div className="child_header_right_container_auth">
                <div className="child_header_right">
                  <img className="right_img" src={userImage} alt="пользователь" />
                  <NavLink to={LOGIN_ROUTE} className="original-text menu__link">Минем кабинет
                  <span className="translated-text">Мой кабинет</span></NavLink>
                </div>
              </div>
            </NavLink>
          </div>
      </header>
      </>
  );
});

export default MainNavBar;
