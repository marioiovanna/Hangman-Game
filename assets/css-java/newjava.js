var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var words = ['adventure island', 'alone in the dark', 'contra', 'day of tentacle', 'duck hunt', 'eart worm jim', 'exite bike', 'gta', 'jazz jackrabbit', 'mario bros', 'monkey island', 'pacman', 'prince of persia', 'sim city', 'simpsons rpg'];

var win = 0;
var loss = 0;
var lives = 20;
var guessArray = [];
var wordToGuess = [];
var total = 5;
var start = true;

$('.btn-danger').hide();

function reset() {
    lives = 20;
    guessArray = [];
    wordToGuess = words[Math.floor(Math.random() * words.length)].toLowerCase().split('');
    for (let i = 0; i < wordToGuess.length; i++) {
        guessArray.push("  _  ");
    }
    resetviews()
}

function resetviews() {
    $('#guess').empty();
    $('#lives').html(lives);
    $('#won').html(win);
    $(".words").html(guessArray);
}

function waitfornext() {
    start = false;
    setTimeout(function () {
        reset();
        start = true;
    }, 1000);
}

document.onkeyup = function () {

    if (start === true) {

            $('.title').html('*Word to Guess*' + '<hr><br>');
            $(".words").html(guessArray);

            var user = event.key;
            var checker = letters.indexOf(user);

            if (checker >= 0 || wordToGuess.indexOf(user) >= 0) {
                for (let i = 0; i < wordToGuess.length; i++) {
                    if (user === wordToGuess[i]) {
                        guessArray[i] = user;
                        $('.words').html(guessArray);
                    }
                }

                console.log(wordToGuess);

                $('#livesd').html(lives);
                $('#loss').html(loss);
                $('#guess').append(user + ', ');

                if (wordToGuess.join() === guessArray.join()) {
                    win++;
                    $('.words').html(wordToGuess);
                    waitfornext();
                }
                else if (lives <= 0) {
                    loss++;
                    total--;
                    reset();
                }
                else if (wordToGuess !== guessArray) {
                    lives--;
                }
                if (total === -1) {
                    $('.title').html('*GAME OVER*' + '<hr><br>');
                    $('.title').append('<input class="btn btn-danger" type="button" value="Start Over" onClick="history.go(0)">');
                    $('.over').html('<img src="assets/img/over.png" id="overpic">');
                    start = false;
                }
            }
        }
};

reset();

