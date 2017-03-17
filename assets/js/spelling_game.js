var audioPlaying = true;  // initialize to true as audio kicks off on page load
var checkingLetter = false;
var celebrationRoutine = false;
var centerCelebration = false;
var currentCelebrationId = "";
var currentWrongResponseId = "";
var expectedInput;
var currentWordId = "";
var wordsUsed = "";

$(document).ready(initNewWord());

function initNewWord() {
  checkingLetter = false;
  celebrationRoutine = false;
  audioPlaying = true;
  makeNoise();
  setTimeout(initIntro, 2000);
}

function initIntro() {
  $('span#0.hidden-letter').addClass('blink');
  audioPlaying = false;
  readCurrentLetter(0);
}

function keypressProcess(input) {
  if (checkIfLockbarInput(input)) { checkingLetter = false }
  else if ((celebrationRoutine) || (audioPlaying)) { checkingLetter = false }
  else { handleInput(input) }
}

function handleInput(input) {
  var eId = $('.blink').attr('id');
  // check against visible letter
  expectedInput = $('.highlight').text().toUpperCase();
  input = input.toUpperCase();
  // if it's correct
  if (input === expectedInput) {
    $('span#' + eId + '.letter').removeClass('highlight');
    $('span#' + eId + '.hidden-letter').addClass('revealed-letter').removeClass('hidden-letter blink');
    // if it's the last element
    if ($('span#' + eId + '.revealed-letter').hasClass('last-letter')) {
      $('.letter#letter-bang').css('color', 'black');     // turn the letter-bang visible
      $('.hidden-letter').css('color', 'green');
      initCenterCelebration();
      postForNewWord();
    }
    else { playCelebration(eId) }
  }
  // wrong letter
  else {
    $('span#' + eId + '.hidden-letter').text(input).addClass('highlight');
    playWrongResponse(eId);
  }
}

function playCelebration(id) {
  celebrationRoutine = true;
  var index = helper.generateRandomNo(0, cornerCelebrationIndexArray.length - 1);
  currentCelebrationId = '.animation-corner#' + cornerCelebrationIndexArray[index];
  $(document.body).find(currentCelebrationId).css("display", "inline");
  var animationAudio = document.getElementById("animation-corner-audio-" + cornerCelebrationIndexArray[index]);
  audioPlaying = true;
  animationAudio.play();
  setTimeout(function () { stopCelebration(id) }, 2000);
}

function stopCelebration(id) {
  $(document.body).find(currentCelebrationId).css("display", "none");
  currentCelebrationId = "";
  $('span#' + id + '.letter').next().addClass('highlight');
  $('span#' + id + '.revealed-letter').next().addClass('blink');
  var buff = parseInt(id);
  letterToSayIndex = buff + 1;
  readCurrentLetter(letterToSayIndex);
  celebrationRoutine = false;
  audioPlaying = false;
  checkingLetter = false;
}

function playWrongResponse(id) {
  celebrationRoutine = true;
  var index = helper.generateRandomNo(0, wrongResponseIndexArray.length - 1);
  currentWrongResponseId = '.animation-corner#' + wrongResponseIndexArray[index];
  $(document.body).find(currentWrongResponseId).css("display", "inline");
  var animationAudio = document.getElementById("animation-corner-audio-" + wrongResponseIndexArray[index]);
  audioPlaying = true;
  animationAudio.play();
  setTimeout(function() { stopWrongResponse(id) }, 2000);
}

function stopWrongResponse(id) {
  $(document.body).find(currentWrongResponseId).css("display", "none");
  $('span#' + id + '.hidden-letter').removeClass('highlight').text(expectedInput);
  celebrationRoutine = false;
  checkingLetter = false;
  setTimeout(function () { readCurrentLetter(id) }, 2000);
}

function initCenterCelebration() {
  celebrationRoutine = true;
  // kick on the corners
  var index = helper.generateRandomNo(0, cornerCelebrationIndexArray.length - 1);
  currentCelebrationId = '.animation-corner#' + cornerCelebrationIndexArray[index];
  $(document.body).find(currentCelebrationId).css("display", "inline");
  // show letter bangs
  $(document.body).find('.letter#letter-bang').addClass("highlight");
  setTimeout( function() {
    $('.game').css('display', 'none');
    $('#center-celebration-row').css('display', 'inline');
    var animationAudio = document.getElementById("center-celebration-audio");
    animationAudio.play();
    setTimeout(function () { celebrationRoutine = false; }, 3000);
  }, 1000);
}

function makeNoise() {
  var audio = document.getElementById("word-audio");
  if (audio) { audio.play(); }
  else { setTimeout(makeNoise, 300) }  // in case still loading, try back in 300ms
}

function readCurrentLetter(id) {
  audioPlaying = true;
  var letterAudio = document.getElementById("letter-audio-" + id);
  letterAudio.play();
  setTimeout(function () { audioPlaying = false }, 1000);
}

function setCurrentWordData(indexStr) {
  currentWordId = indexStr;
  if (wordsUsed.length === 0) { wordsUsed = indexStr }
  else { wordsUsed += "," + indexStr }
}

function postForNewWord() {
  $.ajax({
    url: '/projects/learning-app/spelling/new',
    method: 'POST',
    data: {
      wordId: currentWordId,
      wordsUsed: wordsUsed
    },
    success: function (data) {
      updateWord(data);
    },
    error: function (error) {
      alert(error);
      window.location.href = '/projects/learning-app/spelling'
    }
  });
};

function updateWord(html) {
  if (celebrationRoutine) { setTimeout (function() { updateWord(html); }, 400 ); }
  else {
    $(document.body).find(currentCelebrationId).css("display", "none");
    currentCelebrationId = "";
    $('#center-celebration-row').css('display', 'none');
    $('#game-container').empty().append(html);
    $('.game').css('display', '');
    initNewWord();
  }
}