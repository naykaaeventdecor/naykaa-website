"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Header.module.css";

export default function Header() {
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
            </div>
        </header>
    );
}
