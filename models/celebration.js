'use_strict'
var helper = require('./../helpers/general.js');

exports.getRandomCenterCelebration = function() {
  var arbIndex = helper.generateRandomNo(0, (def_sets["center"].length - 1));
  var centerArr = def_sets["center"];
  return (new Celebration(arbIndex, "center", centerArr[arbIndex]));
}

exports.getAllCenterResponses = function() { return assembleCelebrations("center") }

exports.getAllCornerCelebrations = function() { return assembleCelebrations("corner") }

exports.getAllWrongResponses = function() { return assembleCelebrations("wrong") }

function Celebration(index, type, gif_audio_arr) {
  this.index = index;
  this.type  = type;
  this.gif   = gif_audio_arr[0];
  this.audio = gif_audio_arr[1];
  this.len   = gif_audio_arr[2];
}

function assembleCelebrations(type) {
  var arr = [];
  var celebrationDefs = def_sets[type];
  for (var i = 0; i < celebrationDefs.length; i++) {
    arr.push(new Celebration(i, type, celebrationDefs[i]))
  }
  return arr;
}

var def_sets = {
  center: celebration_center_defs = [
    ["/learning/elmo/elmo_dancing.gif", "/learning/sounds/elmo_lalala.mp3", 2000],
    ["/learning/cookie_monster/cookie_monster_checkeredbkgd.gif", "/learning/cookie_monster/om_nom_nom_nom.mp3", 2000],
    ["/learning/cookie_monster/cookie_monster_dance.gif", "/learning/cookie_monster/cookie_exclaim.mp3", 2000],
    ["/learning/buzz/buzz_button.gif", "/learning/buzz/to_infinity.mp3", 2000],
    ["/learning/grover/grover_dance.gif", "/learning/grover/wonderful_employee.mp3", 2000],
  ],
  corner: celebration_corner_defs = [
    ["/learning/elmo/elmo_jumping.gif", "/learning/sounds/elmo_tickle.mp3", 2000],
    ["/learning/buzz/buzz_and_aliens.gif", "/learning/buzz/come_in_peace.mp3", 2000],
    ["/learning/fireworks.gif", "/learning/sounds/firework_sound.mp3", 2000],
  ],
  wrong: wrong_response_defs = [
    ["/learning/cookie_monster/cookie_monster_finger_tap.gif", "/learning/cookie_monster/what_kinda_answer.mp3", 2000],
    ["/learning/grover/grover_groan.gif", "/learning/grover/sorry.wav", 2000],
    ["/learning/buzz/buzz_laser.gif", "/learning/buzz/intelligent_life.mp3", 2000],
  ],
};

