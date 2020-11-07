//Есть 3 input. Выводить в textarea содержимое всех полей ввода через запятую. Использовать setInterval.

inputList = document.querySelectorAll("input");

function setTextareaValue() {
  inputValues = [];
  inputList.forEach((item) => {
    if (item.value !== "") {
      inputValues.push(item.value);
    }
  });

  textareaValue = inputValues.join(", ");

  document.querySelector("textarea").value = textareaValue;
}

setInterval(setTextareaValue, 2000);
