import React, { useState, useContext } from 'react'
import styles from './Qualification.module.css'
import { Translation } from '../../context/TranslationContext'

const Qualification = () => {
    const {t} = useContext(Translation);
    const [activeTab, setActiveTab] = useState('#education');

    const handleTabClick = (target) => {
        setActiveTab(target);
    };

    return (
        <div className={`${styles.qualification}`} id="qualification">
            <h2 className="section__title">{t("qualification.title")}</h2>
            <span className="section__subtitle">{t("qualification.subtitle")}</span>

            <div className="container qualification__container">
                <div className={styles.qualification__tabs}>
                    <div className={`${styles.qualification__button} button--flex ${activeTab === '#education' ? styles.active__link : ''}`}  onClick={() => handleTabClick('#education')} data-target="#education">
                        <i className={`uil uil-graduation-cap ${styles.qualification__icon}`}></i>
                        {t("qualification.education")}
                    </div>
                    <div className={`${styles.qualification__button} button--flex ${activeTab === '#work' ? styles.active__link : ''}`} onClick={() => handleTabClick('#work')} data-target="#work">
                        <i className={`uil uil-briefcase-alt ${styles.qualification__icon}`}></i>
                        {t("qualification.work")}
                    </div>
                </div>

                <div className={styles.qualification__sections}>
                    <div className={`qualification__content ${activeTab === '#education' ? styles.qualification__active : ''}`} data-content id="education">
                        <div className={styles.qualification__data}>
                            <div>
                                <h3 className={styles.qualification__title}>{t("qualification.education1.cs")}</h3>
                                <span className={styles.qualification__subtitle}>{t("qualification.education1.university")}</span>
                                <div className={styles.qualification__calendar}>
                                    <i className="uil uil-calendar-alt"></i> {t("qualification.education1.date")}
                                </div>
                            </div>

                            <div>
                                <span className={styles.qualification__rounder}></span>
                                <span className={styles.qualification__line}></span>
                            </div>
                        </div>

                        <div className={styles.qualification__data}>
                            <div></div>

                            <div>
                                <span className={styles.qualification__rounder}></span>
                            </div>

                            <div>
                                <h3 className={styles.qualification__title}>{t("qualification.education2.wd")}</h3>
                                <span className={styles.qualification__subtitle}>{t("qualification.education2.university")}</span>
                                <div className={styles.qualification__calendar}>
                                    <i className="uil uil-calendar-alt"></i> {t("qualification.education2.date")}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`qualification__content ${activeTab === '#work' ? styles.qualification__active : ''}`} data-content id="work">
                        <div className={styles.qualification__data}>
                            <div>
                                <h3 className={styles.qualification__title}>{t("qualification.job2.wd")}</h3>
                                <span className={styles.qualification__subtitle}>{t("qualification.job2.company")}</span>
                                <div className={styles.qualification__calendar}>
                                    <i className="uil uil-calendar-alt"></i> {t("qualification.job2.date")}
                                </div>
                            </div>

                            <div>
                                <span className={styles.qualification__rounder}></span>
                                <span className={styles.qualification__line}></span>
                            </div>
                        </div>

                        <div className={styles.qualification__data}>
                            <div></div>

                            <div>
                                <span className={styles.qualification__rounder}></span>
                            </div>

                            <div>
                                <h3 className={styles.qualification__title}>{t("qualification.job1.wd")}</h3>
                                <span className={styles.qualification__subtitle}>{t("qualification.job1.company")}</span>
                                <div className={styles.qualification__calendar}>
                                    <i className="uil uil-calendar-alt"></i> {t("qualification.job1.date")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Qualification