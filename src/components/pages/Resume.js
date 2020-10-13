import React from 'react';
import '../../App.css';
import resume1 from '../../images/ksinghResume.Updated.pdf';


function Resume() {
  return (
    <section id="main-resume" className="clearfix">
      <h1 className='resume'>
        <p>Resume</p>
        </h1>
        <div className="rBox">
        <a href={resume1} target='_blank' rel='noopener noreferrer'>
					Please Click Here To Access My Resume!
				</a>{' '}
        </div>
    </section>
  )}
  
export default Resume;