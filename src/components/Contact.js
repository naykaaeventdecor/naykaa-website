import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./Contact.module.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: null
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: null });

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setStatus({
                submitting: false,
                success: false,
                error: 'EmailJS configuration missing. Please check environment variables.'
            });
            console.error('EmailJS env vars missing');
            return;
        }

        const templateParams = {
            title: 'New Inquiry from Website',
            name: formData.name,
            from_name: formData.name,
            email: formData.email,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Naykaa Event and Decor',
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            setStatus({ submitting: false, success: true, error: null });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                submitting: false,
                success: false,
                error: 'Failed to send message. Please try again later.'
            });
        }
    };

    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>Get in Touch</h2>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h3 className={styles.subheading}>Contact Information</h3>
                        <p>Ready to plan your dream event? Reach out to us!</p>
                        <ul className={styles.list}>
                            <li>📍 Novi, MI</li>
                            <li>📞 +1 (248) 325-8885</li>
                            <li>✉️ NaykaaEventDecor@gmail.com</li>
                        </ul>
                    </div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                className={styles.input}
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className={styles.input}
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className={styles.textarea}
                                placeholder="Tell us about your event"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={status.submitting}>
                            {status.submitting ? 'Sending...' : 'Send Message'}
                        </button>
                        {status.success && <p className={styles.successMessage}>Message sent successfully!</p>}
                        {status.error && <p className={styles.errorMessage}>{status.error}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}
