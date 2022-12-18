const btn = document.querySelector('.nav-list'); // слушаем пункты меню
btn.addEventListener('click', changeColorText); // запускаем функцию смены цветa при клике пункта меню

function changeColorText(event) {
  const navItem = event.target.textContent; // получаем название пункта меню, который кликнули
  const title = document.querySelector(`.${navItem}`); //ищем в документе такой класс, как пункт меню
  title.classList.add('active'); //добавляем к нему дополнительный класс с цветом

  setTimeout(() => {
    // делаем задержку перед удалением выделения цветом
    title.classList.remove('active');
  }, 1500);
}
