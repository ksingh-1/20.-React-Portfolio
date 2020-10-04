import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>

        <div className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>

            <img
              className='cards__item__img'
              alt='PortfolioM' //
              src={props.src}
            />

          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          <a
            class='social-icon-link-github'
            href={props.href}
            target='_blank'
            rel="noopener"
            aria-label='Github'
            >
          <i class='fab fa-github fa-2x'  />
        </a>
        <a
            class='social-icon-link-deploy'
            href={props.web}
            target='_blank'
            rel="noopener"
            aria-label='Deployed'
            >
          <i class='fas fa-laptop-code fa-2x center'  />
        </a>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
