import Styles from '../styles/Projects.module.css';
import ProjectsOption from './ProjectsOption';
import holidaysImage from '../public/imagesProjects/holidays.png';
import socialmediaImage from '../public/imagesProjects/socialmedia.png';
import moviesImage from '../public/imagesProjects/movies.png';
import emailserviceImage from '../public/imagesProjects/emailservice.png';
import sebgramImage from '../public/imagesProjects/sebgram.png';

function Projects() {
  return (
    <div className={Styles.projects}>
      <h1>Projects</h1>
      <div className={Styles.projects__options}>
        <ProjectsOption
          title="Seb Holidays"
          img={holidaysImage}
          description="Responsive website for looking up holidays with the search bar. Based on Airbnb."
          tools="HTML, CSS, JavaScript, React, Next.js, TailwindCSS, Heroicons, Mapbox, API-Fetch"
          live="https://seb-holidays.vercel.app/"
          code="https://github.com/sebastiangol/seb-holidays"
        />
        <ProjectsOption
          title="Sebgram"
          img={sebgramImage}
          description="Responsive social media website for creating socialmedia posts. Based on Instagram."
          tools="HTML, CSS, JavaScript, React, Next.js, TailwindCSS, Recoil, Heroicons, Firebase, NextAuth, Google Auth"
          live="https://sebgram.vercel.app/"
          code="https://github.com/sebastiangol/sebgram"
        />
        {/* <ProjectsOption
          title="Seb Socialmedia"
          img={socialmediaImage}
          description="Social media website for viewing/making posts.
          User authentication. Based on Linkedin."
          tools="HTML, CSS, JavaScript, React, Redux, Material-UI, Firebase, Authentication"
          live="https://react-app-socialmedia.web.app/"
          code="https://github.com/sebastiangol/react-app-socialmedia"
        /> */}
        <ProjectsOption
          title="Seb Movies"
          img={moviesImage}
          description="Responsive website for browsing movies, fetched from the TMDB API. Based on Hulu."
          tools="HTML, CSS, JavaScript, React, Next.js, TailwindCSS, Heroicons, TMDB API"
          live="https://seb-movies.vercel.app/"
          code="https://github.com/sebastiangol/seb-movies"
        />
        <ProjectsOption
          title="Seb Emailservice"
          img={emailserviceImage}
          description="A website for viewing and writing emails.
          Google Authentication. Based on Gmail."
          tools="HTML, CSS, JavaScript, React, Redux, Material-UI, Firebase, Google Auth"
          live="https://react-app-emailservice.web.app/"
          code="https://github.com/sebastiangol/react-app-emailservice"
        />
      </div>
    </div>
  );
}

export default Projects;
