const fontSizeInput = document.getElementById("fontSize");
const speedInput = document.getElementById("speed");
const fontSizeValue = document.getElementById("fontSizeValue");
const speedValue = document.getElementById("speedValue");
const previewButton = document.getElementById("previewBtn");
const ledDisplay = document.getElementById("ledDisplay");

const textColorInput = document.getElementById("textColor");
const bgColorInput = document.getElementById("bgColor");
const textColorPreview = document.getElementById("textColorPreview");
const bgColorPreview = document.getElementById("bgColorPreview");

fontSizeInput.addEventListener("input", () => {
  fontSizeValue.value = fontSizeInput.value;
});

fontSizeValue.addEventListener("input", () => {
  if (fontSizeValue.value >= 20 && fontSizeValue.value <= 100) {
    fontSizeInput.value = fontSizeValue.value;
  }
});

speedInput.addEventListener("input", () => {
  speedValue.value = speedInput.value;
});

speedValue.addEventListener("input", () => {
  if (speedValue.value >= 1 && speedValue.value <= 10) {
    speedInput.value = speedValue.value;
  }
});

textColorInput.addEventListener("input", () => {
  textColorPreview.style.backgroundColor = textColorInput.value;
});

bgColorInput.addEventListener("input", () => {
  bgColorPreview.style.backgroundColor = bgColorInput.value;
});

previewButton.addEventListener("click", () => {
  const ledText = document.getElementById("ledText").value;
  const textColor = textColorInput.value;
  const bgColor = bgColorInput.value;
  const fontSize = fontSizeInput.value;
  const speed = speedInput.value;

  if (!ledText) {
    alert("Please enter a message to display.");
    return;
  }

  ledDisplay.innerHTML = "";
  ledDisplay.style.backgroundColor = bgColor;

  const scrollingText = document.createElement("div");
  scrollingText.className = "scrollingText";
  scrollingText.textContent = ledText;

  scrollingText.style.color = textColor;
  scrollingText.style.fontSize = `${fontSize}px`;
  scrollingText.style.animationDuration = `${11 - speed}s`;

  ledDisplay.appendChild(scrollingText);
});
