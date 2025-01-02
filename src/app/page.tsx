import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { EmailIcon } from "./components/icons/email-icon";
import { Info } from "./components/information/info";
import { SocialBtns } from "./components/social-btns/social_btns";
import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Info />
      <div className="buttons">
        <SocialBtns />
        <a className="btn-primary" href="mailto:andrefco@outlook.com.br">
          Contact Me
          <EmailIcon />
        </a>
      </div>
    </main>
  );
}
