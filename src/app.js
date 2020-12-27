// global variables
let scores, roundScore, activePlayer, gamePlaying, setValue, currentDices, player1, player2, check, randomPcNumber, diceComputer, dice;
diceComputer = [], sumDiceComputer = 0;
// Controlers 

let DOMstrings = {
    // Buttons
    roll: '.roll',
    hold: '.hold',
    again: '.again',
    player1: '.player1',
    player2: '.player2',
    // inputs
    score: '.getscore',
    // images, gif
    loading: '.loading',
    dice: '.dice'
}

let btn = {
    roll: document.querySelector(DOMstrings.roll),
    hold: document.querySelector(DOMstrings.hold),
    again: document.querySelector(DOMstrings.again),
    player1: document.querySelector(DOMstrings.player1),
    player2: document.querySelector(DOMstrings.player2)
}

let input = {
    score: document.querySelector(DOMstrings.score)
}

let image = {
    loading: document.querySelector(DOMstrings.loading),
    dice: document.querySelector(DOMstrings.dice)
}


//call set player
choosePlayer();

//play audio
function playHold() { 
    document.getElementById('add').play(); 
  } 
  
  function playShake() { 
      setTimeout(function(){
        document.getElementById('shake').pause(); 
      }, 1000)
    document.getElementById('shake').play(); 
  } 

  function playFart() { 
    document.getElementById('fart').play(); 
  } 

  function playWinner() { 
    document.getElementById('winner').play(); 
  } 

document.querySelector('.setvalue').addEventListener('click', function () {
    getValue();
})

function getValue() {
    setValue = event.target.id;
    return setValue;
}

console.log(setValue);

// call init function to set default
init();
btn.player2.addEventListener('click', function () {
    
       
        
        
    

    player2 = 'playing';

    return player2;

});



btn.player1.addEventListener('click', function () {
 $(window).on('load', function () {
            $('#setscoremodal').modal('show');
            
        });
        $('#setscoremodal').modal({
            backdrop: 'static',
            keyboard: false
        });
    player1 = 'playing';
    if (player1 === 'playing') {
        document.querySelector('.player-name-1').innerHTML = 'Computer';
    } else {
        document.querySelector('.player-name-1').innerHTML = 'Player 2';
    }
    
    return player1;
});


// call the function to get score by click


// Click function for roll button ----------------------------------------------start

btn.roll.addEventListener('click', rollFunction);



// roll buton --------------------------------------------------------------------end
//--------------------------------------------------------------------------------------
// change player function
function changePlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    roundScore = 0;
    tripleSix = [];
    currentDices = [];
    diceComputer = [];
    sumDiceComputer = 0;
    // remove elements from div
    removeImg(activePlayer)


    document.querySelector('.current-0').textContent = '0';
    document.querySelector('.current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

    computerRoll();
   
}

// hold function -----------------------------------------------------------------------start

btn.hold.addEventListener('click', holdfunction);

// hold button ----------------------------------------------------------------------------end


// set value and start game buttons and input ---------------------------------------------start
btn.again.addEventListener('click', function () {
    init();


});



// set value and start game buttons and input ----------------------------------------------end
//winner
function winner() {
    document.querySelector('.player-name-' + activePlayer).innerHTML = 'WINNER!!!';
    document.querySelector('.player-name-' + activePlayer).classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winnerpanel');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
}

// defalut settings back
function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    if (setValue > 0) {
        setValue = setValue
    } else {
        setValue = 0;
    }
    diceComputer = [];
    sumDiceComputer = 0;
    tripleSix = [];
    currentDices = [];

    image.dice.display = 'none';
    document.querySelector('.score-0').innerHTML = '0';
    document.querySelector('.score-1').innerHTML = '0';
    document.querySelector('.current-0').innerHTML = '0';
    document.querySelector('.current-1').innerHTML = '0';
    document.querySelector('.player-name-0').innerHTML = 'Player 1';


    if (player1 === 'playing') {
        document.querySelector('.player-name-1').innerHTML = 'Computer';
    } else {
        document.querySelector('.player-name-1').innerHTML = 'Player 2';
    }

    removeImg(0);
    removeImg(1);
    disableClick(false, 'auto');
    document.querySelector('.player-name-0').classList.remove('winner');
    document.querySelector('.player-name-1').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winnerpanel');
    document.querySelector('.player-1-panel').classList.remove('winnerpanel');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-progress-0').style.width = '0%';
    document.querySelector('.player-progress-1').style.width = '0%';
}



function choosePlayer() {
    $(window).on('load', function () {
        $('#chooseplayer').modal('show');
        
    });
    $('#chooseplayer').modal({
        backdrop: 'static',
        keyboard: false
    });
    
    
}




// remove element function
function removeElement(id) {
    var elem = document.querySelector(id);
    return elem.parentNode.removeChild(elem);
}

function removeImg(img) {
    const myNode = document.querySelector('.current-box-' + img);
    return myNode.textContent = '';
}

// calculater progressbar
function progressbar(finished, value) {
    let percentage = (finished / value) * 100;
    return percentage;
}



function rollFunction() {

    if (gamePlaying) {
        playShake();
        // set loading gif to block and dice img to none
        image.loading.style.display = 'block';
        image.dice.style.display = 'none';

        setTimeout(function () {

            //random number
            dice = Math.floor(Math.random() * 8) + 1;
            if (activePlayer === 1 && player1 === 'playing' && dice <= 6) {
                diceComputer.push(dice);
            }
            // if six push to de array
            if (dice === 6) {
                tripleSix.push(dice);
            }

            // set display none for loading gif after 1 second
            image.loading.style.display = 'none';


            // set image to block
            image.dice.style.display = 'block';
            image.dice.src = 'img/dice/dice-' + dice + '.png';

            // hide modal dice after settimeout
            $(document).ready(function () {
                setTimeout(function () {
                    $('#loading').modal('hide');
                }, 1000); // milliseconds
            });

            //check the roll dices
            if (dice !== 7 && dice !== 8 && tripleSix.length < 3) {
                // add image under curretn number -------- start ----------
                currentDices.push('img/dice/dice-' + dice + '.png');
                let curC = document.querySelector('.current-box-' + activePlayer);
                let img = document.createElement('img');
                for (let i = 0; i < currentDices.length; i++) {
                    img.src = currentDices[i];
                    img.className = 'fade-dice currentdice-' + activePlayer + ' currentdice';
                    curC.appendChild(img);
                }
                // --------------------- end -----------------------
                roundScore += dice;
                document.querySelector('.current-' + activePlayer).textContent = roundScore;

            } else {
                image.dice.src = 'img/dice/dice-' + dice + '.png';
                currentDices.push('img/dice/dice-' + dice + '.png');
                let curC = document.querySelector('.current-box-' + activePlayer);
                let img = document.createElement('img');
                for (let i = 0; i < currentDices.length; i++) {
                    img.src = currentDices[i];
                    img.className = 'fade-dice currentdice-' + activePlayer + ' currentdice';
                    curC.appendChild(img);
                }
                playFart();
                setTimeout(function () {
                    
                    disableClick(false, 'auto');
                    changePlayer();
                }, 1000)


            }

        }, 1000);
    } else {
        image.dice.style.display = 'none';
    }
}


function holdfunction() {
    if (gamePlaying) {
        playHold();
        disableClick(false, 'auto');
        // get value


        //add score to the array
        scores[activePlayer] += roundScore;
        // prgressbar
        document.querySelector('.player-progress-' + activePlayer).style.width = progressbar(scores[activePlayer], setValue) + '%';

        // print score
        document.querySelector('.score-' + activePlayer).textContent = scores[activePlayer];
        if (setValue <= scores[activePlayer]) {
            playWinner();
            winner();
            gamePlaying = false;

        } else {
            changePlayer();
        }
    }


}


function computerRoll() {
    if (activePlayer === 1 && player1 === 'playing') {
        disableClick(true, 'none');
        randomPcNumber =  Math.floor(Math.random() * 2);
        

        sumDiceComputer = diceComputer.reduce(function(a, b){
            return a + b;
        }, 0);
        
        function getDifferent() {
            a = setValue - scores[1];
            return a;
        }
        
        
        



        rollFunction()
        if(activePlayer === 1 && player1 === 'playing' ) {
            if (randomPcNumber === 0 || getDifferent()  < sumDiceComputer) {
                setTimeout(holdfunction, 1800);
            } else if (dice !== 7 && dice !== 8 && tripleSix.length < 3) {
                setTimeout(function () {
    
                    setTimeout(computerRoll, 2000);
    
                }, 1800);
            }
        }
        


    }
}

function disableClick(set1, set2) {
    document.getElementById("roll").disabled = set1;
    document.querySelector(DOMstrings.roll).style.pointerEvents = set2;
    document.getElementById("hold").disabled = set1;
    document.querySelector(DOMstrings.hold).style.pointerEvents = set2;
  }

// for modals
