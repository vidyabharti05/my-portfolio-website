import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "./image.png";

function Hero() {
  return (
  <div className="hero-wrap">
    <section className="hero">
      <img src={profileImg} alt="profile" />
      <div>
        <h1>Hello, I'm Vidya Bharti</h1>
        <h3>Frontend Developer | Data Science Learner</h3>
        <h3>I build interactive & smart web apps</h3>

        <div className="socials">
        <a href="https://github.com/vidyabharti05" target="_blank"> <FaGithub />  GitHub</a>
        <a href="https://www.linkedin.com/in/vidya-bharti-224767376/" target="_blank"> <FaLinkedin /> LinkedIn</a>
        <a href="mailto:vidyabharti2605@gmial.com"> <FaEnvelope />  Email</a>
        </div>
      </div>
    </section>
  </div>
  );
}

export default Hero;
