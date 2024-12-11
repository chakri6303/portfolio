import Image from "next/image";
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import Profile from "@/public/image.png";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              Hi, I&apos;m Rama krishna<span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              I&apos;m an <span>Android Developer </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
            Experienced Android Developer skilled in building innovative apps, optimizing performance, and enhancing user experiences.
            I also create interesting self projects on my spare time. Let&apos;s connect!
            </p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              <p className={styles.blackText}>
              Contact me
              </p>
            </StandardButton>
          </Reveal>
        </div>
        {/* <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <Image
            className={styles.profile}
            src={Profile}
            priority
            alt="John Carlo Devera | Frontend Developer"
            width={250}
            height={250}
          />
        </motion.div> */}
      </div>
      <DotGrid />
    </section>
  );
};
