'use strict';

allRestaurants = [];
momijiBlurb = 'Fun and stylish place to eat';

function Restaurant(firstChoice, secondChoice, thirdChoice, indoor, outdoor, food, drinks, couple, group, blurb) {
  // this.firstchoice = firstChoice;
  // this.secondchoice = secondChoice;
  // this.thirdchoice = thirdChoice;
  this.indoor = indoor;
  this.outdoor = outdoor;
  this.food = food;
  this.drinks = drinks;
  this.couple =couple;
  this.group = group;
  this.blurb = blurb;
  this.website = website;
  allRestaurants.push(this);
}

// indoor = food, couple
// indoor = drinks, couople
// indoor = food, group
// indoor = drinks, couple


new Restaurant(
  true,
  false,
  );
let restautrantEdgewater = new Restaurant(firstChoice, secondChoice, thirdChoice, indoor, food, couple);
let restaurantThree = new Restaurant(firstChoice, secondChoice, thirdChoice, indoor, drinks, group);
let restaurantFour = new Restaurant(firstChoice, secondChoice, thirdChoice, indoor, drinks, couple);
let restaurantFive = new Restaurant(firstChoice, secondChoice, thirdChoice, outdoor, food, group);
let restautrantSix = new Restaurant(firstChoice, secondChoice, thirdChoice, outdoor, food, couple);
let restaurantSeven = new Restaurant(firstChoice, secondChoice, thirdChoice, outdoor, drinks, group);
let restaurantEight = new Restaurant(firstChoice, secondChoice, thirdChoice, outdoor, drinks, couple);

// let restaurantOne = new Restaurant(secondChoice, indoor, food, group);
// let restautrantTwo = new Restaurant(secondChoice, indoor, food, couple);
// let restaurantThree = new Restaurant(secondChoice, indoor, drinks, group);
// let restaurantFour = new Restaurant(secondChoice, indoor, drinks, couple);
// let restaurantFive = new Restaurant(secondChoice, outdoor, food, group);
// let restautrantSix = new Restaurant(secondChoice, outdoor, food, couple);
// let restaurantSeven = new Restaurant(secondChoice, outdoor, drinks, group);
// let restaurantEight = new Restaurant(secondChoice, outdoor, drinks, couple);

