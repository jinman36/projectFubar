'use strict';

allRestaurants = [];
momijiBlurb = 'Fun and stylish place to eat';


function Restaurant(name, phone, website, indoor, outdoor, food, drinks, couple, group, blurb) {

  this.name = name;
  this.phoneNumber = phone;
  this.website = website;
  this.indoor = indoor;
  this.outdoor = outdoor;
  this.food = food;
  this.drinks = drinks;
  this.couple = couple;
  this.group = group;
  this.blurb = blurb;
  allRestaurants.push(this);
}

// indoor = food, couple
// indoor = drinks, couople
// indoor = food, group
// indoor = drinks, couple


new Restaurant(
  'Edgewater',
  '206-269-4575',
  'https://www.edgewaterhotel.com/seattle-six-seven-restaurant/',
  true,
  true,
  true,
  true,
  true,
  true,
);

new Restaurant(
  'Momiji',
  '206-457-4068',
  'https://www.momijiseattle.com/',
  true,
  false,
  true,
  true,
  true,
  true,
);

new Restaurant(
  'Toulouse',
  '206-432-9069',
  'http://toulousepetit.com/',
  true,
  false,
  true,
  true,
  true,
  true,
);

new Restaurant(
  'The 100 Pound Clam',
  '206-453-5067',
  'https://www.100poundclam.com/',
  false,
  true,
  true,
  true,
  true,
  true,
);

new Restaurant(
  'Maximilien',
  '206-682-7270',
  'https://www.maximilienrestaurant.com/',
  false,
  true,
  true,
  true,
  true,
  true,
);

new Restaurant(
  'Ray\'s Cafe',
  '206-789-3770',
  'https://www.rays.com/cafe/',
  false,
  true,
  true,
  true,
  true,
  true,
);

new Restaurant(
  'Reuben\'s',
  '206-h784-2859',
  'https://reubensbrews.com/visit-us/',
  false,
  true,
  false,
  true,
  true,
  true,
);

new Restaurant(
  'Liberty',
  '206-323-9898',
  'http://www.libertybars.com/',
  true,
  false,
  true,
  true,
  true,
  false,
);

new Restaurant(
  'Artusi',
  '206-251-7673',
  'http://artusibar.com/',
  true,
  false,
  true,
  true,
  true,
  false,
);





// let restautrantEdgewater = new Restaurant(firstChoice, secondChoice, thirdChoice, indoor, food, couple);
// let restaurantThree = new Restaurant(firstChoice, secondChoice, thirdChoice, indoor, drinks, group);
// let restaurantFour = new Restaurant(firstChoice, secondChoice, thirdChoice, indoor, drinks, couple);
// let restaurantFive = new Restaurant(firstChoice, secondChoice, thirdChoice, outdoor, food, group);
// let restautrantSix = new Restaurant(firstChoice, secondChoice, thirdChoice, outdoor, food, couple);
// let restaurantSeven = new Restaurant(firstChoice, secondChoice, thirdChoice, outdoor, drinks, group);
// let restaurantEight = new Restaurant(firstChoice, secondChoice, thirdChoice, outdoor, drinks, couple);

// let restaurantOne = new Restaurant(secondChoice, indoor, food, group);
// let restautrantTwo = new Restaurant(secondChoice, indoor, food, couple);
// let restaurantThree = new Restaurant(secondChoice, indoor, drinks, group);
// let restaurantFour = new Restaurant(secondChoice, indoor, drinks, couple);
// let restaurantFive = new Restaurant(secondChoice, outdoor, food, group);
// let restautrantSix = new Restaurant(secondChoice, outdoor, food, couple);
// let restaurantSeven = new Restaurant(secondChoice, outdoor, drinks, group);
// let restaurantEight = new Restaurant(secondChoice, outdoor, drinks, couple);

