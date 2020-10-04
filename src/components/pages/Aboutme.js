import React from 'react';
import '../../App.css';
// import profileP from '../../../public/images/Me.PNG'
import Footer from '../Footer';

export default function AboutMe() {
  return (
    
    <section id="main-info" className="clearfix">
    <h1 className='aboutme'>
      <p>About Me </p>
    </h1>
      <img id="profilePic" rel="profilePic" src='images/Me.PNG' alt="Me"/>
      <div className="aboutM"> 
        <p>
          Hello I'm Kulpreet,
        </p>
        <br />
        <p id="itemsAM">Here's Some Things About Me:</p>
          <ul>
            <li>
              I am a Front End, UX/UI Coder/Software Engineer located in Oklahoma with a background in Hospitality Management, I'm looking to make the change into Tech and Software Development!
            </li>
            <li>
              I've Graduated from Southern Methodist Univeristy's Full Stack Coding Bootcamp and I have my Bachelor's Degree In Psychology from The University of Oklahoma!
            </li>
            <li>
              My fondest memories in life have been about cars and creating something that is unique, special and your own. I see technology and software very close to similar as working on cars. You can create something from scratch or work with a team to improve existing code to optimize it to be better.
            </li>
            <li>
              My long term goal is to continously get better by working diligently and help others if I can.
            </li>
            <li>
              I hope to grow and expand my career in programming and web development to help people in the future!
            </li>

          </ul>
      </div>
   </section>
  )
}
