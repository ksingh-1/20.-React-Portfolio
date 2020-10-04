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
              text='Bubs & Grubs Is A Great Application To Try New Quarantine Meals Along With Drink Ideas Based Upon The Age Inputted When First Using The App.'
              label='Team Project 1'
              href='https://github.com/ksingh-1/bng'
              web='https://rgarza28.github.io/bng/'
              target='_blank'
              rel='noopener'
            />
            <CardItem
              src='images/Project2Druid.JPG'
              text='DRUID (Develop/Restaurant User Interface/Design) Allows Restaurant Owners/Users To Sign-Up, Sign-In Add & Remove Items From The Menu.'
              label='Team Project 2'
              href='https://github.com/KenanDeari/Digital-Menu-Project'
              web='https://mighty-gorge-52471.herokuapp.com/'
              target='_blank'
              rel='noopener'
            />
            <CardItem
              src='images/Project3SMU.JPG'
              text='S.M.U. (Student Management Utility) Is A User Friendly Site Where Students/Alumni Can Apply To Jobs And Look For Networking Events.'
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
              text='Weather Dashboard Application Uses OpenWeather API To Retrieve Weather Data For Various Cities Inputted By The User. Persistent Cities Searched Will Be Saved In Local Storage On The Left.'
              label='Homework'
              href='https://github.com/ksingh-1/06-Weather-Dashboard'
              web='https://ksingh-1.github.io/06-Weather-Dashboard/'
              target='_blank'
              rel='noopener'
            />
            <CardItem
              src='images/TeamProfile.PNG'
              text='Team Profile Generator Application Will Prompt The User For Information About The Team Manager And Team Members To Generate A Team Profile Page From The Command Line. No Website Deployment.'
              label='Homework'
              href='https://github.com/ksingh-1/10.Team-Profile-Generator'
              web=''
              target='_blank'
              rel='noopener'
            />
            <CardItem
              src='images/NoteTakerMainPage.PNG'
              text='Note Taker Application uses An Express Backend To Save And Retrieve Various Notes Made By The User From and To A JSON File. The Note Files Can Be Editted or Deleted By The User.'
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
              text='Fitness Tracking App That Will Help People Reach Mheir Fitness Goals Quicker And Track Workout Progress. This App Uses MongoDB To Store Data.'
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
              text='Day Planner Is A Calendar Application That Allows The User To Save Events For Each Hour Of The Day. This Application Checks And Updates The Time As Well.'
              label='Homework'
              href='https://github.com/ksingh-1/05-Day-Planner'
              web='https://ksingh-1.github.io/05-Day-Planner/'
              target='_blank'
              rel='noopener'
            />
            <CardItem
              src='images/BudgetTracker.jpg'
              text='Budget Tracker Application Will Help People Track Their Expenses And Deposits To Be More Financially Consciencious. This App Uses MongoDB.'
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
