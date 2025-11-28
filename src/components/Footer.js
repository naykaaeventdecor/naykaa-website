import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <p>&copy; {new Date().getFullYear()} Naykaa Event and Decor. All rights reserved.</p>
                    <div className={styles.socials}>
                        <a href="https://www.instagram.com/naykaaeventdecor/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
                        <a href="https://www.facebook.com/share/Z3icGjpS5otCNW3J/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Facebook</a>
                        <a href="https://maps.app.goo.gl/gNsuksLXSw7NtP1z8" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Google</a>
                        <a href="https://www.youtube.com/@naykaaeventdecor" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>YouTube</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}