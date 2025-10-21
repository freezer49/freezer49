// Step 1
function askNumber() {
  const input = prompt('Input your number');
  const inputNumber = Number(input);
  console.log('askNumber log', inputNumber);
  return inputNumber;
}

// Step 2
function didIWin(givenNumber) {
  const numberToGuess = 22;

  if (givenNumber === numberToGuess) {
    alert('Bravo ! Vous avez deviné le nombre !');
  } else if (givenNumber < numberToGuess) {
    alert('Plus grand !');
  } else {
    alert('Plus petit !');
  }
}

const givenNumber = askNumber();
console.log('givenNumber', givenNumber);
didIWin(givenNumber)


/// Jusqua l'étape 4 