var cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
var type = ["♠","♣","♥","♦"];
var game =[];


var $couple = document.getElementById('couple');
var $trio = document.getElementById('trio');
var $quadrumvirate = document.getElementById('quadrumvirate');
var $card01 = document.getElementById('card01');
var $card02 = document.getElementById('card02');
var $card03 = document.getElementById('card03');
var $card04 = document.getElementById('card04');

function makeCards(){
    for (var i=0 ; i < type.length ; i++ ){
        for (var j=0 ; j < cards.length ; j++)
         game.push(cards[j] + type[i]);
    }
    game.length = 52;
    return game ;
};

// function choosingCards(){
    
//     makeCards()
//     var randoms; 
//     var count = 0;
//     var twoCards= [];
//     var FinalCards; 
    
//     for(var i = 0; i < cards.length; i++){
        
//         randoms = Math.floor(Math.random() * cards.length);
        
//         twoCards.push(cards.splice(randoms,1));

//         FinalCards = twoCards.join(" ");
                
//         count++;
        
//         if(couunt > 1){
//             break;
//         }
//     }

//     return FinalCards;
// } 

function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

$couple.onclick = function() {
    game =[];
    $card01.innerHTML = '';
    $card02.innerHTML = '';
    $card03.innerHTML = '';
    $card04.innerHTML = '';

    game = shuffle (makeCards ());
    $card01.innerHTML = '<h3 class="text-center">PLAYER 1</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[0] + '</p>' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' +game[1] + '</p>' + '</div>';
    $card02.innerHTML = '<h3 class="text-center">PLAYER 2</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[2] + '</p>' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[3] + '</p>' + '</div>';
};

$trio.onclick = function() {
    game =[];
    $card01.innerHTML = '';
    $card02.innerHTML = '';
    $card03.innerHTML = '';
    $card04.innerHTML = '';

    game = shuffle (makeCards());
    $card01.innerHTML =  '<h3 class="text-center">PLAYER 1</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[0] + '</p>' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[1] + '</p>' + '</div>';
    $card02.innerHTML =  '<h3 class="text-center">PLAYER 2</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[2] + '</p>' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[3] + '</p>' + '</div>';
    $card03.innerHTML =  '<h3 class="text-center">PLAYER 3</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[4] + '</p>' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[5] + '</p>' + '</div>';
};

$quadrumvirate.onclick = function() {
    game =[];
    $card01.innerHTML = '';
    $card02.innerHTML = '';
    $card03.innerHTML = '';
    $card04.innerHTML = '';

    game = shuffle (makeCards());
    $card01.innerHTML = '<h3 class="text-center">PLAYER 1</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[0] + '</p>' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[1] + '</p>' + '</div>';
    $card02.innerHTML = '<h3 class="text-center">PLAYER 2</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[2] + '</p>' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[3] + '</p>' + '</div>';
    $card03.innerHTML = '<h3 class="text-center">PLAYER 3</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[4] + '</p>' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[5] + '</p>' + '</div>';
    $card04.innerHTML = '<h3 class="text-center">PLAYER 4</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[6] + '</p>' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[7] + '</p>' + '</div>';
};

// $couple.onclick = function() {
//     var html = "";

//     for(let i = 0; i < $couple.value; i++){
//         html += `<p>  Your Cards : ${choosingCards()} <p>`
//     }
    
//     document.getElementById("couple").innerHTML = html;
// };

// $trio.onclick = function() {
//     var html = "";

//     for(let i = 0; i < $trio.value; i++){
//         html += `<p>  Your Cards : ${choosingCards()} <p>`
//     }
    
//     document.getElementById("trio").innerHTML = html;
// };

// $quadrumvirate.onclick = function() {
//     var html = "";

//     for(let i = 0; i < $quadrumvirate.value; i++){
//         html += `<p>  Your Cards : ${choosingCards()} <p>`
//     }
    
//     document.getElementById("quadrumvirate").innerHTML = html;
// };

// $couple.onclick = function() {
//     var html = "";

//     for(let i = 0; i < $couple.value; i++){
//         html += `<p>  Your Cards : ${choosingCards()} <p>`
//     }
    
//     document.getElementById("card01").innerHTML = html;
// };

// $trio.onclick = function() {
//     var html = "";

//     for(let i = 0; i < $trio.value; i++){
//         html += `<p>  Your Cards : ${choosingCards()} <p>`
//     }
    
//     document.getElementById("trio").innerHTML = html;
// };

// $quadrumvirate.onclick = function() {
//     var html = "";

//     for(let i = 0; i < $quadrumvirate.value; i++){
//         html += `<p>  Your Cards : ${choosingCards()} <p>`
//     }
    
//     document.getElementById("quadrumvirate").innerHTML = html;
// };


