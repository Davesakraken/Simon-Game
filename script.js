let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

//random number generator between 0-3..
function buttonSeqRandomizer() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
}
