import React, { useRef, useEffect, useContext } from 'react'
import styles from './Home.module.css'
import Typed from 'typed.js'
import { Translation } from '../../context/TranslationContext'

const Home = () => {

    const { t } = useContext(Translation);
    const name = useRef(null);
    const position = useRef(null);

    useEffect(() => {
        const defaultLng = "en";
        const currentLng = localStorage.getItem('i18nextLng');

        const typedStrings = {
          es: ['Hola, Soy Andres'],
          en: ['Hi, I am Andres'],
        };
    
        const typed = new Typed(name.current, {
          strings: typedStrings[currentLng || defaultLng], // Obtener el texto según el idioma seleccionado
          typeSpeed: 100,
          backSpeed: 50,
          loop: true,
        });
    
        return () => {
          typed.destroy();
        };
      }, [t]);
    
    useEffect(() => {
        const typed = new Typed(position.current, {
            strings: ['Frontend', 'Backend'],
            typeSpeed: 50,
            backSpeed: 100,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (

        // <section className="home section" id="home">
            <div className={`${styles.home__container} container grid`}>
                <div className={`${styles.home__content} grid`}>
                    <div className={styles.home__social}>
                        <a href="https://www.linkedin.com/in/abarrientoso/" target="_blank" className={styles.home__social__icon}>
                            <i className="uil uil-linkedin-alt"></i>
                        </a>

                        <a href="https://github.com/abarrientoso/" target="_blank" className={styles.home__social__icon}>
                            <i className="uil uil-github-alt"></i>
                        </a>

                        <a href="https://www.instagram.com/androgueone/" target="_blank" className={styles.home__social__icon}>
                            <i className="uil uil-instagram"></i>
                        </a>
                    </div>

                    <div className={styles.home__img}>
                        <svg className={styles.home__blob} viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0" mask-type="alpha">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                                <image className={styles.home__blob_img} x='12' y="-60" href="./src/assets/img/profile-nobg.png" />
                            </g>
                        </svg>
                    </div>

                    <div className={styles.home__data}>
                        <h1 className={styles.home__title}><span ref={name}></span></h1> 
                        <h3 className={styles.home__subtitle}><span ref={position}></span>Developer</h3>
                        <p className={styles.home__description}>{t('home.description')}</p>
                        <a href="#contact" className="button button--flex">
                        {t('home.button')} <i className="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </div>

                <div className={styles.home__scroll}>
                    <a href="#about" className={`${styles.home__scroll_button} button--flex`}>
                        <i className={`uil uil-mouse-alt ${styles.home__scroll_mouse}`}></i>
                        <span className={styles.home__scroll_name}>
                        {t('home.scroll')}
                        </span>
                        <i className={`uil uil-arrow-down ${styles.home__scroll_arrow}`}></i>
                    </a>
                </div>
            </div>
        // </section>
    )
}

export default Home