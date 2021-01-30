const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const copyBtn = document.getElementById("copyBtn");
copyBtn.style.cursor = "pointer";

btn.addEventListener("click", () => {
    const randomNum = getRandomNum();
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
});

function getRandomNum() { 
    return Math.floor(Math.random() * colors.length);
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