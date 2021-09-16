import Styles from '../styles/Skills.module.css';
import Image from 'next/image';

function SkillsOption({ title, img, link }) {
  return (
    <div>
      {!link ? (
        <div className={Styles.skills__optionNoLink}>
          <div className={Styles.skills__optionIcon}>
            <Image src={img} layout="fill" />
          </div>
          <p className={Styles.skills__optionTitle}>{title}</p>
        </div>
      ) : (
        <div className={Styles.skills__optionContainer}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className={Styles.skills__option}>
              <div className={Styles.skills__optionIcon}>
                <Image src={img} layout="fill" />
              </div>
              <p className={Styles.skills__optionTitle}>{title}</p>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}

export default SkillsOption;
