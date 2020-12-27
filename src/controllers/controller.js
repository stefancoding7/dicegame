export  function rollFunction() {

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



