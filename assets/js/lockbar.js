// lockbar globals
var navbarUnlocked = false;
var unlockRoutineInProgress = false;
var lastUnlockInput = "reset";

// initialiazed by clicking the lock icon
function initUnlockRoutine() {
  if (unlockRoutineInProgress) {
    lockUp();
  }
  else {
    unlockRoutineInProgress = true;
    toggleLockbarElems();
    countdownManager(30);
  }
}

function checkIfLockbarInput() {
  if (!unlockRoutineInProgress) { return false; }
  else {
    var newInput = $("#unlock-input").val();
    if (newInput !== lastUnlockInput) {
      checkUnlockInput(newInput);
      return true;
    }
    else { return false; }
  }
}

function checkUnlockInput() {
  var val = $("#unlock-input").val();
  if (val === "unlock") {
    navbarUnlocked = true;
    showFullNavbar();
    //reset lastUnlockInput
    lastUnlockInput = "reset";
  }
  // update lastUnlockInput
  else { lastUnlockInput = $("#unlock-input").val(); }
}

function countdownManager(timeRemaining) {
  if (!unlockRoutineInProgress) { return; }
  if (timeRemaining < 10) { $('#time-remaining').html('0' + timeRemaining.toString() + 's'); }
  else { $('#time-remaining').html(timeRemaining.toString() + 's'); }
  setTimeout(function () {
    if (timeRemaining > 0) { countdownManager(timeRemaining - 1); }
    else { lockUp(); }
  }, 1000);
}

function lockUp() {
  if (unlockRoutineInProgress) {
    $('#unlock-input').val("");
    toggleLockbarElems("none");
    unlockRoutineInProgress = false;
  }
}

function toggleLockbarElems(displaySet = "") {
  $('#unlock-input-li').css('display', displaySet);
  $('#countdown').css('display', displaySet);
}

function showFullNavbar() {
  alert("Feature in development!");
}
