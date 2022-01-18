"use strict";

(function () {
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        const obj = {};
        const inputs = Array.from(event.target.querySelectorAll("input"));
        let fieldIsEmpty = false;

        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        inputs.forEach((input) => {
          obj[input.name] = input.value;
          if (!input.value) {
            fieldIsEmpty = true;
          }
        });

        if (fieldIsEmpty) {
          form.classList.add("was-validated");
          return;
        }
        form.classList.remove("was-validated");

        createElement(obj);
        event.target.reset();
      },
      false
    );
  });

  function createElement(elementData) {
    const div = document.createElement("div");
    div.classList.add("recordsInformation");
    div.innerHTML = JSON.stringify(elementData);

    document.querySelector(".showing").append(div);
  }
})();

// Сделать форму в 2 полями (заголовок и описание)
// при сабмите формы собрать данные их этих input в объект
// после чего очистить форму
// С левой стороны вывести блок с этими данными
// при повторном сабмите формы с данными создавать еще один блок с данными
// и повторно очищать форму
// если поля пустые то подсветить поле которое пустое красным фоновым цветом
// и как только данные в поле появятся вернуть полю предыдущие стили
// форма должна быть сверстана с помощью bootstrap - form
// Всю инфу по подключению бутстрап вы найдете на главной странице - ссылка
// Остальные элементы тоже можно делать через bootstrap
