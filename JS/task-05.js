const inputFormEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
inputFormEl.addEventListener('input', inputName);

function inputName(line) {
  line.currentTarget.value != ''
    ? (outputEl.textContent = line.currentTarget.value)
    : (outputEl.textContent = 'незнакомец');
}
