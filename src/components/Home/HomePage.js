import React from 'react';
import Showcase from '../sections/Showcase/Showcase';
import About from '../sections/About/About';

const HomePage = () => {
  return (
    <>
      <div className='home_page_container container'>
      <Showcase/>
      <About/>
      </div>
    </>
  );
};

export default HomePage;