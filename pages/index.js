import Head from 'next/head';
import Image from 'next/image';
import Landing from '../components/Landing';
import About from '../components/About';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Styles from '../styles/App.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sebastian Golshani</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <section id="home">
        <Landing />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
