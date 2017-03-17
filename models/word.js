'use strict'
var helper = require('./../helpers/general.js');

exports.createWord = function(index = -1, usedWordsArr = []) {
 return new Word(index, usedWordsArr);
};

function Word(index, usedWords) {
  if (index === -1) { this.index = randomWordDefIndex() }
  else { this.index = index }
  this.usedWords = usedWords;
  this.setAdditionalProperties();
}

Word.prototype.setAdditionalProperties = function() {
  this.str       = word_defs[this.index][0];
  this.category  = word_defs[this.index][1];
  this.image_src = word_defs[this.index][2];
  this.audio_src = word_defs[this.index][3];
  this.audio_len = word_defs[this.index][4];
  this.chars     = this.str.split("");
  this.charsAudioSrc = getCharsAudioSrc(this.chars);
}

Word.prototype.updateWord = function() {
  if(this.usedWords.length >= word_defs.length) { this.usedWords = []; }
  var newIndex = randomWordDefIndex();
  while (!nextWordCheck(this.usedWords, newIndex, this.index)) {
    newIndex = randomWordDefIndex();
  }
  this.index = newIndex;
  this.setAdditionalProperties();
}

function getCharsAudioSrc(chars) {
  var arr = [];
  for (var i = 0; i < chars.length; i++) {
    arr.push('/learning/sounds/alphabet/' + chars[i].toLowerCase() + '.mp3');
  }
  return arr;
};
function nextWordCheck(usedWords, index, lastIndex) {
  if (helper.checkIfPresent(usedWords, index)) { return false; }
  if (index === lastIndex) { return false; }
  return true;
};
function randomWordDefIndex() { return helper.generateRandomNo(0, (word_defs.length - 1)) };

var word_defs = [
  ["DOG", "animal", "/learning/animal_pics/dog.jpg", "/learning/sounds/dog_woof.wav", 2000],
  ["BUNNY", "animal", "/learning/animal_pics/bunny.jpg", "/learning/sounds/whats_up_doc.mp3", 2000],
  ["BIRD", "animal", "/learning/animal_pics/bird.jpg", "/learning/sounds/sparrow_chirp.mp3", 2000],
  ["COW", "animal", "/learning/animal_pics/cow.png", "/learning/sounds/cow_moo.wav", 2000],
  ["CAT", "animal", "/learning/animal_pics/cat.png", "/learning/sounds/cat_meow.mp3", 2000],
  ["FISH", "animal", "/learning/animal_pics/fish.png", "/learning/sounds/fish_bubble.mp3", 2000],
  ["HORSE", "animal", "/learning/animal_pics/horse.jpg", "/learning/sounds/horse_blow.mp3", 2000],
  ["TURKEY", "animal", "/learning/animal_pics/turkey.jpg", "/learning/sounds/turkey_gobble.mp3", 2000],
  ["PIG", "animal", "/learning/animal_pics/pig.jpg", "/learning/sounds/pig_snort.mp3", 2000],
  ["DUCK", "animal", "/learning/animal_pics/duck.jpg", "/learning/sounds/duck_quack.mp3", 2000],
  ["CAR", "transportation", "/learning/transportation_pics/car.jpeg", "/learning/sounds/car_start.mp3", 2000],
  ["TRAIN", "transportation", "/learning/transportation_pics/train.jpg", "/learning/sounds/train_bell_whistle.mp3", 2000],
  ["BOAT", "transportation", "/learning/transportation_pics/boat.jpg", "/learning/sounds/boat_motor.mp3", 2000],
  ["PLANE", "transportation", "/learning/transportation_pics/plane.jpg", "/learning/sounds/plane_engine.mp3", 2000],
  ["WATERMELON", "food", "/learning/food_pics/watermelon.png", "/learning/sounds/food/watermelon.mp3", 2000],
  ["COOKIE", "food", "/learning/food_pics/cookie.jpg", "/learning/cookie_monster/cookie_exclaim.mp3", 2000],
  ["APPLE", "food", "/learning/food_pics/apple.png", "/learning/sounds/food/apple.mp3", 2000],
  ["TOAST", "food", "/learning/food_pics/toast.jpg", "/learning/sounds/food/toast.mp3", 2000],
  ["TACO", "food", "/learning/food_pics/taco.png", "/learning/sounds/food/taco.mp3", 2000],
];