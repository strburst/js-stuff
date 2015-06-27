
function Card(suit, val) {
    this.suit = suit;
    this.val = val;
}
Card.prototype.toString = function() {
    return this.val + this.suit;
}
Card.prototype.plus = function(other) {
    return this.val + other.val;
}

function sumCards() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i].val;
    }
    return result;
}

// Generate a single, standard deck
var deck = function() {
    var suits = '♠ ♥ ♦ ♣'.split(' ');
    var values = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split(' ');
    var result = [];
    suits.forEach(function(suitElem) {
        values.forEach(function(valElem) {
            result.push(new Card(suitElem, valElem));
        });
    });
    return result;
}();

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Shuffle elements of an arbitrary list
function shuffle(arr) {
    function swap(arr, a, b) {
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    for (var i = 0; i < arr.length; i++) {
        var randomIndex = randInt(0, arr.length);
        swap(arr, i, randomIndex);
    }
}

// Get a random element from an array
function getCard(arr) {
    arr = arr || deck;
    return arr[randInt(0, deck.length)];
}

function hit() {
    alert('hi');
}

// shuffle(deck);

// function consoleGame() {
//     var readline = require('readline');
//
//     var rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//
//     function newTurn() {
//         var playerCards = [getCard(deck), getCard(deck)];
//     }
//
//     rl.question("?> ", function(response) {
//         rl.close();
//     });
// }
