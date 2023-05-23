import React, { useState, useContext } from 'react'
import styles from './Skills.module.css'
import { Translation } from '../../context/TranslationContext';

const Skills = () => {
    const {t} = useContext(Translation);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleSkills = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <div>
            <h2 className="section__title">{t('skills.title')}</h2>
            <span className="section__subtitle">{t('skills.subtitle')}</span>

            <div className={`${styles.skills__container} container grid`}>
                <div className={styles.skills__flex}>
                    <div className={`${styles.skills__content} ${activeIndex === 0 ? styles.skills__open : styles.skills__close}`}>
                        <div className={styles.skills__header} onClick={() => toggleSkills(0)}>
                            <i className={`uil uil-brackets-curly ${styles.skills__icon}`}></i>

                            <div>
                                <h1 className={styles.skills__titles}>{t('skills.frontend.title')}</h1>
                                <span className={styles.skills__subtitle}>{t('skills.frontend.subtitle')}</span>
                            </div>

                            <i className={`uil uil-angle-down ${styles.skills__arrow}`}></i>
                        </div>

                        <div className={`${styles.skills__list} grid`}>
                            <div className={styles.skills__data}>
                                <div className={styles.skills__titles}>
                                    <h3 className={styles.skills__name}>HTML</h3>
                                    <span className={styles.skills__number}>95%</span>
                                </div>
                                <div className={styles.skills__bar}>
                                    <span className={`${styles.skills__percentage} ${styles.skills__html}`}></span>
                                </div>
                            </div>

                            <div className={styles.skills__data}>
                                <div className={styles.skills__titles}>
                                    <h3 className={styles.skills__name}>CSS</h3>
                                    <span className={styles.skills__number}>60%</span>
                                </div>
                                <div className={styles.skills__bar}>
                                    <span className={`${styles.skills__percentage} ${styles.skills__css}`}></span>
                                </div>
                            </div>

                            <div className={styles.skills__data}>
                                <div className={styles.skills__titles}>
                                    <h3 className={styles.skills__name}>JavaScript</h3>
                                    <span className={styles.skills__number}>50%</span>
                                </div>
                                <div className={styles.skills__bar}>
                                    <span className={`${styles.skills__percentage} ${styles.skills__js}`}></span>
                                </div>
                            </div>

                            <div className={styles.skills__data}>
                                <div className={styles.skills__titles}>
                                    <h3 className={styles.skills__name}>React</h3>
                                    <span className={styles.skills__number}>30%</span>
                                </div>
                                <div className={styles.skills__bar}>
                                    <span className={`${styles.skills__percentage} ${styles.skills__react}`}></span>
                                </div>
                            </div>

                            <div className={styles.skills__data}>
                                <div className={styles.skills__titles}>
                                    <h3 className={styles.skills__name}>Angular</h3>
                                    <span className={styles.skills__number}>30%</span>
                                </div>
                                <div className={styles.skills__bar}>
                                    <span className={`${styles.skills__percentage} ${styles.skills__angular}`}></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.skills__content} ${activeIndex === 1 ? styles.skills__open : styles.skills__close}`}>
                        <div className={styles.skills__header} onClick={() => toggleSkills(1)}>
                            <i className={`uil uil-server-network ${styles.skills__icon}`}></i>

                            <div>
                                <h1 className={styles.skills__titles}>{t('skills.backend.title')}</h1>
                                <span className={styles.skills__subtitle}>{t('skills.frontend.subtitle')}</span>
                            </div>

                            <i className={`uil uil-angle-down ${styles.skills__arrow}`}></i>
                        </div>

                        <div className={`${styles.skills__list} grid`}>
                            <div className={styles.skills__data}>
                                <div className={styles.skills__titles}>
                                    <h3 className={styles.skills__name}>PHP</h3>
                                    <span className={styles.skills__number}>40%</span>
                                </div>
                                <div className={styles.skills__bar}>
                                    <span className={`${styles.skills__percentage} ${styles.skills__php}`}></span>
                                </div>
                            </div>

                            <div className={styles.skills__data}>
                                <div className={styles.skills__titles}>
                                    <h3 className={styles.skills__name}>Java</h3>
                                    <span className={styles.skills__number}>50%</span>
                                </div>
                                <div className={styles.skills__bar}>
                                    <span className={`${styles.skills__percentage} ${styles.skills__java}`}></span>
                                </div>
                            </div>

                            <div className={styles.skills__data}>
                                <div className={styles.skills__titles}>
                                    <h3 className={styles.skills__name}>Firebase</h3>
                                    <span className={styles.skills__number}>50%</span>
                                </div>
                                <div className={styles.skills__bar}>
                                    <span className={`${styles.skills__percentage} ${styles.skills__firebase}`}></span>
                                </div>
                            </div>

                            <div className={styles.skills__data}>
                                <div className={styles.skills__titles}>
                                    <h3 className={styles.skills__name}>Python</h3>
                                    <span className={styles.skills__number}>20%</span>
                                </div>
                                <div className={styles.skills__bar}>
                                    <span className={`${styles.skills__percentage} ${styles.skills__python}`}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills