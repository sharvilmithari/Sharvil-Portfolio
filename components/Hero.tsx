"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Hls from "hls.js";
import styles from "./Hero.module.css";

const VIDEO_SRC = "https://stream.mux.com/r6pXRAJb3005XEEbl1hYU1x01RFJDSn7KQApwNGgAHHbU.m3u8";

const tags = ["Developer", "Designer", "Learner", "Builder"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true });
      hls.loadSource(VIDEO_SRC);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari native HLS support
      video.src = VIDEO_SRC;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }
  }, []);

  return (
    <section id="home" className={styles.hero}>
      {/* Video Background */}
      <div className={styles.videoBg}>
        <video
          ref={videoRef}
          className={styles.bgVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.videoOverlay} />
      </div>

      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Heading */}
          <motion.div variants={itemVariants}>
            <p className={styles.greeting}>Hi, I&apos;m</p>
            <h1 className={styles.name}>Sharvil Mithari.</h1>
          </motion.div>

          <motion.h2 className={styles.tagline} variants={itemVariants}>
            Turning Ideas into <span className="gradient-text">Projects.</span>
          </motion.h2>



          {/* Tags */}
          <motion.div className={styles.tags} variants={containerVariants}>
            {tags.map((tag) => (
              <motion.span key={tag} className="tag-pill" variants={itemVariants} whileHover={{ scale: 1.05 }}>
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/profile.jpg"
              alt="Sharvil Mithari"
              width={420}
              height={500}
              className={styles.profileImg}
              priority
            />
          </div>
        </motion.div>
      </div>


    </section>
  );
}
