const patallax_el = document.querySelectorAll(".parallax")

let xValue = 0,
    yValue = 0;
let rotateDegree = 0;

function update(cursorPosition) {

    patallax_el.forEach((el) => {

        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotatespeed = el.dataset.roation;

        let isInLeft =
            parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue =
            (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

        el.style.transform = ` perspective(2300px) translateZ(${zValue * speedz
            }px) rotateY(${rotateDegree * rotatespeed}deg) translateX(calc(-50% + ${-xValue * speedx
            }px)) translateY(calc(-50% + ${yValue * speedy
            }px))`;
    });
}


update(0)
window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

    update(e.clientX)
})


// Gsap ANimation

let timeline = gsap.timeline();

patallax_el.forEach(el => {
    timeline.from(
        el,
        {
            y: 0,
            duration: 1,
        },
        "1"
    )
})

