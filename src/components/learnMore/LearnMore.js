import React from 'react';
import './LearnMore.styles.css';

export const LearnMore = ({ breakpoint }) => (
    <section className="learnMore" id="learnMore">
        <div className="learnMore__request">
            <div className="learnMore__title">
                Пора все изменить!
            </div>
            <div className="learnMore__description">
                Оставьте заявку и мы рассчитаем стоимость переделки Вашего гаража
            </div>
            <form className="learnMore__form">
                <input type="text" placeholder="Ваше имя" />
                <input type="text" placeholder="Ваш телефон" />
                <input type="text" placeholder="Ваш email" />
                <button type="submit">оставить заявку</button>
            </form>
        </div>
        { !breakpoint.sm &&
            <div className="learnMore__image"></div>
        }
    </section>
);