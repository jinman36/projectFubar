'use strict';
allRestaraunts = [];

function Restaurant(first, second, third){
  this.firstChoice = first;
  this.secondChoice = second;
  this.thirdChoice = third;
  allRestaraunts.push(this);
}


//then instantiate
new Restaurant(<other details>, 'indoor', 'couple', 'food'); 