const inputEl = document.querySelector('#validation-input');
const dataLength = inputEl.getAttribute('data-length');
inputEl.addEventListener('blur', onLossFocusInput);

function onLossFocusInput() {
  if (dataLength != inputEl.value.length) {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
    
  }
}

