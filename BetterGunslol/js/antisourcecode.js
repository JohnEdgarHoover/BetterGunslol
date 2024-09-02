window.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 123) {
            e.preventDefault();
            alert('Code source non disponible / sur mon Github oui');
        }
    });
    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        alert('Right-click context menu is disabled on this site.');
    });
});