import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-text">
          You can reach me through email or connect with me on GitHub and LinkedIn.
        </p>

        <div className="contact-links">
          <a href="mailto:avishaaswal3@gmail.com">
            <FaEnvelope /> avishaaswal3@gmail.com
          </a>
          <a href="https://github.com/Avishaaaaa" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/avisha-aswal-1a73aa342" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
