"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <p className={styles.copyright}>
          © {currentYear} Sharvil Mithari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
