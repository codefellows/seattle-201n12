'use strict';

var characterForm = document.getElementById('character-generator-form');
var bodyElement = document.getElementById('body');
var allCharacters = [];

var Character = function(name, level, race, characterClass){
  this.name = name;
  this.level = level;
  this.race = race;
  this.characterClass = characterClass;
  this.isCool = true;
};


Character.prototype.talkAboutSelf = function (){
  var resultString = `Hi my name is ${this.name}, I am a level ${this.level} ${this.race} ${this.characterClass}`
  console.log(resultString);
}

// best practice syntax

var handleMakeCharacter = function (exampleEvent) {
  exampleEvent.preventDefault();
  exampleEvent.stopPropagation();
  // console.log(exampleEvent);
  // console.log(exampleEvent.target);
  // console.log(exampleEvent.target.level);
  var level = exampleEvent.target.level.value;
  var characterName = exampleEvent.target['character-name'].value;
  var fantasyRace = exampleEvent.target['fantasy-race'].value;
  var characterClass = exampleEvent.target.class.value;
  // console.log(level, characterName, fantasyRace, characterClass);
  var newCharacter = new Character(characterName, level, fantasyRace, characterClass);
  allCharacters.push(newCharacter);
  
};

bodyElement.addEventListener('click', function (event) {
  console.log('hi');
});

characterForm.addEventListener('submit', handleMakeCharacter);

// ================================
