import React from 'react';
import s from './Header.module.css'
import logo from '../../assets/Logo.png'

const Header = () => {
    return (
        <>
            <header>
                <div className={s.top}>
                    <div className={s.logo}>

                            <img src={logo} className={s.logoImg} alt={'логотип'}/>

                        <div className={s.logoTitle}>
                            <p>
                                <span>СТОМАТОЛОГИЧЕСКАЯ </span>
                                <span> КЛИНИКА</span>

                            </p>
                            <p>ДАРИМ КРАСИВУЮ УЛЫБКУ</p>
                        </div>

                    </div>
                    <form className={s.form}>
                        <input type={'text'} placeholder={'Поиск по сайту'}/>
                       <button>Поиск</button>
                    </form>

                </div>
                <div className={s.banner}>
                    <div className={s.bannerTitle}>
                        <p>МЫ СОЗДАЕМ</p>
                        <p> КРАСИВЫЕ УЛЫБКИ</p>
                    </div>

                </div>
                <nav className={s.nav}>
                    <li>
                        <a href={'#'}>Главная</a>
                        <a href={'#'}>О нас</a>
                        <a href={'#'}>Услуги</a>
                        <a href={'#'}>Вакансии</a>
                        <a href={'#'}>Контакты</a>
                        <a href={'#'}>Отзывы</a>
                    </li>
                </nav>

            </header>

        </>
    );
};

export default Header;