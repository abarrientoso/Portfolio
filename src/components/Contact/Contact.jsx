import React, { useContext, useRef, useState } from 'react'
import styles from './Contact.module.css'
import { Translation } from '../../context/TranslationContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const { t } = useContext(Translation);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        project: '',
        message: ''
    });

    const validateForm = () => {
        let isValid = true;
        const errors = {};

        // Validar el campo de nombre
        if (formData.name.trim() === '') {
            errors.name = ('error.name');
            isValid = false;
        }

        // Validar el campo de email
        if (formData.email.trim() === '') {
            errors.email = ('error.email');
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = ('error.email');
            isValid = false;
        }

        // Validar el campo de proyecto
        if (formData.project.trim() === '') {
            // errors.project = 'Por favor, ingresa el nombre de tu proyecto';
            errors.project = ('error.project');
            isValid = false;
        }

        // Validar el campo de mensaje
        if (formData.message.trim() === '') {
            // errors.message = 'Por favor, ingresa un mensaje';
            errors.message = ('error.message');
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            project: '',
            message: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (validateForm()) {
            emailjs.sendForm('service_okrbkkb', 'template_r6hhvk2', form.current, '9MPH3gxC0sVQcLpan')
                .then(() => {
                    resetForm();
                    setShowSuccessMessage(true);
                    setTimeout(() => setShowSuccessMessage(false), 5000);
                })
        }
    };


    return (
        <div>
            <h2 className="section__title">{t("contact.title")}</h2>
            <span className="section__subtitle">{t("contact.subtitle")}</span>

            <div className={`${styles.contact__container} container grid`}>
                <div>
                    <div className={styles.contact__information}>
                        <i className={`uil uil-phone ${styles.contact__icon}`}></i>

                        <div>
                            <h3 className={styles.contact__title}>{t("contact.call")}</h3>
                            <span className={styles.contact__subtitle}>+506 86096187</span>
                        </div>
                    </div>

                    <div className={styles.contact__information}>
                        <i className={`uil uil-envelope ${styles.contact__icon}`}></i>

                        <div>
                            <h3 className={styles.contact__title}>{t("contact.emailMe")}</h3>
                            <span className={styles.contact__subtitle}>andresjbo20@gmail.com</span>
                        </div>
                    </div>

                    <div className={styles.contact__information}>
                        <i className={`uil uil-map-marker ${styles.contact__icon}`}></i>

                        <div>
                            <h3 className={styles.contact__title}>{t("contact.location")}</h3>
                            <span className={styles.contact__subtitle}>San José, Desamparados - Costa Rica</span>
                        </div>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className={`${styles.contact__form}`}>
                    <div className={`${styles.contact__inputs}`}>
                        <div className={`${styles.contact__content} form__mb`}>
                            <label htmlFor="name" className={styles.contact__label}>{t("contact.form.name")}</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className={styles.contact__input} />
                        </div>
                        {formErrors.message && <span className='form__errors'>{t(formErrors.name)}</span>}
                        <div className={`${styles.contact__content} form__mb`}>
                            <label htmlFor="email" className={styles.contact__label}>{t("contact.form.email")}</label>
                            <input type="email" name='email' value={formData.email} onChange={handleChange} className={styles.contact__input} />
                        </div>
                        {formErrors.message && <span className='form__errors'>{t(formErrors.email)}</span>}
                    </div>
                    <div className={`${styles.contact__content} form__mb`}>
                        <label htmlFor="project" className={styles.contact__label}>{t("contact.form.project")}</label>
                        <input type="text" name='project' value={formData.project} onChange={handleChange} className={styles.contact__input} />
                    </div>
                    {formErrors.message && <span className='form__errors'>{t(formErrors.project)}</span>}
                    <div className={`${styles.contact__content} form__mb`}>
                        <label htmlFor="message" className={styles.contact__label}>{t("contact.form.message")}</label>
                        <textarea name="message" cols="0" rows="7" value={formData.message} onChange={handleChange} className={styles.contact__input}></textarea>
                    </div>
                    {formErrors.message && <span className='form__errors'>{t(formErrors.message)}</span>}
                    {showSuccessMessage && <span className='form__sent'>{t('success')}</span>}

                    <div>
                        <button type='submit' href="#" className="button button--flex">
                            {t("contact.form.button")}
                            <i className="uil uil-message button__icon"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact