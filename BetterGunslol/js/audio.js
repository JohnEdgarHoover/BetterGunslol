document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('bg-music');
    var stopButton = document.getElementById('stop-music');
    var audioInitialized = false;

    function initializeAudio() {
        if (!audioInitialized) {
            audio.play().then(() => {
                audioInitialized = true;
                console.log('Audio joué après la première interaction');
            }).catch(error => {
                console.log('La lecture audio a été bloquée :', error);
            });
            document.removeEventListener('click', initializeAudio);
            document.removeEventListener('touchstart', initializeAudio);
        }
    }
    document.addEventListener('click', initializeAudio);
    document.addEventListener('touchstart', initializeAudio);

    stopButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play().catch(error => {
                console.log('La lecture audio a été bloquée :', error);
            });
        } else {
            audio.pause();
        }
    });
});

