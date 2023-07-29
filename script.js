var tl = gsap.timeline()

tl.from("#nav ",{
    y:-50,
    duration:0.8,
    delay:0.3,
    stagger:0.3,
    opacity:0
})
// gsap.from(".desii",{
//     y:100,
//     scale:0,
//     delay:2,
//     duration:2,
//     opacity:0,
//     stagger:1,
//     scrollTrigger:{
//         trigger:".desii",
//         scroll: ".desii",   
//         start: "top 40%",
//         end:"top 10%",
//         scrub:true
//     }
// });