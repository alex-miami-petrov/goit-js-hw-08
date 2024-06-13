const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

inputElement.addEventListener("input", () => {
  const inputValue = inputElement.value.trim();

  if (inputValue) {
    outputElement.textContent = inputValue;
  } else {
    outputElement.textContent = "Anonymous";
  }
});
