import { SectionTitle } from "../sectionTitle/section-title"
import "./info.scss"
export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages-info">
        <span>🇧🇷 PT-BR - Native Speaker</span>
        <span>🇺🇸 EN - Intermediary</span>
        <span>🇪🇸 ES - Intermediary</span>
      </div>
      <SectionTitle text="Education" />
      <div className="educational-info">
        <span>🎓</span>
        <span>Information Systems Bachelors - Universidade FUMEC</span>
      </div>
    </div>
  )
}