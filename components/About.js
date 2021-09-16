import Styles from '../styles/About.module.css';

function About() {
  return (
    <div className={Styles.about}>
      <h1>About Me</h1>
      <div className={Styles.about__text}>
        <p>
          I am a passionate web & software developer with a lengthy educational
          background in computing (BSc Computing, First Class), familiar with
          both front-end and back-end development.
        </p>
        <br />
        <p>
          Creating things, solving problems and helping people is very
          satisfying, so being a developer makes perfect sense to me!
        </p>
        <br />
        <p>
          I enjoy learning new things, and tend to understand things quickly.
        </p>
        <p>
          Focused on front-end web development with HTML/CSS/JavaScript/React.
        </p>
      </div>
    </div>
  );
}

export default About;
