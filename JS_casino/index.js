const guessNumForm = document.querySelector('.guessNumber');
const guessNumInput = document.querySelector('.guessNumber input');
const maxNumInput = document.querySelector('.maxNumber input');
const hidden = document.querySelector('.hidden');
const chosenNum = document.querySelector('#result h3:first-child');
const result = document.querySelector('#result h3:last-child');

const HIDDEN_CLASSNAME = 'hidden';

function onGuessNumForm(event) {
  event.preventDefault();
  const guessNumValue = Number(guessNumInput.value);
  const randomNum = Math.floor(Math.random() * maxNumInput.value);

  getResult(guessNumValue, randomNum);
}

function getResult(guessNumValue, randomNum) {
  hidden.classList.remove(HIDDEN_CLASSNAME);
  chosenNum.innerText = `You chose: ${guessNumValue}, the machine chose: ${randomNum}`;
  if (guessNumValue === randomNum) {
    result.innerText = 'You won !';
  } else if (guessNumValue !== randomNum) {
    result.innerText = 'You lost !';
  }
}

guessNumForm.addEventListener('submit', onGuessNumForm);
