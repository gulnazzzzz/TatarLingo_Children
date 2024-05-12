import React, { useContext } from 'react';
import '../../index.css';
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.svg'
import phone from '../../assets/phone.png'
import question from '../../assets/question.png'
import vk from '../../assets/vk.png'
import tg from '../../assets/tg.png'
import { ADMIN_ROUTE, LESSONS_ROUTE, LESSON_ROUTE, AWARDS_ROUTE, MATERIALS_ROUTE, PROFILE_ROUTE, MAIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAINLESSONS_ROUTE, MAINAWARDS_ROUTE, MAINREPORTS_ROUTE, MAINMATERIALS_ROUTE, EVENTS_ROUTE, EVENT_ROUTE } from "../../utils/consts"


export default function SystemNavBar() {
  return (
    <>
        <header className="system-header">
          <div className="header__logo">
            <NavLink to={MAIN_ROUTE} className="logo">
              <img src={logo} alt="Здесь должен быть логотип" className="logo-image" />
            </NavLink>
          </div>
          <div className="header__right">
            <div className="header__phone">
              <img src={phone} alt="Телефон" />
              <p>+7 (904) 661-16-35</p>
            </div>
            <div className="header__help">
              <img src={question} alt="Помощь" />
              <p>Помощь</p>
            </div>
            <div className="header__socialNetwork">
              <img src={vk} alt="ВК" />
              <img src={tg} alt="ТГ" />
            </div>
          </div>
        </header>
    </>
  )
}
