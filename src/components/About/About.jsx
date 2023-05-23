import React, { useContext, useEffect, useState } from 'react';
import styles from './About.module.css';
import { Translation } from '../../context/TranslationContext';

const About = () => {
    const { t, language } = useContext(Translation);

    return (
        <div>
            <h2 className="section__title">{t('about.title')}</h2>
            <span className="section__subtitle">{t('about.subtitle')}</span>

            <div className={`${styles.about__container} grid`}>
                <img src="./src/assets/img/profile.jpg" alt="profile_photo" className={styles.about__img} />

                <div className={styles.about__data}>
                    <p className={styles.about__description}>
                        {t('about.description')}
                    </p>

                    <div className={styles.about__info}>
                        <div>
                            <span className={styles.about__info_title}>01+</span>
                            {language === 'en' ? <span className={styles.about__info_name}>{t('about.year')} <br /> {t('about.experience')}</span>
                                : <span className={styles.about__info_name}>{t('about.year')}<br /> {t('about.experience')}  </span>}
                        </div>

                        <div>
                            <span className={styles.about__info_title}>15+</span>
                            {language === 'en' ? <span className={styles.about__info_name}>{t('about.completed')} <br /> {t('about.projects')}</span>
                                : <span className={styles.about__info_name}>{t('about.projects')}  <br /> {t('about.completed')}</span>}
                        </div>

                        <div>
                            <span className={styles.about__info_title}>2+</span>
                            {language === 'en' ? <span className={styles.about__info_name}>{t('about.companies')} <br /> {t('about.worked')}</span>
                                : <span className={styles.about__info_name}>{t('about.companies')}  <br /> {t('about.worked')}</span>}
                        </div>
                    </div>

                    <div className={styles.about__buttons}>
                        <a download="" href="./src/assets/pdf/Andres_Barrientos_Developer.pdf" className="button button--flex">
                            {t('about.button')} <i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About