import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Drop Me Your Email Below!
        </p>
        <p className='footer-subscription-text'>
          I'll Email You Back As Soon As Possible!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>SEND</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/sign-up'>How it works</Link>
            {/* <Link to='/'>Testimonials - Coming Soon</Link> */}
            <Link to='/'>Careers - Coming Soon</Link>
            {/* <Link to='/'>Investors</Link> */}
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact ME</h2>
            <Link to='/'>Contact</Link>
            {/* <Link to='/'>Support</Link> */}
            {/* <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link> */}
          </div>
        </div>
        {/* <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div> */}
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Kulpreet Singh |
              <i class="far fa-handshake"></i>
            </Link>
          </div>
          <small class='website-rights'>Thank You!</small>
          <div class='social-icons'>
            <a
              class='social-icon-link github'
              href='https://github.com/ksingh-1'
              target='_blank'
              rel="noopener"
              aria-label='Github' //facebook
            >
              <i class="fab fa-github"></i>
            </a>
            {/* <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link> */}
            {/* <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link> */}
            {/* <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link> */}
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/ksingh94/'
              target='_blank'
              rel="noopener"
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
