// Cursor mustafauncuoglu
var mouse = { x: 0, y: 0 };
var pos = { x: 0, y: 0 };
var dotSensitivity = 0.5;
var ballSensitivity = 0.15;
var active = false;
var dot = document.getElementById("dot");
var ball = document.getElementById("ball");

gsap.set(dot, { xPercent: -50, yPercent: -50 });
gsap.set(ball, { xPercent: -50, yPercent: -50 });

document.addEventListener("mousemove", mouseMove);

function mouseMove(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
    gsap.to(dot, { duration: dotSensitivity, x: mouse.x, y: mouse.y });
}

gsap.ticker.add(updatePosition);

function updatePosition() {
    if (!active) {
        pos.x += (mouse.x - pos.x) * ballSensitivity;
        pos.y += (mouse.y - pos.y) * ballSensitivity;

        gsap.set(ball, { x: pos.x, y: pos.y });
    }
}

document.querySelectorAll(".icon-wrap").forEach(function (element) {
    element.addEventListener("mouseenter", function (e) {
        gsap.to(this, { duration: 0.3, scale: 2 });
        gsap.to(ball, { duration: 0.3, scale: 2 });
        active = true;
    });

    element.addEventListener("mouseleave", function (e) {
        gsap.to(this, { duration: 0.3, scale: 1 });
        gsap.to(ball, { duration: 0.3, scale: 1 });
        gsap.to(this.querySelector(".button-icon"), { duration: 0.3, x: 0, y: 0 });
        active = false;
    });

    element.addEventListener("mousemove", function (e) {
        parallaxCursor(e, this, 3);
        callParallax(e, this);
    });
});

function callParallax(e, parent) {
    parallaxIt(e, parent, parent.querySelector(".button-icon"), 10);
}

function parallaxIt(e, parent, target, movement) {
    var boundingRect = parent.getBoundingClientRect();
    var relX = e.pageX - boundingRect.left;
    var relY = e.pageY - boundingRect.top;

    gsap.to(target, {
        duration: 0.3,
        x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
        y: (relY - boundingRect.height / 2) / boundingRect.height * movement,
        ease: "power2.out"
    });
}

function parallaxCursor(e, parent, movement) {
    var rect = parent.getBoundingClientRect();
    var relX = e.pageX - rect.left;
    var relY = e.pageY - rect.top;
    pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
    pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
    gsap.to(ball, { duration: 0.3, x: pos.x, y: pos.y });
}

function setDotSensitivity(newSensitivity) {
    dotSensitivity = newSensitivity;
}

function setBallSensitivity(newSensitivity) {
    ballSensitivity = newSensitivity;
}

setDotSensitivity(0.3);
setBallSensitivity(0.1);