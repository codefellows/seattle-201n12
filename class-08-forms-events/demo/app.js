'use strict';
var allCharacters = [];

var PCCharacter = function (name, level, race, chrClass){
  this.name = name;
  this.level = level;
  this.race = race;
  this.chrClass = chrClass;
};

PCCharacter.talkAboutSelf = function (){
  var resultString = `Hi, my name is ${this.name}, I am a level ${this.level} ${this.race} ${this.chrClass}.`;
  console.log(resultString);
};


// best practice syntax, "handle" indicates that this variable is associated with a form.
var handleMakeCharacter = function(exampleEvent){
  exampleEvent.preventDefault();
  exampleEvent.stopPropagation(); //prevents any other events higher up food chain from firing (in theory the 'hi' bodyElement function that we tried)
  // console.log(exampleEvent);
  // console.log(exampleEvent.target);
  // console.log(exampleEvent.target.level);
  // console.log(exampleEvent.target.level.value);
  var level = exampleEvent.target.level.value;
  var characterName = exampleEvent.target['character-name'].value;
  var race = exampleEvent.target['fantasy-race'].value;
  var charClass = exampleEvent.target.class.value;
  console.log(characterName, level, race, charClass);
  var newCharacter = PCCharacter(characterName, level, fantasyRace, charClass);
  allCharacters().push;
};

var characterForm = document.getElementById('character-generator-form');

characterForm.addEventListener('submit', handleMakeCharacter);

// ============================
// other option

// characterForm.addEventListener('submit', function(event)){
//   //describe function here
// }