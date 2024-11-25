const titleText = "3 Mousquetaires";
const typingDelay = 120;
const titleElement = document.querySelector("title");
let index = 0;

function typeTitle() {
    if (index < titleText.length) {
        titleElement.textContent = titleText.slice(0, index + 1);
        index++;
        setTimeout(typeTitle, typingDelay);
    } else {
        setTimeout(() => {
            index = 0;
            typeTitle();
        }, 2000);
    }
}

typeTitle();