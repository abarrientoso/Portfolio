import React, { useContext } from 'react'
import styles from './Footer.module.css'
import { Translation } from '../../context/TranslationContext'

const Footer = () => {
    const {t} = useContext(Translation);
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__bg}>
            <div className={`${styles.footer__container} container grid`}>
                <div>
                    <h1 className={styles.footer__title}>Andres</h1>
                    <span className={styles.footer__subtitle}>{t("footer.position")}</span>
                </div>

                <ul className={styles.footer__links}>
                    <li>
                        <a href="#home" className={styles.footer__link}>{t("links-sections.home")}</a>
                    </li>
                    <li>
                        <a href="#about" className={styles.footer__link}>{t("links-sections.about")}</a>
                    </li>
                    <li>
                        <a href="#portfolio" className={styles.footer__link}>{t("links-sections.portfolio")}</a>
                    </li>
                    <li>
                        <a href="#contact" className={styles.footer__link}>{t("links-sections.contact")}</a>
                    </li>
                </ul>

                <div className={styles.footer__socials}>
                    <a href="https://www.linkedin.com/in/abarrientoso/" target="_blank" className={styles.footer__social}>
                        <i className="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://github.com/abarrientoso/" target="_blank" className={styles.footer__social}>
                        <i className="uil uil-github-alt"></i>
                    </a>

                    <a href="https://www.instagram.com/androgueone/" target="_blank" className={styles.footer__social}>
                        <i className="uil uil-instagram"></i>
                    </a>
                </div>
            </div>

            <p className={styles.footer__copy}>&#169; {t("footer.copy")}</p>
        </div>
    </footer>
  )
}

export default Footer