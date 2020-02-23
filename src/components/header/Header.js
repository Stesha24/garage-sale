import React from 'react';
import './Header.styles.css';
import { scrollToAnchor } from '../utils/scrollToAnchor';

export const Header = () => (
    <header className="header">
        <div className="header__top">
            <div className="header__logo">
                <span>G4U</span>
            </div>
            <div className="header__link">
                <a href="https://www.avito.ru/omsk?q=%D0%B3%D0%B0%D1%80%D0%B0%D0%B6" target="_blank">
                    Нужен гараж? Жми сюда!
                </a>
            </div>
        </div>
        <div className="header__content content">
            <div className="header__title">
                Идеальный гараж для вашей любимой машины
            </div>
            <div className="header__description">
                Воплотим все ваши мечты в реальность
            </div>
            <div className="header__button">
                <button onClick={() => scrollToAnchor("learnMore", 0)}>узнать больше</button>
            </div>
        </div>
    </header>
);