// Объявляем глобальные переменные
let containHidden = document.querySelector(".collapsible__action--hidden"); //содержит часть кнопки "Показать содержимое"
let containVisible = document.querySelector(".collapsible__action--visible"); //содержит часть кнопки "Скрыть содержимое"
let visibleContent = document.querySelector(".collapsible__content"); //содержит ссылку на содержание скрывающегося контента

// В начальном состоянии при запуске страницы скрываем часть кнопки "Скрыть содержимое" и текст сообщения
function hiddenCollapsibleAction() {
  containVisible.style.display = "none";
  visibleContent.animate([{
    opacity: "0",
  }, {
    opacity: "0",
  }], {
    direction: "normal",
    duration: Infinity,
  });
}
hiddenCollapsibleAction();

//Вешаем обработчик клика на кнопку
const clickToHide = document.querySelector('.collapsible__button');
clickToHide.addEventListener("click", hideVisibleElem);

// Функция добавления / удаления текста в кнопке и скрытия/появления текста в сообщении
function hideVisibleElem() {

  if (containVisible.style.display === "block") {
    containVisible.style.display = "none";
    containHidden.style.display = "block";
    visibleContent.animate([{
      opacity: "0",
    }, {
      opacity: "0",
    }], {
      direction: "normal",
      duration: Infinity,
    });

  } else {
    containVisible.style.display = "block";
    containHidden.style.display = "none";
    visibleContent.animate([{
      opacity: "1",
    }, {
      opacity: "1",
    }], {
      direction: "normal",
      duration: Infinity,
    });
  }
}