import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "./image.png";

function Hero() {
  return (
    <section className="hero">
      <img src={profileImg} alt="profile" />
      <div>
        <p>Hello, I'm</p>
        <h1>vidya bharti</h1>
        <h3>Frontend Developer</h3>

        <div className="socials">
        <a href="https://github.com/vidyabharti05" target="_blank"> <FaGithub />  GitHub</a>
        <a href="https://www.linkedin.com/in/vidya-bharti-224767376/" target="_blank"> <FaLinkedin /> LinkedIn</a>
        <a href="mailto:vidyabharti2605@gmial.com"> <FaEnvelope />  Email</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
