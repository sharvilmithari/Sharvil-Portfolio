"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

const highlights = [
  "Product-Driven Development",
  "Artificial Intelligence Enthusiast",
  "Full-Stack Web Development",
  "Design-Oriented Thinking",
  "Continuous Learning & Innovation",
];

const stats = [
  {
    value: "11+",
    label: "Projects Built",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
    accent: "#4F8CFF",
  },
  {
    value: "1+",
    label: "Year Freelancing",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    accent: "#8AB4FF",
  },
  {
    value: "6+",
    label: "Certifications",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    accent: "#C7D2FE",
  },
  {
    value: "2",
    label: "Live Products",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    accent: "#a78bfa",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">ABOUT</div>
          <h2 className="section-title">Learning by Building. Growing by Creating.</h2>
        </motion.div>

        <div className={styles.aboutGrid}>
          {/* Bio */}
          <motion.div
            className={styles.bio}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >

            <p className={styles.bioText}>
              A Computer Engineering student at JSPM Narhe Technical Campus, Pune.
            </p>

            <p className={styles.bioText}>
              I believe the best way to learn is by building. That&apos;s why I spend my time creating web applications, exploring AI, and experimenting with modern technologies.
            </p>

            <p className={styles.bioText}>
              Every project in this portfolio represents a challenge I took on, a problem I tried to solve, and a step forward in my journey as a developer.
            </p>
          </motion.div>

          {/* Highlights Card */}
          <motion.div
            className={`glass-card ${styles.highlightsCard}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className={styles.highlightsTitle}>WHAT I BUILD</span>
            <ul className={styles.highlightsList}>
              {highlights.map((item) => (
                <li key={item} className={styles.highlightItem}>
                  <span className={styles.highlightDot} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className={styles.statsGrid}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={styles.statCard}
              style={{ "--stat-accent": stat.accent } as React.CSSProperties}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className={styles.statAccent} />
              <div className={styles.statIcon}>{stat.icon}</div>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
