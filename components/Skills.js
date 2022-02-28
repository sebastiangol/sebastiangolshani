import Styles from '../styles/Skills.module.css';
import SkillsOption from './SkillsOption';
import htmlIcon from '../public/imagesSkills/htmlIcon.png';
import jsIcon from '../public/imagesSkills/jsIcon.png';
import cssIcon from '../public/imagesSkills/cssIcon.png';
import reactIcon from '../public/imagesSkills/reactIcon.png';
import nextIcon from '../public/imagesSkills/nextIcon.png';
import tailwindIcon from '../public/imagesSkills/tailwindIcon.png';
import reduxIcon from '../public/imagesSkills/reduxIcon.png';
import firebaseIcon from '../public/imagesSkills/firebaseIcon.png';
import csharpIcon from '../public/imagesSkills/csharpIcon.png';
import aspIcon from '../public/imagesSkills/aspIcon.png';
import sqlIcon from '../public/imagesSkills/sqlIcon.png';
import gitIcon from '../public/imagesSkills/gitIcon.png';
import materialIcon from '../public/imagesSkills/materialIcon.png';
import mapboxIcon from '../public/imagesSkills/mapboxIcon.png';
import scrumIcon from '../public/imagesSkills/scrumIcon.png';
import tsIcon from '../public/imagesSkills/tsIcon.png';
import nodeIcon from '../public/imagesSkills/nodeIcon.png';

function Skills() {
  return (
    <div className={Styles.skills}>
      <h1>Skills</h1>
      <div className={Styles.skills__options}>
        <SkillsOption title="HTML5" img={htmlIcon} link="" />
        <SkillsOption title="CSS3" img={cssIcon} link="" />
        <SkillsOption title="JavaScript" img={jsIcon} link="" />
        <SkillsOption
          title="React"
          img={reactIcon}
          link="https://reactjs.org/"
        />
        <SkillsOption
          title="Next.js"
          img={nextIcon}
          link="https://nextjs.org/"
        />
        <SkillsOption title="TypeScript" img={tsIcon} link="" />

        <SkillsOption
          title="TailwindCSS"
          img={tailwindIcon}
          link="https://tailwindcss.com/"
        />
        <SkillsOption
          title="Redux"
          img={reduxIcon}
          link="https://redux.js.org/"
        />
        <SkillsOption
          title="Firebase"
          img={firebaseIcon}
          link="https://firebase.google.com/"
        />
        <SkillsOption
          title="Git/Github"
          img={gitIcon}
          link="https://git-scm.com/"
        />
        {/* <SkillsOption title="C#" img={csharpIcon} link="" /> */}
        <SkillsOption
          title="Node.js"
          img={nodeIcon}
          link="https://nodejs.org/"
        />
        <SkillsOption
          title="SQL/Postgres"
          img={sqlIcon}
          link="https://www.postgresql.org/"
        />
        {/* <SkillsOption
          title="Material-UI"
          img={materialIcon}
          link="https://material-ui.com/"
        /> */}
        {/* <SkillsOption
          title="Mapbox"
          img={mapboxIcon}
          link="https://www.mapbox.com/"
        /> */}
      </div>
    </div>
  );
}

export default Skills;
