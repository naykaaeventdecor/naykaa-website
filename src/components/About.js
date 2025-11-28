import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.title}>Our Story</h2>
                <p className={styles.intro}>
                    At Naykaa Event and Decor, we believe in the power of women's entrepreneurship to transform the event industry.
                    Founded with a passion for creativity and a commitment to excellence, we bring a unique touch to every celebration.
                </p>

                <div className={styles.profiles}>
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            {/* Placeholder for Priyank Gupta */}
                            <div style={{ width: '100%', height: '100%', background: '#eee' }}></div>
                        </div>
                        <h3 className={styles.name}>Priyank Gupta</h3>
                        <div className={styles.role}>Co-Founder</div>
                        <p className={styles.bio}>
                            With a keen eye for detail and a heart full of creativity, Priyank brings visionary designs to life.
                            Her dedication to crafting unforgettable experiences is the soul of Naykaa.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            {/* Placeholder for Neha Takola */}
                            <div style={{ width: '100%', height: '100%', background: '#eee' }}></div>
                        </div>
                        <h3 className={styles.name}>Neha Takola</h3>
                        <div className={styles.role}>Co-Founder</div>
                        <p className={styles.bio}>
                            Neha combines strategic planning with artistic flair to ensure every event runs seamlessly.
                            Her leadership and innovative approach drive the excellence that Naykaa is known for.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
