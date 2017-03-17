// for panel1-h1-text
var writeHeadSpeed = 100;
var pauseTime = 500;
var headerStr1 = "Hi ther";
var headerStr2 = "ello.";
setTimeout(function () {
  $('#panel1-h1-text').writeText(headerStr1, writeHeadSpeed);
}, 2000);
setTimeout(function () {
  $('#panel1-h1-text').eraseChars(headerStr1.length - 1, writeHeadSpeed);
}, ((headerStr1.length * writeHeadSpeed) + pauseTime) + 2000);
setTimeout(function () {
  $('#panel1-h1-text').writeText(headerStr2, writeHeadSpeed);
}, (((headerStr1.length * writeHeadSpeed) * 2) + (pauseTime * 2)) + 2000);

// for panel1-content
var writeContentSpeed = 70;
var introStr = "Welcome to Dmitri's Playground. If this is your first time here,"
  + " no doubt you're confused. I wish I could help with that, but I"
  + " can't. I'm on the same page unfortunately.";
setTimeout(function () {
  $('#panel1-content').writeText(introStr, writeContentSpeed);
}, 2000);

