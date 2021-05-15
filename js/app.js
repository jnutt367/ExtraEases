 gsap.from(".rectangles", {
     yPercent: 100,
     ease: "expo.easeInOut",
     duration: 2,
     stagger: {
         amount: 1,
         from: "random"
     },
     scrollTrigger: "#wizard"
 });

 const animationIsOkay = window.matchMedia(
     "(prefers-reduced-motion: no-preference)"
 ).matches;

 // turn this on to prevent animation for people who don't want it
 if (animationIsOkay) {
     gsap.from("#wobble", {
         xPercent: 100,
         yPercent: 100,
         duration: 2,
         scrollTrigger: {
             trigger: "#wizard",
             pin: true,
             scrub: 1
         }
     });
 }