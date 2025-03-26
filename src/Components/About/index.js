import "./index.css";

const About = () => {
  return (
    <div className="about">
      <div className="text-part">
        <h1 className="about-header">Focus Flow</h1>
        <p className="about-para">
          "Boost your productivity with a personalized Pomodoro timer. Tailor
          <br />
          your focus sessions to fit your unique work style and achieve your
          <br />
          goals efficiently."
        </p>
      </div>
      <div className="button-part">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/amaanpeshimam"
        >
          <button className="button-links">LinkedIn</button>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/amaan6498">
          <button className="button-links">Github</button>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://myportfolio-neon-psi.vercel.app/"
        >
          <button className="button-links">Portfolio</button>
        </a>
      </div>
    </div>
  );
};

export default About;
