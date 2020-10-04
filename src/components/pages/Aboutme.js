import React from 'react';
import '../../App.css';

export default function AboutMe() {
  return (
    <section id="main-info" className="clearfix">
    <h1 className='aboutme'>
      <p>About Me </p>
    </h1>
      {/* <img id="profilePic" rel="profilePic" */}
      <div className="aboutM"> 
        <p>
          Hello I'm Kulpreet
        </p>
        <br />
        <p id="itemsAM">About Me:</p>
          <ul>
            <li>
            I am a Software Developer located in Oklahoma with a background in Hospitality Management and Bacherlors Degree Psychology looking to make the change into Tech and Software Development!
            </li>
            <li>
            My fondest memories in life have been about cars and creating something that is unique, special and your own. I see technology and software very close to similar as working on cars. You can create something from scratch or work with a team to improve existing code to optimize it to be better.
            </li>
            <li>
            My long term goal is to work on technology and software that will be used in cars and trucks!
            </li>
            <li>
            I hope to grow and expand my career in programming and web development to help people in the future!
            </li>

          </ul>

      </div>

   </section>
  )
}
