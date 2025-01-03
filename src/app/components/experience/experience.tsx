import { getTechStackList } from "@/data/get-tech-stack-list";
import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss";
import { TechItem } from "./tech-item/tech-item";
export function Experience() {
  const techStackList = getTechStackList();

  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>Software developer, with working experience in Front-end and Back-end,
        focusing on full stack software development, I have been working on personal
        projects that have allowed me to apply and deepen my knowledge in specific technologies,
        such as React, Node.js.
      </p>
      <div className="tech">
        <SectionTitle text="Tech Stack" />
        <div className="stack">
          {techStackList.map((tech) => (
            <TechItem key={tech.name} {...tech} />
          ))}
        </div>
      </div>
    </div>
  )
}