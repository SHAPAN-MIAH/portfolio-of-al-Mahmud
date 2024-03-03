import React from 'react';
import Showcase from '../sections/Showcase/Showcase';
import About from '../sections/About/About';
import Experience from '../sections/Experience/Experience';
import Work from '../sections/Work/Work';
import OtherProjects from '../sections/OtherProjects/OtherProjects';
import Footer from '../sections/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <div className='home_page_container container'>
      <Showcase/>
      <About/>
      <Experience/>
      <Work/>
      <OtherProjects/>
      <Footer/>
      </div>
    </>
  );
};

export default HomePage;