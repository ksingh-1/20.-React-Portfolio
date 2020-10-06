import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>KULPREET SINGH</h1>
      <p>Web Developer|Coder|Software Engineer</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          target='_blank'
          a href='https://github.com/ksingh-1'
          rel="noopener"
        >
          Link To GitHub Repo
        </Button> */}
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('STARTED')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
