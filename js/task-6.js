const inputElement = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxesContainer.appendChild(fragment);
}

createButton.addEventListener("click", () => {
  const amount = Number(inputElement.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputElement.value = "";
  }
});

destroyButton.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
});
