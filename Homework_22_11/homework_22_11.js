// ***************************Task 1***********************************
// 1)Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.

const body = document.querySelector('body');
const button = document.createElement('button');
const par = document.createElement('p');
const div1 = document.createElement('div');
const task1P = document.createElement('p');

button.innerText = 'Show-hide button';
button.classList.add('task1_button');

par.innerText = 'Show-hide paragraph';
par.classList.add('task1_par');

task1P.innerText = 'Task 1';
task1P.classList.add('task1_p');

div1.classList.add('task1_div');

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

ul.classList.add('task2_ul');

const div2 = document.createElement('div');

div2.classList.add('task2_div');

const ulDiv = document.createElement('div');
const task2P = document.createElement('p');

task2P.innerText = 'Task 2';
task2P.classList.add('task2_p');

for (let i = 0; i < colorArr.length; i++) {
  let li = document.createElement('li');
  li.innerText = colorArr[i];
  ul.append(li);
  li.classList.add('task2_li');
  li.style.backgroundColor = colorArr[i];

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

task3P.classList.add('task3_p');
task3P.innerText = 'Task 3';
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

  movieImg.classList.add('task3_movieImg');
  movieTitle.classList.add('task3_movieTitle');

  movieDescription.classList.add('movie_description');

  movieImg.setAttribute('src', image);
  movieImg.setAttribute('alt', 'movie');

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
task4P.classList.add('task4_p');

body.append(div2, div3, task4P, div4, letterP);
