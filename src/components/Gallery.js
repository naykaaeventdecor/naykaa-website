"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

export default function Gallery() {
    const [images, setImages] = useState([]);
    const [isHovered, setIsHovered] = useState(false);

    // Touch handling refs
    const touchStart = useRef(0);
    const lastTouch = useRef(0);

    // Animation refs
    const trackRef = useRef(null);
    const requestRef = useRef();
    const scrollPosRef = useRef(0);
    const speedRef = useRef(1); // Pixels per frame

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/api/gallery');
                if (response.ok) {
                    const data = await response.json();
                    setImages(data);
                }
            } catch (error) {
                console.error("Failed to fetch gallery images", error);
            }
        };

        fetchImages();
    }, []);

    // Keep isHovered in a ref for the animation loop
    const isHoveredRef = useRef(isHovered);
    useEffect(() => {
        isHoveredRef.current = isHovered;
    }, [isHovered]);

    useEffect(() => {
        let animationFrameId;

        const animate = () => {
            if (!trackRef.current) return;

            // Use ref for current hover state
            if (!isHoveredRef.current) {
                scrollPosRef.current -= speedRef.current;
            }

            const trackWidth = trackRef.current.scrollWidth;
            const halfWidth = trackWidth / 2;

            // Reset position for infinite loop
            if (Math.abs(scrollPosRef.current) >= halfWidth) {
                scrollPosRef.current = 0;
            }
            // Handle positive scroll (manual prev button)
            if (scrollPosRef.current > 0) {
                scrollPosRef.current = -halfWidth;
            }

            trackRef.current.style.transform = `translateX(${scrollPosRef.current}px)`;
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [images.length]);

    const handlePrev = () => {
        const itemWidth = 400 + 24; // Width + gap (approx 1.5rem = 24px)
        scrollPosRef.current += itemWidth;
    };

    const handleNext = () => {
        const itemWidth = 400 + 24;
        scrollPosRef.current -= itemWidth;
    };

    const handleTouchStart = (e) => {
        setIsHovered(true);
        touchStart.current = e.touches[0].clientX;
        lastTouch.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        const currentTouch = e.touches[0].clientX;
        const delta = currentTouch - lastTouch.current;
        scrollPosRef.current += delta;
        lastTouch.current = currentTouch;
    };

    const handleTouchEnd = () => {
        setIsHovered(false);
    };

    if (images.length === 0) return null;

    // Duplicate images for infinite loop
    const carouselImages = [...images, ...images];

    return (
        <section id="gallery" className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>Our Work</h2>
            </div>
            <div
                className={styles.carouselContainer}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className={styles.track}
                    ref={trackRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {carouselImages.map((src, index) => (
                        <div key={`${src}-${index}`} className={styles.item}>
                            <Image
                                src={src}
                                alt={`Event Gallery ${index + 1}`}
                                width={400}
                                height={300}
                                className={styles.image}
                            />
                        </div>
                    ))}
                </div>

                <button
                    className={`${styles.navButton} ${styles.prevButton}`}
                    onClick={handlePrev}
                    aria-label="Previous image"
                >
                    ←
                </button>
                <button
                    className={`${styles.navButton} ${styles.nextButton}`}
                    onClick={handleNext}
                    aria-label="Next image"
                >
                    →
                </button>
            </div>
        </section>
    );
}
