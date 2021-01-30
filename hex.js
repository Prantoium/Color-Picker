const hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const copyBtn = document.getElementById('copyBtn');
copyBtn.style.cursor = "pointer";


btn.addEventListener("click", () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++){
        hexColor += hexValue[getRandomNum()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function getRandomNum() {
    return Math.floor(Math.random() * hexValue.length);
}

copyBtn.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const copyValue = color.innerText;

  textarea.value = copyValue;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");

  alert("Color copied to clipboard!!");
});
