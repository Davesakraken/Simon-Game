let buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

//start game keypress..
$(document).one("keydown",function() {
  $('h1').text("level " + level);
  nextSequence();
});

//gameSeq..
function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $('#' + randomChosenColor).fadeOut(100).fadeIn(100);
  let audio = new Audio('sounds/' + randomChosenColor + '.mp3');
  audio.play();
  console.log(gamePattern);
}

//User click event..
$(".btn").click(function () {
  userClickedPattern.push(this.id);
  animateClick(this.id)
  checkAnswer(this.id)
  console.log(userClickedPattern);
});

//click animation and audio..
function animateClick(currentColor) {
  let audio = new Audio("sounds/" + currentColor + ".mp3");
  audio.play();
$("#" + currentColor).addClass("pressed");
setTimeout(function () {
  $("#" + currentColor).removeClass("pressed");
}, 100);
}

function checkAnswer(currentLevel) {
    if (currentLevel == gamePattern) {
      userClickedPattern.length = 0;
      level++
      $('h1').text("level " + level);
      console.log('correct!')
      setTimeout(() => {
        nextSequence()
      }, 1000);
  } else {
    $('h1').text("Game Over!");
    animateClick = null;
  }
}