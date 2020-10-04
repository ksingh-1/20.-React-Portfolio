import React from 'react';
import '../../App.css';


function Resume() {
  return (
    <section id="main-resume" className="clearfix">
      <h1 className='resume'>
        <p>Resume</p>
        </h1>
        <div className="rBox">
          <iframe title="KSingh Resume" className="cv" src="images/ksinghResume.updated.pdf"></iframe>
          {/* <iframe title="KSingh Resume" className="cv" src="https://docs.google.com/document/d/e/2PACX-1vQy9xdHrylYgglM3zpoLWhUX4TwMZb5BihojkauN2M5HxtEK4dptSwoDDXwGZyTDw/pub?embedded=true"></iframe> */}
        </div>
    </section>
  )}
  
export default Resume;