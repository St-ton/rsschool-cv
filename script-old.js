const btn = document.querySelector('.nav-list'); // слушаем пункты меню
btn.addEventListener('click', changeColorText); // запускаем функцию смены цвеат при клике пункта меню

// const allClass = [
//   ...new Set(
//     [...document.all]
//       .map(i => [...i.classList])
//       .flat(Infinity)
//       .sort()
//   ),
// ]; // считываем все классы со страницы

function changeColorText(event) {
  const navItem = event.target.textContent; // получаем название пункта меню, который кликнули
  //const editClass = allClass.filter(elem => elem === navItem); // ищем во всех классах страницы такое название как пунтк меню
  const title = document.querySelector(`.${navItem}`); //ищем в документе такой класс, как пункт меню
  title.classList.add('active'); //добавляем к нему дополнительный класс с цветом

  setTimeout(() => {
    // задержка перед удалением выделения цветом
    title.classList.remove('active');
  }, 1500);
}
