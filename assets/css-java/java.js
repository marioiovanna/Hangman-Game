$(document).ready(function(){

  console.log('no quiero esto');

  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];

  var words = ['a', 'ability', 'able', 'account', 'across', 'act', 'action', 'activity', 'actually', 'add', 'address', 'administration', 'admit', 'adult', 'affect', 'after', 'again', 'air', 'all'];

  var guessesMade = [];
  var wins = 0;
  var losses = 0;
  var lives = 12;
  var wordToGuess = [];
  var guessArray = [];

  function resetGame(){
    lives = 12;
    guessesMade = [];
    guessArray = [];
    wordToGuess = words[Math.floor(Math.random() * words.length)].toLowerCase().split('');
    for(let i=0; i<wordToGuess.length; i++){
      guessArray.push("_");
    }
    refreshView();
  }

  function refreshView(){
    $("#guessWord").text(guessArray.join(''));
    $("#guessesMade").text("guesses made: "+guessesMade.join(' '));
    $("#lives").text("lives: "+lives);
    $("#wins").text("wins: "+wins);
    $("#losses").text("losses: "+losses);
  }

  document.onkeyup = function(event) {

    console.log('this works');

  	var userGuess = event.key;

    var checker = letters.indexOf(userGuess);

    console.log(userGuess);
    console.log(checker);

      if(checker >= 0){

      if(wordToGuess.indexOf(userGuess) >= 0){
        for(let i=0; i<wordToGuess.length; i++){
          if(userGuess === wordToGuess[i]){
            guessArray[i] = userGuess;
          }
        }
      }

      if(wordToGuess.join('') === guessArray.join('')){
        wins++;
        resetGame();
      }
      else if(lives <= 0){
        losses++;
        resetGame();
      }
      else{
        lives--;
        guessesMade.push(userGuess);
        refreshView();
      }
    }
  };

  resetGame();

});