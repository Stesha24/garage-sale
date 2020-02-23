import React from 'react';
import './WhyUs.styles.css';

export const WhyUs = () => (
    <section className="whyUs">
        <div className="whyUs__title">
            <strong>Почему</strong> стоит обращаться к нам?
        </div>
        <div className="whyUs__list">
            <div className="whyUs__item">
                <div className="whyUs__item_image whyUs__item_image_1">

                </div>
                <div className="whyUs__item_content">
                    Высококвалифицированные специалисты
                </div>
            </div>
            <div className="whyUs__item">
                <div className="whyUs__item_image whyUs__item_image_2">

                </div>
                <div className="whyUs__item_content">
                    Современный дизайн
                </div>
            </div><div className="whyUs__item">
                <div className="whyUs__item_image whyUs__item_image_3">

                </div>
                <div className="whyUs__item_content">
                    Индивидуальный подход к каждому заказчику
                </div>
            </div><div className="whyUs__item">
                <div className="whyUs__item_image whyUs__item_image_4">

                </div>
                <div className="whyUs__item_content">
                    Более 3 довольных клиентов
                </div>
            </div>
        </div>
    </section>
);