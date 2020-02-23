import React from 'react';
import './Feedback.styles.css';

export const Feedback = () => (
    <section className="feedback">
        <div className="feedback__title">
            Отзывы
        </div>
        <div className="feedback__list">
            <div className="feedback__item">
                <div className="feedback__item_image feedback__item_image_1">

                </div>
                <div className="feedback__item_content">
                    <div className="feedback__item_content_name">
                        Сергей
                    </div>
                    <div className="feedback__item_content_text">
                        Отремонтировали гараж в лучшем виде, проверять я его конечно не буду!
                    </div>
                </div>
            </div>
            <div className="feedback__item">
                <div className="feedback__item_image feedback__item_image_2">

                </div>
                <div className="feedback__item_content">
                    <div className="feedback__item_content_name">
                        Сергей
                    </div>
                    <div className="feedback__item_content_text">
                        Если вы не доверяете этой конторе, то вы не правы, всего доброго!
                    </div>
                </div>
            </div>
            <div className="feedback__item">
                <div className="feedback__item_image feedback__item_image_3">

                </div>
                <div className="feedback__item_content">
                    <div className="feedback__item_content_name">
                        Сергей
                    </div>
                    <div className="feedback__item_content_text">
                        Необъяснимо, но факт! Гараж был отремонтирован за неделю.
                    </div>
                </div>
            </div>
        </div>
    </section>
);