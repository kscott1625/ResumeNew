import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
