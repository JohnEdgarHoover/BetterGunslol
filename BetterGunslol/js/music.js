document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('stop-music');
    var muteIcon = document.getElementById('mute-icon');
    var unmuteIcon = document.getElementById('unmute-icon');
    var audio = document.getElementById('bg-music');
    function updateIcons() {
        if (audio.muted) {
            muteIcon.style.display = 'inline';
            unmuteIcon.style.display = 'none';
        } else {
            muteIcon.style.display = 'none';
            unmuteIcon.style.display = 'inline';
        }
    }
    updateIcons();
    button.addEventListener('click', function () {
        if (audio.muted) {
            audio.muted = false;
            audio.play();
        } else {
            audio.muted = true;
        }
        updateIcons();
    });
    audio.addEventListener('volumechange', function () {
        updateIcons();
    });
});
