const categoryListEl = document.querySelector('#categories');
const categoryList = [...categoryListEl.children];
console.log(`В списке ${categoryList.length} категории.`);

const infoNameCategory = categoryList.forEach(el => {
  console.log(`Категория: ${el.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${el.lastElementChild.children.length}`);
});
