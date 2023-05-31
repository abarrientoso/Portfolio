import React, { useContext } from 'react'
import styles from './Portfolio.module.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Translation } from '../../context/TranslationContext';

const Portfolio = () => {
    const { t } = useContext(Translation)
    return (
        <div>
            <h2 className="section__title">{t("portfolio.title")}</h2>
            <span className="section__subtitle">{t("portfolio.subtitle")}</span>

            <Swiper
                className='container'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >

                <div class={`${styles.portfolio__container} swiper mySwiper"`}>
                    <SwiperSlide>
                        <div className={`${styles.portfolio__content} grid`}>
                            <img src="./img/criptos.png" alt="project_1" className={styles.portfolio__img} />

                            <div className={styles.portfolio__data}>
                                <h3 className={styles.portfolio__title}>{t("portfolio.portfolio1.title")}</h3>
                                <p className={styles.portfolio__description}>
                                    {t("portfolio.portfolio1.description")}
                                    <a href="https://min-api.cryptocompare.com/" className={styles.api__link}> CryptoCompare </a>
                                    {t("portfolio.portfolio1.description2")}
                                </p>
                                <a href="https://cryptcurrencyexchange.netlify.app/" target='_blank' className={`button button--flex button--small ${styles.portfolio__button}`}>
                                    {t("portfolio.portfolio1.button")} <i className={`uil uil-arrow-right ${styles.button__icon} button__icon`}></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div className={`${styles.portfolio__content} grid`}>
                            <img src="./img/chat.png" alt="project_2" className={styles.portfolio__img} />

                            <div className={styles.portfolio__data}>
                                <h3 className={styles.portfolio__title}>{t("portfolio.portfolio2.title")}</h3>
                                <p className={styles.portfolio__description}>
                                    {t("portfolio.portfolio2.description")}
                                    <a href="https://platform.openai.com/overview" target='_blank' className={styles.api__link}> API </a>
                                    {t("portfolio.portfolio2.description2")}
                                </p>
                                <a href="https://chatgpt-api.vercel.app/" target='_blank' className={`button button--flex button--small ${styles.portfolio__button}`}>
                                    {t("portfolio.portfolio2.button")} <i className={`uil uil-arrow-right ${styles.button__icon} button__icon`}></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div className={`${styles.portfolio__content} grid`}>
                            <img src="./img/veterinaria.png" alt="project_3" className={styles.portfolio__img} />

                            <div className={styles.portfolio__data}>
                                <h3 className={styles.portfolio__title}>{t("portfolio.portfolio3.title")}</h3>
                                <p className={styles.portfolio__description}>{t("portfolio.portfolio3.description")}</p>
                                <a href="https://veterinaria-react16.netlify.app/" target='_blank' className={`button button--flex button--small ${styles.portfolio__button}`}>
                                    {t("portfolio.portfolio3.button")} <i className={`uil uil-arrow-right ${styles.button__icon} button__icon`}></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    )
}

export default Portfolio