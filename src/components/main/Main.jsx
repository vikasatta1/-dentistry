import React from 'react';
import s from './Main.module.css'
import tooth from '../../assets/tooth.png'

const Main = () => {
    return (
        <div className={s.content}>
            <div className={s.content_left}>
                <section className={s.service}>
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
                    <p>Добро пожаловать на наш сайт</p>
                    <p>Для того чтобы отвечать требовательным ожиданиям наших клиентов, мы стремимся оснащать
                    клинику только самым современным оборудованием</p>
                    <a href={'#'}>Читать далее</a>
                </div>

            </div>

        </div>
    );
};

export default Main;