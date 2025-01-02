import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="header">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div>
          <h1>Hi, i´m André</h1>
          <h2>Software Developer</h2>
        </div>
        <div className="experience">
          <h3>Experience</h3>
          <p>texto</p>
        </div>
        <div className="experience-time">

        </div>
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>🇧🇷 PT-BR - Native Speaker</span>
            <span>🇺🇸 EN - Intermediary</span>
            <span>🇪🇸 ES - Intermediary</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info"></div>
          <span>🎓</span>
          <span>Information Systems Bachelors - Universidade FUMEC</span>
        </div>
        <div className="buttons">
          <div className="social-media">

          </div>
          <button>Contact Me</button>
        </div>
      </div>
    </main>
  );
}
