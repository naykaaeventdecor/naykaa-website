import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./about.module.css";

export default function AboutPage() {
    return (
        <main>
            <Header />
            <section className={styles.about}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Our Story</h1>
                    <div className={styles.intro}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Naykaa Event and Decor was born from a spark of inspiration in November of last year.
                            It all started with a family event—a celebration that needed that special touch.
                            As we poured our hearts into decorating for our loved ones, we realized the profound joy
                            that comes from transforming a space into a memory.
                        </p>
                        <p>
                            That single event planted a seed. We saw the potential to bring this same passion and
                            dedication to others. From that moment, we embarked on a journey to build this company
                            from scratch. Driven by creativity and a desire to make every occasion unforgettable,
                            we have grown from a small family project into a dedicated team of women entrepreneurs
                            committed to excellence in event styling.
                        </p>
                    </div>

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
            <Footer />
        </main>
    );
}
