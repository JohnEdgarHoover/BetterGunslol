document.addEventListener('DOMContentLoaded', function () {
    var ball = document.getElementById('ball');
    var discordLogo = document.getElementById('discord-logo');
    var githubLogo = document.getElementById('github-logo');
    var avatars = document.querySelectorAll('.avatar');
    var buttons = document.querySelectorAll('.button-link, #stop-music');

    avatars.forEach(function (avatar) {
        avatar.addEventListener('mouseenter', function () {
            gsap.to(ball, { duration: 0.3, scale: 4 });
        });

        avatar.addEventListener('mouseleave', function () {
            gsap.to(ball, { duration: 0.3, scale: 1 });
        });
    });

    buttons.forEach(function (button) {
        button.addEventListener('mouseenter', function () {
            gsap.to(ball, { duration: 0.3, scale: 2.5 });
        });

        button.addEventListener('mouseleave', function () {
            gsap.to(ball, { duration: 0.3, scale: 1 });
        });
    });

    discordLogo.addEventListener('mouseenter', function () {
        gsap.to(ball, { duration: 0.3, scale: 2.5 });
    });

    discordLogo.addEventListener('mouseleave', function () {
        gsap.to(ball, { duration: 0.3, scale: 1 });
    });

    githubLogo.addEventListener('mouseenter', function () {
        gsap.to(ball, { duration: 0.3, scale: 2.5 });
    });

    githubLogo.addEventListener('mouseleave', function () {
        gsap.to(ball, { duration: 0.3, scale: 1 });
    });

    var lastMouseMoveEvent;
    document.addEventListener('mousemove', function (event) {
        lastMouseMoveEvent = event;
    });

    function handleMouseMove() {
        if (lastMouseMoveEvent) {
            var mouse = { x: lastMouseMoveEvent.pageX, y: lastMouseMoveEvent.pageY };
            gsap.to(ball, { duration: 0.1, x: mouse.x, y: mouse.y });
            lastMouseMoveEvent = null;
        }
        requestAnimationFrame(handleMouseMove);
    }
    requestAnimationFrame(handleMouseMove);
});
