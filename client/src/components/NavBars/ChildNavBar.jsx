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
import childPhoto from '../../assets/girl.svg'
import rightArrow from '../../assets/rightArrow.svg'
import userImage from '../../assets/user.png'
import { ADMIN_ROUTE, LESSONS_ROUTE, LESSON_ROUTE, AWARDS_ROUTE, MATERIALS_ROUTE, PROFILE_ROUTE, MAIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAINLESSONS_ROUTE, MAINAWARDS_ROUTE, MAINREPORTS_ROUTE, MAINMATERIALS_ROUTE, EVENTS_ROUTE, EVENT_ROUTE } from "../../utils/consts"


const ChildNavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  // const logOut = () => {
  //   localStorage.removeItem('token');  // Убедитесь, что это правильный ключ
  //   user.setUser({});  // Обнуление данных пользователя
  //   user.setIsAuth(false);  // Обновление состояния аутентификации
  //   navigate(MAIN_ROUTE);
  // }
  console.log(user.user.name); 
  console.log(user.user); 
  console.log(process.env.REACT_APP_API_URL)

  const imageUrl = user.user.fileName ? `${process.env.REACT_APP_API_URL}static/children/${user.user.fileName}` : childPhoto;
  const nameStyle = user.user.name.length > 9 ? "child_header_name long_name child_header_right_long_container" : "child_header_name";

  return (
    <div>
      <header className="child_header">
          <div className="child_header_block">
            <div className="child_header_left_container">
              <div className="child_header_left">
                <nav className="child_menu">
                  <ul className="child_menu_list">
                    <li className="child_menu_item">
                      <NavLink to={MAIN_ROUTE} className="child_menu_link child_menu_icon">
                        <img src={bigLogo} alt="Логотип" />
                      </NavLink>
                    </li>
                    <li className="child_menu_item">
                      <NavLink to={LESSONS_ROUTE} className="child_menu_link child_menu_icon">
                        <img src={lessons} alt="Уроки" />
                      </NavLink>
                    </li>
                    <li className="child_menu_item">
                      <NavLink to={AWARDS_ROUTE} className="child_menu_link child_menu_icon">
                        <img src={awards} alt="Награды" />
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
            {/* <button onClick={logOut} className="child_name_link">Выйти</button> */}
            <NavLink to={PROFILE_ROUTE} className="child_name_link">
              <div className="child_header_right_container ">
                <div className="child_header_right">
                  <img width={50} height={50} className="child_header_photo" src={imageUrl} alt="Фото ребенка" />
                  
                  <p className={nameStyle}>{user.user.name}</p>
                  <img className="child_header_arrow" src={rightArrow} alt="стрелка" />
                </div>
              </div>
            </NavLink>
          </div>
          {/* <button onClick={logOut} className="child_name_link">Выйти</button> */}
        </header>
    </div>
  );
});

export default ChildNavBar;


