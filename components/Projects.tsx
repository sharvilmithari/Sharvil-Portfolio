"use client";

import { motion, Variants } from "framer-motion";
import styles from "./Projects.module.css";

const projects = [
  {
    number: "01",
    title: "SpendWise",
    subtitle: "Personal Expense Tracker",
    language: "PYTHON",
    description:
      "A full-stack personal finance management application with multi-page navigation, transaction CRUD, and an analytics dashboard for spending pattern visualization.",
    problem:
      "Most expense apps feel cluttered, ad-heavy and break user privacy with cloud-only flows.",
    solution:
      "A clean, dark-themed SaaS-style experience with local data isolation, real-time filtering and a focused analytics view.",
    features: [
      "Authenticated multi-page navigation",
      "Transaction CRUD with categories",
      "Analytics dashboard with charts",
      "Local data storage for privacy",
      "Dark theme with modern UI",
    ],
    techTags: ["Python", "Streamlit", "UI Design", "Data Viz"],
    imageUrl: "/spendwise.png",
    githubUrl: "https://github.com/sharvilmithari/SpendWise",
  },
  {
    number: "02",
    title: "KrishiConnect",
    subtitle: "Access to machinery. Intelligence for better farming.",
    language: "REACT",
    description:
      "An AgriTech platform developed for the Gravity 2026 Competition to solve challenges faced by Indian farmers — limited access to agricultural machinery and lack of proper farming guidance.",
    problem:
      "Small and medium-scale farmers lack access to agricultural machinery and technology-driven farming recommendations.",
    solution:
      "A smart platform to discover, rent, and schedule nearby farming equipment while providing intelligent crop insights.",
    features: [
      "Equipment discovery & rental",
      "Scheduling & booking system",
      "Smart crop insights",
      "Farming recommendations",
      "Technology-driven guidance",
    ],
    techTags: ["React", "AgriTech", "UI/UX", "Tech for Good"],
    imageUrl: "/krishiconnect.png",
    githubUrl: "https://github.com/sharvilmithari/Krishiconnect",
  },
  {
    number: "03",
    title: "TriagePilot AI",
    subtitle: "Automating pharmacovigilance & drug safety",
    language: "PYTHON",
    description:
      "An AI-powered pharmacovigilance platform built for Technovision 2025 (Top 4 out of 120 teams). It automates the processing and prioritization of adverse drug reaction (ADR) reports to improve patient safety.",
    problem:
      "Manual processing of medical safety reports is slow, labor-intensive, and delays the identification of high-priority adverse drug reactions.",
    solution:
      "A platform leveraging NLP and Machine Learning to analyze reports, assign risk scores, and automate prioritization for regulatory compliance.",
    features: [
      "AI/NLP-based report analysis",
      "Automated risk scoring",
      "High-priority case identification",
      "Regulatory compliance tracking",
      "Faster drug safety monitoring",
    ],
    techTags: ["Python", "NLP", "Machine Learning", "AI"],
    imageUrl: "/triagepilot.png",
    githubUrl: "https://github.com/sharvilmithari/TriagePilot",
  },
];

const projectVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">SHOWCASE</div>
          <h2 className="section-title">Things I&apos;ve Built.</h2>
          <p className="section-subtitle">
            Thoughtfully designed. Carefully Built.
          </p>
        </motion.div>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              className={`${styles.projectCard} ${index % 2 === 1 ? styles.reversed : ""}`}
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Visual / Code Preview */}
              <div className={styles.codePreview}>
                {project.imageUrl ? (
                  <div className={styles.imageContainer}>
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className={styles.projectImage}
                    />
                  </div>
                ) : (
                  <div className={styles.codeWindow}>
                    <div className={styles.windowHeader}>
                      <div className={styles.windowDots}>
                        <span className={styles.dotRed} />
                        <span className={styles.dotYellow} />
                        <span className={styles.dotGreen} />
                      </div>
                      <span className={styles.windowLang}>{project.language}</span>
                    </div>
                    <pre className={styles.codeBlock}>
                      <code>{project.code}</code>
                    </pre>
                  </div>
                )}
                <div className={styles.codeTags}>
                  {project.techTags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className={styles.projectInfo}>
                <span className={styles.projectNumber}>PROJECT / {project.number}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectSubtitle}>{project.subtitle}</p>
                <p className={styles.projectDesc}>{project.description}</p>

                <div className={styles.problemSolution}>
                  <div>
                    <span className={styles.label}>PROBLEM</span>
                    <p className={styles.labelText}>{project.problem}</p>
                  </div>
                  <div>
                    <span className={styles.label}>SOLUTION</span>
                    <p className={styles.labelText}>{project.solution}</p>
                  </div>
                </div>

                <ul className={styles.featureList}>
                  {project.features.map((feature) => (
                    <li key={feature} className={styles.featureItem}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--accent-green)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className={styles.projectActions}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.actionPrimary}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
