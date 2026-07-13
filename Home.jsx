import profile from "../assets/profile.jpg";

function Home() {
  return (
    <section id="home" className="home section">
      <div className="container home-content">
        <div className="home-text">
          <p className="tag">Frontend Developer</p>
          <h1>
            Hi, I'm <span>Avisha Aswal</span>
          </h1>
          <p>
            I'm a B.Tech Computer Science (Cyber Security) student at UPES,
            I build modern, responsive, and user-friendly web applications
            using React and front-end technologies.
          </p>
          <div className="home-buttons">
            <a href="#projects" className="btn primary-btn">View Projects</a>
            <a href="#contact" className="btn secondary-btn">Contact Me</a>
          </div>
        </div>

        <div className="home-image">
          <img src={profile} alt="Avisha Aswal" className="profile-image" />
        </div>
      </div>
    </section>
  );
}

export default Home;
