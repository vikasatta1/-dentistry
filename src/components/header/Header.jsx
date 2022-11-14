import React from 'react';
import s from './Header.module.css'
import logo from '../../assets/Logo.png'

const Header = () => {
    return (
        <>
            <header>
                <div className={s.top}>
                    <div className={s.logo}>

                        <img src={logo} className={s.logoImg} alt={'логотип'} />

                        <div className={s.logoTitle}>
                            <p>
                                <span>СТОМАТОЛОГИЧЕСКАЯ </span>
                                <span> КЛИНИКА</span>

                            </p>
                            <p>ДАРИМ КРАСИВУЮ УЛЫБКУ</p>
                        </div>

                    </div>
                    <form >
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
                    <ul>
                        <li><a href={'#'}>Главная</a></li>
                        <li><a href={'#'}>О нас</a></li>
                        <li><a href={'#'}>Услуги</a></li>
                        <li><a href={'#'}>Вакансии</a></li>
                        <li><a href={'#'}>Контакты</a></li>
                        <li><a href={'#'}>Отзывы</a></li>
                    </ul>
                </nav>

            </header>

        </>
    );
};

export default Header;