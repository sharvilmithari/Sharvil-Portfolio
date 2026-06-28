import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className={styles.aboutPage}>
        <div className="container">
          <div className="section-badge">ABOUT ME</div>
          <h1 className="section-title">My Journey.</h1>
          <p className={styles.passage}>
            Computer Engineering student crafting modern web apps, AI-powered tools and
            intuitive digital experiences using <strong>Next.js</strong>,{" "}
            <strong>Python</strong> and <strong>Generative AI</strong>.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
