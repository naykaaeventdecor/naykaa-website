import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <video
                autoPlay
                loop
                muted
                playsInline
                className={styles.videoBackground}
            >
                <source src="/naykaa_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.content}`}>
                <h1 className={styles.title}>
                    Naykaa Event and Decor
                </h1>
                <p className={styles.subtitle}>
                    Transforming moments into memories.
                </p>
                <div className={styles.actions}>
                    <a href="#contact" className="btn btn-primary">Book Now</a>
                    <a href="/gallery" className={styles.secondaryBtn}>View Gallery</a>
                </div>
            </div>
        </section>
    );
}
