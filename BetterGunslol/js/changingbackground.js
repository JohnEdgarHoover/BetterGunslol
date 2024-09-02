//You can change this 👇
document.addEventListener('DOMContentLoaded', function () {
    var mediaPairs = [
        { video: '/video/', audio: '/audio/' },
        { video: '/video/', audio: '/audio/' },
        { video: '/video/', audio: '/audio/' },
        { video: '/video/', audio: '/audio/' },
        { video: '/video/', audio: '/audio/' }
    ];
    function cookie(name, value) {
        if (value !== undefined) {
            document.cookie = `${name}=${value}; path=/`;
        } else {
            var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            return match ? match[2] : undefined;
        }
    }
    var currentIndex = parseInt(cookie('currentIndex')) || 0;
    function updateMedia() {
        var pair = mediaPairs[currentIndex];
        document.getElementById('bg-video').src = pair.video;
        document.getElementById('bg-music').src = pair.audio;
        currentIndex = (currentIndex + 1) % mediaPairs.length;
        cookie('currentIndex', currentIndex);
    }
    updateMedia();
    document.getElementById('bg-video').addEventListener('ended', updateMedia);
});
