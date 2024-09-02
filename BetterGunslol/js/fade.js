function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
        rect.top >= -0.5 * windowHeight &&
        rect.bottom <= 1.5 * windowHeight
    );
}

var lastScrollTop = 0;
window.addEventListener('scroll', function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        var elementsToShow = document.querySelectorAll('.fade-in-out');
        elementsToShow.forEach(function (element) {
            if (isInViewport(element)) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        });
    } else {
        var elementsToShow = document.querySelectorAll('.fade-in-out');
        elementsToShow.forEach(function (element) {
            if (element.id === 'header-extradiv') {
                element.classList.add('show');
            } else if (isInViewport(element)) {
                element.classList.add('show');
                element.classList.add('no-transition');
                setTimeout(function () {
                    element.classList.remove('no-transition');
                }, 1000);
            }
        });
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);

document.addEventListener('DOMContentLoaded', function () {
    const arrowLink = document.querySelector('.scroll-arrow');

    arrowLink.addEventListener('click', function (event) {
        event.preventDefault();
        const headerExtradiv = document.querySelector('.header-extradiv');
        const headerExtradivTop = headerExtradiv.offsetTop;
        window.scrollTo({
            top: headerExtradivTop,
            behavior: 'smooth'
        });
    });
});