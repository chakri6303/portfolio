import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
            I am Medisetti Sesha Venkata Rama Krishna, a B.Tech graduate in Electronics and Communication Engineering.
              <br/><br/>
              With expertise in Android development, I&apos;ve built impactful mobile apps, excelling in frontend design and backend integration. My technical skills include Java, XML, Firebase, and Android SDK, with experience in modern APIs to optimize app functionality.</p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            I&apos;ve developed projects like a Blood Donation App and Public News App, showcasing responsive UI/UX and real-time features. My passion for problem-solving and innovation drives me to create technology solutions that make a difference.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              When I&apos;m not coding, I enjoy digital painting. 
              I believe that maintaining a healthy work-life balance is crucial for staying productive and motivated.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to learn and grow as a developer. 
              If you&apos;re interested in working together or have any questions, please don&apos;t hesitate to get in touch!
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
