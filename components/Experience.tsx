"use client";

import { motion } from "framer-motion";
import styles from "./Experience.module.css";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Self-Employed",
    period: "Jan 2026 — Apr 2026 | Pune",
    description:
      "Building production-quality websites and landing pages for real clients. Delivering conversion-focused designs, responsive layouts, and modern UI/UX experiences using HTML, CSS, JavaScript, and React.",
    highlights: [
      "Designed and developed a responsive business website for Cars Guru Pune, a pre-owned car dealership",
      "Delivered 2+ client projects with full ownership",
      "Built business landing pages optimizing for conversions",
      "Managed client communication and project timelines",
    ],
  },
  {
    role: "Freelancer",
    company: "Self-Taught / Academic Projects",
    period: "2024 — Present",
    description:
      "Exploring the intersection of AI and web development through self-directed projects. Building AI-powered tools using Python, Streamlit, and LLM APIs while deepening frontend skills with Next.js and React.",
    highlights: [
      "Delivered 4+ freelancing projects till now",
      "Integrated LLM APIs for generative AI applications",
      "Developed portfolio with Framer Motion animations",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">EXPERIENCE</div>
          <h2 className="section-title">Where I&apos;ve worked.</h2>
          <p className="section-subtitle">
            My journey in building real products — from freelance to personal exploration.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              className={`glass-card ${styles.timelineCard}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={styles.cardTop}>
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                </div>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <p className={styles.expDesc}>{exp.description}</p>
              <ul className={styles.expHighlights}>
                {exp.highlights.map((hl) => (
                  <li key={hl} className={styles.expHighlight}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-blue)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {hl}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
