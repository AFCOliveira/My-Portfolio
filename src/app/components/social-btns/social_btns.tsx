import { GitIcon } from "../icons/git-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import "./social-btns.scss";
export function SocialBtns() {
  return (
    <div className="social">
      <a href="https://www.linkedin.com/in/andr%C3%A9-oliveira-2028a5189/">
        <LinkedinIcon />
      </a>
      <a href="https://github.com/AFCOliveira">
        <GitIcon />
      </a>
    </div>
  )
}