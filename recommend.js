'use strict';

let allRestaurants = [];
let choices = JSON.parse(localStorage.getItem('userChoices'));


function Restaurant(src, name, phone, website, indoor, outdoor, food, drinks, couple, group, blurb) {

  this.src = src;
  this.name = name;
  this.phoneNumber = phone;
  this.website = website;
  this.indoor = indoor;
  this.outdoor = outdoor;
  this.food = food;
  this.drinks = drinks;
  this.couple = couple;
  this.group = group;
  allRestaurants.push(this);
}


new Restaurant(
  'img/Qadree.png', 
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
  'img/Qadree.png', 

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
  'img/Qadree.png', 

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
  'img/Qadree.png', 

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
  'img/Qadree.png', 

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
  'img/Qadree.png', 

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
  'img/Qadree.png', 

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
  'img/Qadree.png', 

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
  'img/Qadree.png', 

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


let recommendations = [];
function getRecommendation() {
  console.log(choices.length);
  if (choices.length === 2) {
    for (let i = 0; i < allRestaurants.length; i++) {
      if (choices[0] === 'indoor' && choices[1] === 'food' && allRestaurants[i].food && allRestaurants[i].indoor) {
        recommendations.push(allRestaurants[i]);
      }
      if (choices[0] === 'indoor' && choices[1] === 'drinks' && allRestaurants[i].drinks && allRestaurants[i].indoor) {
        recommendations.push(allRestaurants[i]);
      }
      if (choices[0] === 'outdoor' && choices[1] === 'food' && allRestaurants[i].food && allRestaurants[i].outdoor) {
        recommendations.push(allRestaurants[i]);
      }
      if (choices[0] === 'outdoor' && choices[1] === 'drinks' && allRestaurants[i].drinks && allRestaurants[i].outdoor) {
        recommendations.push(allRestaurants[i]);
      }
    }
  }
  if (choices.length === 1) {
    for (let i = 0; i < allRestaurants.length; i++) {
      if (choices[0] === 'indoor' && allRestaurants[i].indoor) {
        recommendations.push(allRestaurants[i]);
      }
      if (choices[0] === 'outdoor' && allRestaurants[i].outdoor)
        recommendations.push(allRestaurants[i]);
    }
  }
  if (choices.length === 3) {
    for (let i = 0; i < allRestaurants.length; i++) {
      if (choices[0] === 'indoor' && choices[1] === 'food' && choices[2] === 'couple' && allRestaurants[i].food && allRestaurants[i].indoor && allRestaurants[i].food) {
        recommendations.push(allRestaurants[i]);
      }
      if (choices[0] === 'indoor' && choices[1] === 'drinks' && choices[2] === 'couple' && allRestaurants[i].drinks && allRestaurants[i].indoor && allRestaurants[i].couple) {
        recommendations.push(allRestaurants[i]);
      }
      if (choices[0] === 'indoor' && choices[1] === 'food' && choices[2] === 'group' && allRestaurants[i].food && allRestaurants[i].indoor && allRestaurants[i].group) {
        recommendations.push(allRestaurants[i]);
      }
      if (choices[0] === 'indoor' && choices[1] === 'drinks' && choices[2] === 'group' && allRestaurants[i].drinks && allRestaurants[i].indoor && allRestaurants[i].group) {
        recommendations.push(allRestaurants[i]);
      }
      if (choices[0] === 'outdoor' && choices[1] === 'food' && choices[2] === 'couple' && allRestaurants[i].food && allRestaurants[i].outdoor && allRestaurants[i].couple) {
        recommendations.push(allRestaurants[i]);
      }
      if (choices[0] === 'outdoor' && choices[1] === 'drinks' && choices[2] === 'couple' && allRestaurants[i].drinks && allRestaurants[i].outdoor && allRestaurants[i].couple) {
        recommendations.push(allRestaurants[i]);
      }
      if (choices[0] === 'outdoor' && choices[1] === 'food' && choices[2] === 'group' && allRestaurants[i].food && allRestaurants[i].outdoor && allRestaurants[i].group) {
        recommendations.push(allRestaurants[i]);
      }
      if (choices[0] === 'outdoor' && choices[1] === 'drinks' && choices[2] === 'group' && allRestaurants[i].drinks && allRestaurants[i].outdoor && allRestaurants[i].group) {
        recommendations.push(allRestaurants[i]);
      }
    }
  }
}

function getRandomIndex() {
  return Math.floor(Math.random() * recommendations.length);
}

getRecommendation();
// console.log(recommendations);

function renderRecommendation() {
  let ourRecommendation = recommendations[getRandomIndex()];
  document.getElementById('restaurant-img').src = ourRecommendation.src;
  document.getElementById('restaurant-name').textContent = `Restaurant:  ${ourRecommendation.name}`;
  document.getElementById('phone-number').textContent = `Phone:  ${ourRecommendation.phoneNumber}`;
  document.getElementById('restaurant-link').textContent = ourRecommendation.name;
  document.getElementById('restaurant-link').setAttribute('href', ourRecommendation.website);
}
renderRecommendation();
