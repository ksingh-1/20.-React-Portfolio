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
              label='Project 1'
              path='/services'
            />
            <CardItem
              src='images/Project2Druid.JPG'
              text='DRUID allows restaurant owners to sign-up to add & remove items from the menu.'
              label='Project 2'
              path='/services'
            />
            <CardItem
              src='images/Project3SMU.JPG'
              text='Student Management Utility is a user friendly site where one can apply to jobs and look for networking events.'
              label='Project 3'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/WeatherApp.PNG'
              text='Weather App uses the OpenWeather API to retrieve weather data for cities. Persistent cities searched will be saved in Local Storage.'
              label='Homework'
              path='/services'
            />
            <CardItem
              src='images/TeamProfile.PNG'
              text='Team Profile Generator will prompt the user for information about the team manager, team members and generate a Team Profile Page.'
              label='Homework'
              path='/products'
            />
            <CardItem
              src='images/NoteTakerMainPage.PNG'
              text='Note Taker App uses an Express backend and save and retrieve note data from a JSON file.'
              label='Homework'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/FitnessTracker.jpg'
              text='Fitness Tracking App that will help people reach their fitness goals quicker and track workout progress'
              label='Homework'
              path='/services'
            />
            <CardItem
              src='images/Day Planner App.gif'
              text='Day Planner App is a calendar application that allows the user to save events for each hour of the day.'
              label='Homework'
              path='/products'
            />
            <CardItem
              src='images/BudgetTracker.jpg'
              text='Budget Tracker App will help people track their expenses and deposits and be more financially aware!'
              label='Homework'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
