const app = "I don't do much."

let dodger = $('#dodger')[0];

dodger.style.backgroundColor = '#FF69B4';

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px', '')
  //'100px' => '100'
  let left = parseInt(leftNumbers, 10)
  // '100' => 100
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace('px', '')
  //'100px' => '100'
  let left = parseInt(leftNumbers, 10)
  // '100' => 100
  if (left < 360 ) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft();
  } else if (e.which === 39) {
    moveDodgerRight();
  }
})
