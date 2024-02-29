import React from 'react';
import Showcase from '../sections/Showcase/Showcase';
import About from '../sections/About/About';
import Experience from '../sections/Experience/Experience';
import Work from '../sections/Work/Work';

const HomePage = () => {
  return (
    <>
      <div className='home_page_container container'>
      <Showcase/>
      <About/>
      <Experience/>
      <Work/>
      </div>
    </>
  );
};

export default HomePage;