var spelers = {
    1: null,
    2: null,
};
var huidigeSpeler = 1;

function gewonnen() {
    if ((spelers[1] == 'rock' && spelers[2] == 'scissors') ||
        (spelers[1] == 'paper' && spelers[2] == 'rock') ||
        (spelers[1] == 'scissors' && spelers[2] == 'paper')) {
        return 1;
    } else {
        return 2;
    }
}

function set(optie) {
    spelers[huidigeSpeler] = optie;
    huidigeSpeler++;

    // Beide spelers hebben gekozen.
    if (huidigeSpeler == 3) {
        console.log(spelers);
        document.body.innerHTML = `<h1>Speler ${gewonnen()} heeft gewonnen!</h1>`;
    } else {
        document.querySelector('h1').innerText = `Speler ${huidigeSpeler}, kies je optie!`;
    }
}

document.querySelector('h1').innerText = `Speler ${huidigeSpeler}, kies je optie!`;