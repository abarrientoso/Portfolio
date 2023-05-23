import './App.css'
import { Suspense, useEffect, useState } from 'react'
import TranslationContext from './context/TranslationContext';

// Components
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Qualification from './components/Qualification/Qualification'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  const sectionIds = {
    home: 'home',
    about: 'about',
    skills: 'skills',
    qualification: 'qualification',
    portfolio: 'portfolio',
    contact: 'contact'
  };

  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
  
      // Calcula el porcentaje de scroll
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
  
      // Comprueba la posición del scroll y asigna la sección actual
      if (scrollPercentage < 10) {
        setCurrentSection(sectionIds.home);
      } else if (scrollPercentage >= 10 && scrollPercentage < 30) {
        setCurrentSection(sectionIds.about);
      } else if (scrollPercentage >= 30 && scrollPercentage < 60) {
        setCurrentSection(sectionIds.skills);
      } else if (scrollPercentage >= 60 && scrollPercentage < 70) {
        setCurrentSection(sectionIds.qualification);
      } else if (scrollPercentage >= 70 && scrollPercentage < 90) {
        setCurrentSection(sectionIds.portfolio);
      } else {
        setCurrentSection(sectionIds.contact);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);


  return (
    <Suspense fallback="Loading">
      <TranslationContext>
        <Header sectionIds={sectionIds} currentSection={currentSection}/>
        <main className='main'>
          <section className="home section" id={sectionIds.home}>
            <Home />
          </section>

          <section className="about section" id={sectionIds.about}>
            <About />
          </section>

          <section className='skills section' id={sectionIds.skills}>
            <Skills />
          </section>

          <section className='qualification section' id={sectionIds.qualification}>
            <Qualification />
          </section>

          <section className='portfolio section' id={sectionIds.portfolio}>
            <Portfolio />
          </section>

          <section className='contact section' id={sectionIds.contact}>
            <Contact />
          </section>
        </main>
        <Footer />
      </TranslationContext>
    </Suspense>
  )
}

export default App
