import React from 'react';
import Showcase from '../sections/Showcase/Showcase';
import About from '../sections/About/About';
import Experience from '../sections/Experience/Experience';

const HomePage = () => {
  return (
    <>
      <div className='home_page_container container'>
      <Showcase/>
      <About/>
      <Experience/>
      </div>
    </>
  );
};

export default HomePage;