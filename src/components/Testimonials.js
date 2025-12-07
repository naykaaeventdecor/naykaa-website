"use client";

import { useState } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        event: "Wedding Reception",
        text: "Naykaa Event and Decor transformed our wedding into a fairytale! Every detail was perfect, from the stunning floral arrangements to the elegant table settings. They truly brought our vision to life.",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        event: "Corporate Event",
        text: "Professional, creative, and absolutely reliable. The team at Naykaa made our company's annual gala a huge success. Our guests couldn't stop talking about the beautiful decorations!",
        rating: 5
    },
    {
        id: 3,
        name: "Priya Patel",
        event: "Birthday Celebration",
        text: "I was blown away by their attention to detail and creativity. They took my ideas and elevated them beyond my expectations. The birthday party was magical, and I have Naykaa to thank for that!",
        rating: 5
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const current = testimonials[currentIndex];

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>What Our Clients Say</h2>
                <div className={styles.testimonialContainer}>
                    <button
                        className={`${styles.navButton} ${styles.prev}`}
                        onClick={prevTestimonial}
                        aria-label="Previous testimonial"
                    >
                        ‹
                    </button>

                    <div className={styles.testimonial}>
                        <div className={styles.stars}>
                            {[...Array(current.rating)].map((_, i) => (
                                <span key={i} className={styles.star}>★</span>
                            ))}
                        </div>
                        <p className={styles.text}>&quot;{current.text}&quot;</p>
                        <div className={styles.author}>
                            <h4 className={styles.name}>{current.name}</h4>
                            <p className={styles.event}>{current.event}</p>
                        </div>
                    </div>

                    <button
                        className={`${styles.navButton} ${styles.next}`}
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                    >
                        ›
                    </button>
                </div>

                <div className={styles.dots}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
