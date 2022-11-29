// ***************************Task 1***********************************
// 1)Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.

const body = document.querySelector('body');
const button = document.createElement('button');
const par = document.createElement('p');
const div1 = document.createElement('div');
const task1P = document.createElement('p');

button.innerText = 'Show-hide button';
button.style.margin = '5px 5px 10px 5px';
button.style.cursor = 'pointer';
par.innerText = 'Show-hide paragraph';
par.style.margin = '5px 0 10px 5px';
body.style.backgroundColor = 'lightblue';

task1P.innerText = 'Task 1';
task1P.style.fontWeight = 'bold';
task1P.style.fontSize = '20px';
div1.style.display = 'inline-block';
div1.style.border = '1px solid black';
div1.style.margin = '5px 0 0 5px';
div1.style.borderRadius = '5px';
div1.style.padding = '3px';

button.style.fontSize = '20px';
button.style.padding = '5px';
button.style.borderRadius = '5px';

button.addEventListener('click', () => {
  if (par.style.display === 'none') {
    par.style.display = 'block';
  } else {
    par.style.display = 'none';
  }
});
div1.append(task1P, button, par);

// ***********************Task 2**************************************
// 2)Создайте массив, содержащий названия цветов. На основе этого массива создайте список. При наведении на один из пунктов должен поменяться цвет фона всего документа на данный цвет.

let colorArr = [
  'Red',
  'Green',
  'Lightblue',
  'Pink',
  'Yellow',
  'Orange',
  'Brown',
];

let ul = document.createElement('ul');

ul.style.margin = '25px 0 5px 25px';
ul.style.listStyle = ' none';
ul.style.display = 'flex';
const div2 = document.createElement('div');
div2.style.display = 'flex';
const ulDiv = document.createElement('div');
const task2P = document.createElement('p');
task2P.innerText = 'Task 2';
task2P.style.fontWeight = 'bold';
task2P.style.fontSize = '20px';
task2P.style.margin = '45px 0 0 155px';

for (let i = 0; i < colorArr.length; i++) {
  let li = document.createElement('li');
  li.innerText = colorArr[i];
  ul.append(li);
  li.style.padding = '25px 0 0 0';
  li.style.cursor = 'pointer';
  li.style.width = '95px';
  li.style.height = '80px';
  li.style.fontSize = '20px';
  li.style.border = '1px solid black';
  li.style.borderRadius = '5px';
  li.style.textAlign = 'center';
  li.style.backgroundColor = colorArr[i];
  li.style.marginLeft = '10px';

  li.addEventListener('mouseover', () => {
    const text = li.textContent;
    body.style.backgroundColor = text;
  });
}
div2.append(div1, task2P, ul);

// ***********************Task 3***************************************
// 3)Создайте массив с Вашими любимыми фильмами. Напишите цикл, который создает заголовки на основе этого массива. При клике на заголовок внизу появляется краткое описание данного фильма.

const movies = [
  {
    name: 'The Prestige',
    image:
      'https://de.web.img3.acsta.net/medias/nmedia/18/63/83/94/18717407.jpg',
    year: 2006,
    description:
      'After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.',
  },
  {
    name: 'The Art of Racing in the Rain',
    image:
      'https://m.media-amazon.com/images/M/MV5BZjU5ZTYzM2MtNDNhYi00YjU1LWE4MzEtODc0NmNlODZlMjlhXkEyXkFqcGdeQXVyNjg3MDMxNzU@._V1_.jpg',
    year: 2019,
    description:
      'Through his bond with his owner, aspiring Formula One race car driver Denny, golden retriever Enzo learns that the techniques needed on the racetrack can also be used to successfully navigate the journey of life.',
  },
  {
    name: 'The Green Mile',
    image:
      'https://upload.wikimedia.org/wikipedia/en/e/e2/The_Green_Mile_%28movie_poster%29.jpg',
    year: 1999,
    description:
      'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
  },
];

const div3 = document.createElement('div');
const task3P = document.createElement('p');
task3P.innerText = 'Task 3';
task3P.style.fontWeight = 'bold';
task3P.style.fontSize = '20px';
task3P.style.margin = '0 0 0 780px';
div3.append(task3P);
movies.forEach(({ name, image, year, description }) => {
  const movieTitle = document.createElement('h2');
  const movieImg = document.createElement('img');
  const movieYear = document.createElement('p');
  const movieDescription = document.createElement('p');

  movieTitle.innerText = ` ${name}`;
  movieYear.innerText = `Year: ${year}`;
  movieDescription.innerText = ` ${description}`;
  movieDescription.classList.add('show');
  movieDescription.classList.add('hide');

  movieImg.style.float = 'left';

  movieImg.style.marginRight = '15px';
  movieImg.style.marginLeft = '15px';
  movieTitle.style.marginLeft = '15px';
  movieImg.style.borderRadius = '10px';
  movieImg.style.cursor = 'pointer';
  movieTitle.style.cursor = 'pointer';

  movieDescription.classList.add('movie_description');

  movieImg.setAttribute('src', image);
  movieImg.setAttribute('alt', 'movie');
  movieImg.style.width = '60px';

  movieTitle.addEventListener('mouseover', () => {
    movieDescription.classList.toggle('hide');
  });
  movieImg.addEventListener('mouseover', () => {
    movieDescription.classList.toggle('hide');
  });
  movieTitle.addEventListener('mouseout', () => {
    movieDescription.classList.toggle('hide');
  });
  movieImg.addEventListener('mouseout', () => {
    movieDescription.classList.toggle('hide');
  });

  div3.append(movieTitle, movieImg, movieYear, movieDescription);
});

// **************************Task4-5******************************
// 4)Клавиатура на Вашем экране! Создайте кнопки(button) со всеми английскими буквами. Застилизуйте их так, чтобы на экране была копия клавиатуры (только английские буквы, цвета и размеры кнопок выбирайте на свой вкус).
// Доработайте предыдущий скрипт так, чтобы при нажатии на кнопку ,сверху видеть буквы, на которые нажимает пользователь(имитация клавиатуры). Подсказка: можете использовать параграф.

const keyboard = "1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./".split('');

const div4 = document.createElement('div');
const task4P = document.createElement('p');
const letterP = document.createElement('p');
letterP.classList.add('letter_p');

div4.classList.add('keyboard');

for (let item of keyboard) {
  const btn = document.createElement('button');
  btn.innerText = item.toUpperCase();
  div4.append(btn);
  btn.classList.add('btn');

  btn.addEventListener('click', () => {
    letterP.innerText = item;
    letterP.style.opacity = '1';
  });
}

task4P.innerText = 'Task 4-5';
task4P.style.fontWeight = 'bold';
task4P.style.fontSize = '20px';
task4P.style.margin = '0 0 0 780px';

body.append(div2, div3, task4P, div4, letterP);
