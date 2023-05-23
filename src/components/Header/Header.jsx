import React, { useEffect, useState, useRef, useContext } from 'react'
import styles from './Header.module.css';
import { Translation } from '../../context/TranslationContext';

function Header({ currentSection, sectionIds }) {

    const { handleClick, t, language } = useContext(Translation);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('selected-theme') || 'light');
    const [selectedIcon, setSelectedIcon] = useState(localStorage.getItem('selected-icon') || 'uil-sun');

    const darkTheme = 'dark-theme';
    const iconTheme = 'uil-sun';
    const themeButton = useRef(null);
    const headerRef = useRef(null);

    const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
    const getCurrentIcon = () => (themeButton.current.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun');

    const handleClickLanguage = () => {
        if (language === "es") {
            handleClick("en");
        } else {
            handleClick("es");
        }
    };

    useEffect(() => {
        if (selectedTheme) {
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
            themeButton.current.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
        }
    }, [selectedTheme, selectedIcon]);

    useEffect(() => {
        function scrollHeader() {
            const nav = headerRef.current;
            if (window.scrollY >= 80) nav.classList.add('scroll-header');
            else nav.classList.remove('scroll-header');
        }

        window.addEventListener('scroll', scrollHeader);

        return () => {
            window.removeEventListener('scroll', scrollHeader);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleThemeToggle = () => {
        document.body.classList.toggle(darkTheme);
        themeButton.current.classList.toggle(iconTheme);

        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    };

    return (
        <header className={`${styles.header} ${headerRef.current?.classList.contains('scroll-header') ? 'scroll-header' : ''}`} ref={headerRef} id="header">
            <nav className={`${styles.nav} container`}>
                <a href="#" className={styles.nav__logo}>Andres</a>
                <div className={`${styles.nav__menu} ${isMenuOpen ? styles['show-menu'] : ''}`} id="nav-menu">
                    <ul className={`${styles.nav__list} grid`}>
                        <li className={styles.nav__item}>
                            <a href={`#${sectionIds.home}`} className={`${styles.nav__link} ${currentSection === sectionIds.home ? styles.active__link : ''}`} >
                                <i className={`uil uil-estate ${styles.nav__icon}`}></i> {t('links-sections.home')}
                            </a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href={`#${sectionIds.about}`} className={`${styles.nav__link} ${currentSection === sectionIds.about ? styles.active__link : ''}`} >
                                <i className={`uil uil-user ${styles.nav__icon}`}></i> {t('links-sections.about')}
                            </a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href={`#${sectionIds.skills}`} className={`${styles.nav__link} ${currentSection === sectionIds.skills ? styles.active__link : ''}`} >
                                <i className={`uil uil-file-alt ${styles.nav__icon}`}></i> {t('links-sections.skills')}
                            </a>
                        </li>
                        <li className={styles.nav__item} >
                            <a href={`#${sectionIds.qualification}`} className={`${styles.nav__link} ${currentSection === sectionIds.qualification ? styles.active__link : ''}`}>
                                <i className={`uil uil-briefcase-alt ${styles.nav__icon}`}></i> {t('links-sections.qualification')}
                            </a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href={`#${sectionIds.portfolio}`} className={`${styles.nav__link} ${currentSection === sectionIds.portfolio ? styles.active__link : ''}`} >
                                <i className={`uil uil-scenery ${styles.nav__icon}`}></i> {t('links-sections.portfolio')}
                            </a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href={`#${sectionIds.contact}`} className={`${styles.nav__link} ${currentSection === sectionIds.contact ? styles.active__link : ''}`} >
                                <i className={`uil uil-message ${styles.nav__icon}`}></i> {t('links-sections.contact')}
                            </a>
                        </li>
                    </ul>
                    <i className={`uil uil-times ${styles.nav__close}`} id="nav-close" onClick={toggleMenu}></i>
                </div>

                <div className={styles.nav__btns}>
                    <a className={`${styles.nav__link} ${styles.language__btn}`} onClick={handleClickLanguage}>{language === 'es' ? 'EN' : 'ES'}</a>
                    <i className={`uil uil-moon ${selectedIcon} ${styles.change__theme}`} ref={themeButton} id="theme-button" onClick={handleThemeToggle}></i>

                    <div className={styles.nav__toggle} id="nav-toggle" onClick={toggleMenu}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header