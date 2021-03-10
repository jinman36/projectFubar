'use strict';

//Global variables
let choice = 0;
let choices = [];
let myContainer = document.querySelector('#container');
let imageOne = document.querySelector('#image-one');
let imageTwo = document.querySelector('#image-two');

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
  choices.push(event.target.title);
  if (choice === 1) {
    renderSelector(food, drinks);
  } else if (choice === 2) {
    renderSelector(couple, group);
  } else if (choice === 3) {
    myContainer.innerHTML = '';
    document.getElementById('recommendation').style.display = 'block';
    localStorage.setItem('userChoices', JSON.stringify(choices));
  }
}

renderSelector(outdoor, indoor);
myContainer.addEventListener('click', handleClick);
