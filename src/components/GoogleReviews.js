import styles from "./GoogleReviews.module.css";

// Sample reviews - Replace these with your actual Google reviews
const reviews = [
    {
        id: 1,
        author: "Sarah M.",
        rating: 5,
        date: "2 weeks ago",
        text: "Absolutely fantastic service! Naykaa Event and Decor made our wedding day magical. The attention to detail was incredible, and the team was so professional. Highly recommend!",
        initials: "SM"
    },
    {
        id: 2,
        author: "Michael Johnson",
        rating: 5,
        date: "1 month ago",
        text: "We hired Naykaa for our corporate event and they exceeded all expectations. The decorations were stunning and everything was delivered on time. Will definitely use them again!",
        initials: "MJ"
    },
    {
        id: 3,
        author: "Priya Patel",
        rating: 5,
        date: "3 months ago",
        text: "Best event decorators in the area! They transformed our venue into a dream space. The team was creative, responsive, and a pleasure to work with.",
        initials: "PP"
    }
];

const overallRating = 5.0;
const totalReviews = 12;

export default function GoogleReviews() {
    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
                ★
            </span>
        ));
    };

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 272 92'%3E%3Cpath fill='%234285F4' d='M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z'/%3E%3Cpath fill='%23EA4335' d='M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z'/%3E%3Cpath fill='%23FBBC05' d='M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z'/%3E%3Cpath fill='%234285F4' d='M225 3v65h-9.5V3h9.5z'/%3E%3Cpath fill='%2334A853' d='M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z'/%3E%3Cpath fill='%23EA4335' d='M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z'/%3E%3C/svg%3E"
                        alt="Google"
                        className={styles.googleLogo}
                    />
                    <div className={styles.ratingBox}>
                        <div className={styles.ratingNumber}>{overallRating}</div>
                        <div className={styles.stars}>{renderStars(5)}</div>
                        <div className={styles.reviewCount}>{totalReviews} reviews</div>
                    </div>
                </div>

                <div className={styles.reviewsGrid}>
                    {reviews.map((review) => (
                        <div key={review.id} className={styles.reviewCard}>
                            <div className={styles.reviewHeader}>
                                <div className={styles.avatar}>{review.initials}</div>
                                <div className={styles.authorInfo}>
                                    <div className={styles.authorName}>{review.author}</div>
                                    <div className={styles.reviewDate}>{review.date}</div>
                                </div>
                            </div>
                            <div className={styles.reviewStars}>
                                {renderStars(review.rating)}
                            </div>
                            <p className={styles.reviewText}>{review.text}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.footer}>
                    <a
                        href="https://www.google.com/search?q=Naykaa+Event+and+Decor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.viewAllButton}
                    >
                        View all Google reviews
                    </a>
                    <a
                        href="https://g.page/r/YOUR_PLACE_ID/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.writeReviewButton}
                    >
                        Write a review
                    </a>
                </div>
            </div>
        </section>
    );
}
