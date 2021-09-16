import Styles from '../styles/Landing.module.css';
// import Pdf from '../public/sebastian_golshani_CV.pdf';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SocialLink from './SocialLink';
import backgroundPic from '../public/undrawCoding.svg';
import Image from 'next/image';

function Home() {
  return (
    <div className={Styles.landing}>
      <div className={Styles.landing__top}>
        <div className={Styles.landing__title}>
          <div>
            <h1 className={Styles.landing__titleName}>Sebastian Golshani</h1>
            <h2 className={Styles.landing__titleTitle}>Web Developer</h2>
          </div>
          <div>
            <div className={Styles.landing__bottom}>
              <SocialLink
                text="sebastiangolshani@yahoo.co.uk"
                Icon={MailOutlineIcon}
              />
              <SocialLink
                text="LinkedIn"
                Icon={LinkedInIcon}
                link="https://linkedin.com/in/sebastian-golshani"
              />
              <SocialLink
                text="Github"
                Icon={GitHubIcon}
                link="https://github.com/sebastiangol"
              />
            </div>
          </div>
        </div>
        <div className={Styles.landing__image}>
          <Image src={backgroundPic} layout="fill" />
        </div>
      </div>
    </div>
  );
}

export default Home;
