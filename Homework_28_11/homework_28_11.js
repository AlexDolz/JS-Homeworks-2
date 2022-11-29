const form = document.querySelector('#form');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const sectionProducts = document.querySelector('#products');

let products = [];
titleInput.setAttribute('required', 'true');
priceInput.setAttribute('required', 'true');

form.addEventListener('submit', event => {
  event.preventDefault();

  products.push({ title: titleInput.value, price: priceInput.value });

  newProducts();

  titleInput.value = '';
  priceInput.value = '';
});

function createNode(title, price) {
  let div = document.createElement('div');
  div.classList.add('product');
  let titleP = document.createElement('p');
  let priceP = document.createElement('p');

  titleP.innerText = title;
  priceP.innerText = price;

  div.append(titleP, priceP);
  sectionProducts.append(div);
  div.addEventListener('dblclick', () => {
    alert(title);
  });
}

function newProducts() {
  sectionProducts.innerHTML = '';
  for (let i = 0; i < products.length; i++) {
    createNode(products[i].title, products[i].price);
  }
}

// 1)К сегодняшней форме добавьте кнопку. При клике на кнопку с помощью alert выводите итоговую сумму всех товаров.
const sumBtn = document.querySelector('#sum_btn');
sumBtn.addEventListener('click', () => {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += +products[i].price;
  }
  alert(sum);
});

// 2)Создайте input для ввода пароля. Рядом с input-ом добавьте так же кнопку. При первом клике на кнопку текст должен скрыться, а при повторном нажатии должен появиться обратно.

const passBtn = document.querySelector('.password_btn');
const passInput = document.querySelector('.password_input');

passBtn.addEventListener('click', () => {
  passInput.type = passInput.type === 'password' ? 'text' : 'password';
});
