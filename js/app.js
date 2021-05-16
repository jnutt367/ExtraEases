gsap.from(".rectangles", {
    yPercent: 100,
    ease: "expo.easeInOut",
    duration: 5,
    stagger: {
        amount: 1,
        from: "random"
    },
    scrollTrigger: "#piggies"
});

const animationIsOkay = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
).matches;

// turn this on to prevent animation for people who don't want it
if (animationIsOkay) {
    gsap.from("#wobble", {
        xPercent: 100,
        yPercent: 100,
        duration: 5,
        fill: "blue",
        scrollTrigger: {
            trigger: "#piggies",
            pin: true,
            scrub: 1
        }
    });
}

gsap.to("#second-wobble", {
    xPercent: 100,
    yPercent: 100,
    duration: 5,
    fill: "white",
    scrollTrigger: {
        trigger: "#wizard",
        pin: true,
        scrub: 1
    }
});