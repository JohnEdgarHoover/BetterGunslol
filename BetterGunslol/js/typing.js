document.addEventListener('DOMContentLoaded', function() {
    const typingTextContainer = document.querySelector('.typing-text-container');
    const texts = [
        "Welcome to the 3 Mousquetaires site.",
        "Hades, Alka, and DT190 are the developers.",
        "Enjoy your stay and explore our tools!"
    ];
    let index = 0;

    function changeText() {
        typingTextContainer.textContent = texts[index];
        index = (index + 1) % texts.length;
    }

    setInterval(changeText, 4000); // Change le texte toutes les 4 secondes
});
