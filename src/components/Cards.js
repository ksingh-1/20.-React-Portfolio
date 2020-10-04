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
              text='Bubs & Grubs is a one stop shop for mixing up the boring quarantine meal and drink routine.'
              label='Team Project 1'
              href='https://github.com/ksingh-1/bng'
              web='https://rgarza28.github.io/bng/'
              target='_blank'
              rel='noopener'
            />
            <CardItem
              src='images/Project2Druid.JPG'
              text='DRUID allows restaurant owners to sign-up to add & remove items from the menu.'
              label='Team Project 2'
              href='https://github.com/KenanDeari/Digital-Menu-Project'
              web='https://mighty-gorge-52471.herokuapp.com/'
              target='_blank'
              rel='noopener'
            />
            <CardItem
              src='images/Project3SMU.JPG'
              text='Student Management Utility is a user friendly site where one can apply to jobs and look for networking events.'
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
              text='Weather App uses the OpenWeather API to retrieve weather data for cities. Persistent cities searched will be saved in Local Storage.'
              label='Homework'
              href='https://github.com/ksingh-1/06-Weather-Dashboard'
              web='https://ksingh-1.github.io/06-Weather-Dashboard/'
              target='_blank'
              rel='noopener'
            />
            <CardItem
              src='images/TeamProfile.PNG'
              text='Team Profile Generator will prompt the user for information about the team manager, team members and generate a Team Profile Page.'
              label='Homework'
              href='https://github.com/ksingh-1/10.Team-Profile-Generator'
              web=''
              target='_blank'
              rel='noopener'
            />
            <CardItem
              src='images/NoteTakerMainPage.PNG'
              text='Note Taker App uses an Express backend and save and retrieve note data from a JSON file.'
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
              text='Fitness Tracking App that will help people reach their fitness goals quicker and track workout progress'
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
              text='Day Planner App is a calendar application that allows the user to save events for each hour of the day.'
              label='Homework'
              href='https://github.com/ksingh-1/05-Day-Planner'
              web='https://ksingh-1.github.io/05-Day-Planner/'
              target='_blank'
              rel='noopener'
            />
            <CardItem
              src='images/BudgetTracker.jpg'
              text='Budget Tracker App will help people track their expenses and deposits and be more financially aware!'
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
