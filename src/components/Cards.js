import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>My Awesome Work!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Project1BNG.JPG'
              text='Bubs & Grubs is a great application to try out new quarantine meals along with drink ideas based on the age inputted when first using the app.'
              label='Team Project 1'
              href='https://github.com/ksingh-1/bng'
              web='https://rgarza28.github.io/bng/'
              target='_blank'
              rel='noopener'
            />
            <CardItem
              src='images/Project2Druid.JPG'
              text='DRUID (Develop/Restaurant User Interface/Design) allows restaurant owners/workers to sign-up, sign-in, add & remove items from the menu.'
              label='Team Project 2'
              href='https://github.com/KenanDeari/Digital-Menu-Project'
              web='https://mighty-gorge-52471.herokuapp.com/'
              target='_blank'
              rel='noopener'
            />
            <CardItem
              src='images/Project3SMU.JPG'
              text='S.M.U. (Student Management Utility) is a user friendly site where students/alumni can apply to jobs and look for networking events.'
              label='Team Project 3'
              href='https://github.com/KenanDeari/S.M.U---Student-Managment-Utility'
              web='https://studentmanagementutility.herokuapp.com/'
              target='_blank'
              rel='noopener'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/WeatherApp.PNG'
              text='Weather Dashboard Application uses OpenWeather API to retrieve weather data for various cities inputted by the user. Favorite searched cities will be saved in local storage on the left.'
              label='Homework'
              href='https://github.com/ksingh-1/06-Weather-Dashboard'
              web='https://ksingh-1.github.io/06-Weather-Dashboard/'
              target='_blank'
              rel='noopener'
            />
            <CardItem
              src='images/TeamProfile.PNG'
              text='Team Profile Generator Application prompts the user for information about the Team Manager and Team Members to generate a team profile page from the command line. -No Website Deployment-'
              label='Homework'
              href='https://github.com/ksingh-1/10.Team-Profile-Generator'
              web=''
              target='_blank'
              rel='noopener'
            />
            <CardItem
              src='images/NoteTakerMainPage.PNG'
              text='Note Taker Application uses an Express backend to save and retrieve various notes made by the user to and from a JSON file. The note files can be editted or deleted by the user.'
              label='Homework'
              href='https://github.com/ksingh-1/11.-Note-Taker'
              web='https://lit-bastion-38303.herokuapp.com/'
              target='_blank'
              rel='noopener'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/FitnessTracker.jpg'
              text='Fitness Tracking App will help people reach their fitness goals quicker and track workout progress. This app uses MongoDB to store data.'
              label='Homework'
              href='https://github.com/ksingh-1/17.-Fitness-Tracker'
              web='https://limitless-lake-38302.herokuapp.com/'
              target='_blank'
              rel='noopener'
              // Route path='/privacy-policy' component={() => { 
              //   window.location.href = 'github.com'; 
              //   return null;
          //  }}
            />
            <CardItem
              src='images/Day Planner App.gif'
              text='Day Planner is a calendar application that allows the user to save events for each hour of the day. This application checks and updates the time as well.'
              label='Homework'
              href='https://github.com/ksingh-1/05-Day-Planner'
              web='https://ksingh-1.github.io/05-Day-Planner/'
              target='_blank'
              rel='noopener'
            />
            <CardItem
              src='images/BudgetTracker.jpg'
              text='Budget Tracker Application will help people track their expenses and deposits to be more financially consciencious. This app uses MongoDB.'
              label='Homework'
              href='https://github.com/ksingh-1/18.-Budget-Tracker'
              web='https://guarded-badlands-40628.herokuapp.com/'
              target='_blank'
              rel='noopener'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
