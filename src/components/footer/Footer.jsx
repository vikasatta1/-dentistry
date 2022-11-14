import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <nav className={s.nav}>
                <ul>
                    <li><a href={'#'}>Главная</a></li>
                    <li><a href={'#'}>О нас</a></li>
                    <li><a href={'#'}>Услуги</a></li>
                    <li><a href={'#'}>Вакансии</a></li>
                    <li><a href={'#'}>Контакты</a></li>
                    <li className={s.none}><a href={'#'}>Отзывы</a></li>
                </ul>
            </nav>
            <p> Наши контакты: <b>тел</b> 7(777) 77 77-77, <b>email</b>: vikasatta1998@gmail.com</p>

        </footer>
    );
};

export default Footer;