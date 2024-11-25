document.addEventListener('DOMContentLoaded', function () {
    var stopMusicButton = document.getElementById('stop-music');
    stopMusicButton.classList.add('show');
    setTimeout(function () {
        document.querySelector('.bg-video').classList.add('normal');
    }, 500);

    var bgMusic = document.getElementById('bg-music');
    bgMusic.volume = 0.01;
    var volumeIncreaseInterval = setInterval(function () {
        if (bgMusic.volume < 1) {
            bgMusic.volume += 0.01;
        } else {
            clearInterval(volumeIncreaseInterval);
        }
    }, 1000);
});