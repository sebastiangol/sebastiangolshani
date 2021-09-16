import Styles from '../styles/Landing.module.css';

function SocialLink({ text, Icon, link }) {
  return (
    <div>
      {!link ? (
        <div className={Styles.landing__socialLink}>
          <Icon className={Styles.landing__socialIcon} />
          <p className={Styles.landing__socialText}>{text}</p>
        </div>
      ) : (
        <div className={Styles.landing__LinkLinkContainer}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div>
              <div className={Styles.landing__socialLinkLink}>
                <Icon className={Styles.landing__socialIcon} />
                <p className={Styles.landing__socialTextLink}>{text}</p>
              </div>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}
export default SocialLink;
