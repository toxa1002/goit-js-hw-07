const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsColectionEl = document.querySelector('#ingredients');
const arrayEl = [];
ingredients.map(element => {
  const liElement = document.createElement('li');
  liElement.textContent = element;
  arrayEl.push(liElement);
});

ingredientsColectionEl.append(...arrayEl);
