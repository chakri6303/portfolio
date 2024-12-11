import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "BAtalks Pvt Ltd",
    position: "Fullstack Developer",
    time: "November 2024 - Present",
    location: "Hyderabad,Telangana",
    description:
      "Create functional, high-level, dynamic and reusable components based on mock-up given using Flask. Coordinated on team for QA, bug fixes, features and code refactoring.",
    tech: [
      "Flask",
      "CSS",
      "HTML",
      "Javascript",
      "Python",
      "Git",
      "Github",
    ],
  },
  {
    title: "Tefologic",
    position: "Mobile Android Developer",
    time: "March 2024 - June 2024",
    location: "Remote",
    description:
      "I help build and scale core java functions and created test units. Contributed to the development of innovative mobile applications, enhancing user experiences by implementing new features",
    tech: ["Java", "XML", "API", "Git", "Firebase","Androidsdk"],
  },
  {
    title: "Google",
    position: "Android Developer Intern",
    time: "Apr 2024 - Jun 2024",
    location: "Remote",
    description:
      "Engaged in high-impact Android app development projects, collaborating closely with teams to deliver innovative solutions. Demonstrated strong problem-solving skills and contributed to technical innovations.",
      tech: ["Java", "XML", "API", "Git", "Firebase","Androidsdk"],
  },
  {
    title: "Codeway",
    position: "Android Developer Intern",
    time: "Apr 2024 - Apr 2024",
    location: "Remote",
    description:
      "Contributed to multiple mobile app development projects, actively engaging in code reviews and collaborating effectively with cross-functional teams. Engaged in continuous learning through training sessions on the latest technologies.",
      tech: ["Java", "XML", "API", "Git", "Firebase","Androidsdk"],
  },
  // {
  //   title: "Simple Cloudology",
  //   position: "React Developer",
  //   time: "Jan 2020 - April 2021",
  //   location: "Sheridan, Wyoming",
  //   description:
  //     "Worked as a developer and created dynamic reusable components, integrate calendly, messaging functionality and project management features.",
  //   tech: [
  //     "React",
  //     "Nextjs",
  //     "Sytled Components",
  //     "Firebase Auth",
  //     "Websockets",
  //     "Calendly",
  //     "Git",
  //     "Github",
  //   ],
  // },
  // {
  //   title: "IFormat Logic",
  //   position: "Fullstack Developer",
  //   time: "Aug 2020 - Dec 2020",
  //   location: "Palanginan, Zambales",
  //   description:
  //     "Managed and created complex projects from start to finish and also collaborated with other developers. Translated requirements into polished, high-level web application.",
  //   tech: ["Vuejs", "Laravel", "Tailwind", "Git", "Github"],
  // },
];
