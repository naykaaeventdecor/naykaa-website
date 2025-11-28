"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function GalleryPage() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/api/gallery-full');
                if (response.ok) {
                    const data = await response.json();
                    setImages(data);
                }
            } catch (error) {
                console.error("Failed to fetch gallery images", error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    // Random size generator
    const getRandomSize = (index) => {
        const sizes = ['small', 'medium', 'large', 'xl'];
        // Use index-based pseudo-random to maintain consistency
        return sizes[index % sizes.length];
    };

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <h1 className={styles.title}>Our Gallery</h1>
                    <p className={styles.subtitle}>
                        Explore our collection of memorable events and beautiful decorations
                    </p>
                </div>

                {loading ? (
                    <div className={styles.loading}>Loading gallery...</div>
                ) : images.length === 0 ? (
                    <div className={styles.empty}>No images found</div>
                ) : (
                    <div className={styles.masonry}>
                        {images.map((image, index) => (
                            <div
                                key={image.id}
                                className={`${styles.card} ${styles[getRandomSize(index)]}`}
                            >
                                <Image
                                    src={image.url}
                                    alt={image.name}
                                    width={400}
                                    height={300}
                                    className={styles.image}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}
