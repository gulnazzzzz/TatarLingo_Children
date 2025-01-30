import React, { useContext } from 'react';
import { Context } from "../../index";
import '../../index.css';
import { NavLink, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import bigLogo from '../../assets/childLogo.svg'
import lessons from '../../assets/lessons.svg'
import awards from '../../assets/awards.svg'
import reports from '../../assets/reports.svg'
import materials from '../../assets/materials.svg'
import events from '../../assets/events.svg'
import userImage from '../../assets/user.png'
import { ADMIN_ROUTE, LESSONS_ROUTE, AWARDS_ROUTE, MATERIALS_ROUTE, PROFILE_ROUTE,  LOGIN_ROUTE, MAINLESSONS_ROUTE, MAINAWARDS_ROUTE, MAINREPORTS_ROUTE, MAINMATERIALS_ROUTE, EVENTS_ROUTE, MAIN_ROUTE } from "../../utils/consts"


const AdminNavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('token');
    user.setUser({});
    user.setIsAuth(false);
    navigate(MAIN_ROUTE);
  }

  return (
    <div>
      <header className="child_header">
          <div className="child_header_block">
            <div className="child_header_left_container">
              <div className="child_header_left">
                <nav className="child_menu">
                  <ul className="child_menu_list">
                    <li className="child_menu_item">
                      <NavLink to={ADMIN_ROUTE} className="child_menu_link child_menu_icon">
                        <img src={bigLogo} alt="Логотип" />
                      </NavLink>
                    </li>
                    <li className="child_menu_item">
                      <NavLink to={LESSONS_ROUTE} className="child_menu_link child_menu_icon">
                        <img src={lessons} alt="Уроки" />
                      </NavLink>
                    </li>
                    <li className="child_menu_item">
                      <NavLink to={MATERIALS_ROUTE} className="child_menu_link child_menu_icon">
                        <img src={materials} alt="Материалы" />
                      </NavLink>
                    </li>
                    <li className="child_menu_item">
                      <NavLink to={EVENTS_ROUTE} className="child_menu_link child_menu_icon">
                        <img src={events} alt="Мероприятия" />
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="adminNavBarButtons">
              <div className="child_header_right_container butAdmin">
                <div className="child_header_right ">
                  <button onClick={() => navigate(ADMIN_ROUTE)} className="adminNavBar">Админ панель</button>
                </div>
              </div>
            <div className="child_header_right_container logOutAdmin">
                <div className="child_header_right ">
                  <button onClick={logOut}  className="adminNavBar">Выйти</button>
                </div>
              </div>
            </div>
          </div>
        </header>
    </div>
  );
});

export default AdminNavBar;
