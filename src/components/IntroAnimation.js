"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./IntroAnimation.module.css";
import { useEffect, useState } from "react";

export default function IntroAnimation({ onAnimationStart }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onAnimationStart) onAnimationStart();
        }, 2500); // Wait 2.5s before starting the transition

        return () => clearTimeout(timer);
    }, [onAnimationStart]);

    if (!isVisible) return null;

    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className={styles.logoWrapper}
                layoutId="logo-container"
                transition={{ duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] }}
            >
                <Image
                    src="/logo.png"
                    alt="Naykaa Event and Decor"
                    width={250}
                    height={250}
                    className={styles.logo}
                    priority
                />
            </motion.div>
        </motion.div>
    );
}
