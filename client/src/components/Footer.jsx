import React from 'react';
import '../index.css';
import { ADMIN_ROUTE, LESSONS_ROUTE, LESSON_ROUTE, AWARDS_ROUTE, MATERIALS_ROUTE, PROFILE_ROUTE, MAIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAINLESSONS_ROUTE, MAINAWARDS_ROUTE, MAINREPORTS_ROUTE, MAINMATERIALS_ROUTE, EVENTS_ROUTE, EVENT_ROUTE } from "../utils/consts"
import { NavLink} from "react-router-dom";
import logo from '../assets/logo.png'
import studying from '../assets/studying.png'
import mail from '../assets/mail.png'
import phoneFooter from '../assets/phoneFooter.png'
import internet from '../assets/internet.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_block">
                <img className="footer_img" src={logo} alt="" />
                <div className="footer_text">
                    <p className="footer_title footer_title_main">TatarLingo</p>
                    <NavLink className="footer_a" to={EVENTS_ROUTE}>
                        <p className="footer_list">Мероприятия</p>
                    </NavLink>
                    <p className="footer_list">Помощь</p>
                </div>
            </div>
            <div className="footer_block">
                <img className="footer_img" src={studying} alt="" />
                <div className="footer_text">
                    <p className="footer_title">Учеба в TatarLingo</p>
                    <NavLink className="footer_a"  to={MAIN_ROUTE}>
                        <p className="footer_list">Главная</p>
                    </NavLink>
                    <NavLink className="footer_a"  to={MAINLESSONS_ROUTE}>
                        <p className="footer_list">Занятия</p>
                    </NavLink>
                    <NavLink className="footer_a"  to={AWARDS_ROUTE}>
                        <p className="footer_list">Награды</p>
                    </NavLink>
                    <NavLink className="footer_a" to={MATERIALS_ROUTE}>
                        <p className="footer_list">Материалы</p>
                    </NavLink>
                </div>
            </div>
            <div className="footer_block footer_third footer_three">
                <div className="footer_mail-phone">
                    <img className="footer_img" src={mail} alt="" />
                    <div className="footer_text">
                        <p className="footer_title">Почта</p>
                        <p className="footer_list">gulnaz-0121@mail.ru</p>
                    </div>
                </div>
                <div className="footer_mail-phone">
                    <img className="footer_img" src={phoneFooter} alt="" />
                    <div className="footer_text">
                        <p className="footer_title">Телефон</p>
                        <p className="footer_list">+7 (904) 661-16-34</p>
                    </div>
                </div>
            </div>
            <div className="footer_block">
                <img className="footer_img" src={internet} alt="" />
                <div className="footer_text">
                    <p className="footer_title">Мы в интернете</p>
                    <NavLink className="footer_a"  to="https://vk.com" target="_blank" >
                        <p className="footer_list">Вконтакте</p>
                    </NavLink>
                    <NavLink className="footer_a"  to="https://t.me" target="_blank">
                        <p className="footer_list">Telegram</p>
                    </NavLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;