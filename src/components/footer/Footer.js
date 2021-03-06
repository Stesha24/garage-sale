import React from 'react';
import './Footer.styles.css';
import ym from 'react-yandex-metrika';

export const Footer = () => (
    <footer className="footer">
        <div className="footer__logo">
            G4U
        </div>
        <div className="footer__documents">
            <div className="footer__contacts_inn">
                ИНН: 0000000000000
            </div>
            <div className="footer__contacts_ogrn">
                ОГРН: 0000000000000
            </div>
        </div>
        <div className="footer__contacts">
            <div className="footer__contacts_phone">
                8 800 555 35 35
            </div>
            <div className="footer__contacts_email">
                <a href="mailto:garage4you@example.com" onClick={() => ym('reachGoal', 'MAILTO_CLICK')}>garage4you@example.com</a>
            </div>
        </div>
    </footer>
);