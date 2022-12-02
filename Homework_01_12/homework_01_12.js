// С помощью javascript создать простой слайдер(карусель) из изображений.
// Использовать только html,css и javascript (никаких сторонних плагинов).

let offset = 0;

const sliderLine = document.querySelector('#slider_line');

const nextBtn = document.querySelector('#slider_next');
const prevBtn = document.querySelector('#slider_prev');

nextBtn.addEventListener('click', () => {
  offset += 356;
  if (offset > 2136) {
    offset = 0;
  }
  sliderLine.style.right = offset + 'px';
});

prevBtn.addEventListener('click', () => {
  offset -= 356;
  if (offset < 0) {
    offset = 2136;
  }
  sliderLine.style.right = offset + 'px';
});
