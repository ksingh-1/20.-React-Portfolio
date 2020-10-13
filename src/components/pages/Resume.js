import React from 'react';
import '../../App.css';
import resume1 from '../../images/KSinghR1.pdf';


function Resume() {
  return (
    <section id="main-resume" className="clearfix">
      <h1 className='resume'>
        <p>Resume</p>
        </h1>
        <div className="rBox">
        <a href={resume1} target='_blank' rel='noopener noreferrer'>
					resume!
				</a>{' '}
        </div>
    </section>
  )}
  
export default Resume;