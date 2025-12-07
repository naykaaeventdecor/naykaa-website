"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.logo}
                    layoutId="logo-container"
                    transition={{ duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] }}
                >
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Naykaa Event and Decor"
                            width={60}
                            height={60}
                            className={styles.logoImage}
                        />
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <motion.nav
                    className={styles.nav}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/about" className={styles.link}>About Us</Link>
                    <Link href="/#services" className={styles.link}>Services</Link>
                    <Link href="/gallery" className={styles.link}>Gallery</Link>
                    <Link href="/#contact" className={styles.link}>Contact</Link>
                </motion.nav>

                {/* Hamburger Button */}
                <button
                    className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className={styles.mobileMenu}
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <Link href="/" className={styles.mobileLink} onClick={closeMenu}>Home</Link>
                            <Link href="/about" className={styles.mobileLink} onClick={closeMenu}>About Us</Link>
                            <Link href="/#services" className={styles.mobileLink} onClick={closeMenu}>Services</Link>
                            <Link href="/gallery" className={styles.mobileLink} onClick={closeMenu}>Gallery</Link>
                            <Link href="/#contact" className={styles.mobileLink} onClick={closeMenu}>Contact</Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
