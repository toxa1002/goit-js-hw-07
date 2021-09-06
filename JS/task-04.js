const countBtnMinusEl = document.querySelector('#counter').firstElementChild;
console.log(countBtnMinusEl);
const countBtnPlusEl = document.querySelector('#counter').lastElementChild;
console.log(countBtnPlusEl);
const resultBtnEl = document.querySelector('#value');
console.log(resultBtnEl);
countBtnMinusEl.addEventListener('click', decrement);
let counterValue = 0;

countBtnPlusEl.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  resultBtnEl.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  resultBtnEl.textContent = counterValue;
}
