import { SectionTitle } from "../sectionTitle/section-title"
import "./info.scss"
export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages-info">
        <span>Portuguese - Native Speaker</span>
        <span>English - Intermediary</span>
        <span>Spanish - Intermediary</span>
      </div>
      <SectionTitle text="Education" />
      <div className="educational-info">
        <span>🎓</span>
        <span>Information Systems Bachelors - Universidade FUMEC</span>
      </div>
    </div>
  )
}