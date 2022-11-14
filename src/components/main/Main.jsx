import React from 'react';
import s from './Main.module.css'
import tooth from '../../assets/tooth.png'
import news from '../../assets/news.jpg'

const Main = () => {
    return (
        <div className={s.content}>
            <div className={s.content_left}>
                <section>
                    <h3>Дополнительные услуги</h3>
                    <article>
                        <img src={tooth} alt={tooth}/>
                        <div>
                            <p><a href={'#'}>Офисное отбеливание зубов</a></p>
                            <p>Офисное отбеливание не воздействует на структуру зуба и является абсолютно безопасным
                                методом осветления эмали</p>
                        </div>
                    </article>
                    <article>
                        <img src={tooth} alt={tooth}/>
                        <div>
                            <p><a href={'#'}>Офисное отбеливание зубов</a></p>
                            <p>Офисное отбеливание не воздействует на структуру зуба и является абсолютно безопасным
                                методом осветления эмали</p>
                        </div>
                    </article>
                    <article>
                        <img src={tooth} alt={tooth}/>
                        <div>
                            <p><a href={'#'}>Офисное отбеливание зубов</a></p>
                            <p>Офисное отбеливание не воздействует на структуру зуба и является абсолютно безопасным
                                методом осветления эмали</p>
                        </div>
                    </article>

                </section>
                <div className={s.bottom}>
                    <div className={s.bottomLeft}>
                        <p><span>Акция</span> для</p>
                        <p>Наших <span>клиентов</span></p>
                    </div>
                    <div className={s.bottomRight}>
                        <p>-10%</p>
                    </div>
                </div>
            </div>
            <div className={s.content_right}>
                <div className={s.content_right_top}>
                    <h2>Добро пожаловать на наш сайт</h2>
                    <p>Для того чтобы отвечать требовательным ожиданиям наших клиентов, мы стремимся оснащать
                        клинику только самым современным оборудованием. В нашей клинике широко применяются цифровые
                        технологии,
                        позволяющие усовершенствовать процесс лечения.</p>
                    <a href={'#'}>Читать далее</a>
                </div>
                <div className={s.content_right_bottom}>

                    <h2>Главные новости компании</h2>
                    <div className={s.news}>
                        <div className={s.news_Image}>
                            <img src={news} alt={'women'}/>
                        </div>
                        <div className={s.news_text}>
                            <h3>Исследователи из Новой Зеландии провели успешное испытание безыгольной стоматологической
                                анестезии</h3>
                            <p>Исследование под названием "Струйная инъекционная стоматологическая анестезия без игл:
                                первоначальные результаты" представляет новое устройство, разработанное
                                и опробованное исследователями в Новой Зеландии, обеспечивает обезболивание без иглы.
                            </p>
                        </div>
                    </div>
                    <div className={s.news_links}>
                        <a href="#">Ссылка на другую страницу с новостью</a>
                        <a href="#">Ссылка на другую страницу с новостью</a>
                        <a href="#">Ссылка на другую страницу с новостью</a>

                    </div>
                    <a href={'#'}>Читать далее</a>
                </div>

            </div>

        </div>
    );
};

export default Main;