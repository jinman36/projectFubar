'use strict';

//Global variables
let choice = 0;
let choices = [];
let myContainer = document.querySelector('#container');
let imageOne = document.querySelector('#image-one');
let imageTwo = document.querySelector('#image-two');


function userWelcome() {
  let welcomeMessage = alert('Welcome, please help us create a custom restaurant recommendation by clicking through the pictures that generate below!');
}

function Selector(name, fileExt = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExt}`;
}

let indoor = new Selector('indoor');
let outdoor = new Selector('outdoor');
let couple = new Selector('couple');
let group = new Selector('group');
let food = new Selector('food');
let drinks = new Selector('drinks');


function renderSelector(firstSelector, secondSelector) {
  
  imageOne.src = firstSelector.src;
  imageOne.title = firstSelector.name;
  
  imageTwo.src = secondSelector.src;
  imageTwo.title = secondSelector.name;
}


function handleClick(event) {
  if (event.target === imageOne || event.target === imageTwo) {
    // alert('Please click on an image');
    
  }
  
  choice++;
  // console.log(event.target.title);
  choices.push(event.target.title);
  if (choice === 1) {
    renderSelector(food, drinks);
  } else if (choice === 2) {
    // firstChoice = event.target.title;
    renderSelector(couple, group);
  } else if (choice === 3) {
    // thirdChoice = event.target.title;
    // console.log(choices);
    // below is proof of life, replace with reccomendation function call
    // console.log('renderRandomRestaurant');
    myContainer.innerHTML = ''; //is this what we want to do? remove event listener?
    document.getElementById('recommendation').style.display = 'block';
    localStorage.setItem('userChoices', JSON.stringify(choices));
  }
}



userWelcome();
renderSelector(outdoor, indoor);
myContainer.addEventListener('click', handleClick);
