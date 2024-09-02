document.addEventListener('DOMContentLoaded', function () {
    const avatar = document.querySelector('.avatar');
    const container = document.querySelector('.avatar-container');
    let mouse = { x: 0, y: 0 };
    let pos = { x: 0, y: 0 };
    const sensitivity = 0.1;

    container.addEventListener('mousemove', (e) => {
        mouse.x = e.pageX - container.offsetLeft;
        mouse.y = e.pageY - container.offsetTop;
    });

    gsap.ticker.add(() => {
        pos.x += (mouse.x - pos.x) * sensitivity;
        pos.y += (mouse.y - pos.y) * sensitivity;
        gsap.to(avatar, { duration: 0.1, x: pos.x - avatar.offsetWidth / 2, y: pos.y - avatar.offsetHeight / 2 });
    });
});