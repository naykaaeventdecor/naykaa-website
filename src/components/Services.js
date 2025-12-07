import styles from "./Services.module.css";

const services = [
    {
        title: "Wedding Planning",
        description: "From intimate ceremonies to grand celebrations, we orchestrate every detail.",
        icon: "💍"
    },
    {
        title: "Corporate Events",
        description: "Professional event management for conferences, launches, and galas.",
        icon: "🤝"
    },
    {
        title: "Birthday Parties",
        description: "Magical themes and decor for birthdays of all ages.",
        icon: "🎂"
    },
    {
        title: "Floral Decor",
        description: "Stunning floral arrangements to elevate any venue. From elegant centerpieces to breathtaking installations.",
        icon: "🌸"
    },
    {
        title: "Graduation Parties",
        description: "From intimate ceremonies to grand celebrations, we orchestrate every detail.",
        icon: "🎓"
    }
];

export default function Services() {
    return (
        <section id="services" className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>Our Services</h2>
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{service.icon}</div>
                            <h3 className={styles.title}>{service.title}</h3>
                            <p className={styles.description}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
