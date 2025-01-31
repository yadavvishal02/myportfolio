console.log('lets write some java script');
document.getElementById("home").addEventListener("click",()=>{
    window.scrollTo(0,0);
    nav.classList.toggle("nav-toggle");
    bars.classList.toggle("fa-times");
})

document.getElementById("about").addEventListener("click",()=>{
    window.scrollTo(0,720);
    nav.classList.toggle("nav-toggle");
    bars.classList.toggle("fa-times");
})
document.querySelector(".btn").addEventListener("click",()=>{
    window.scrollTo(0,720);
})

document.getElementById("skills").addEventListener("click",()=>{
    window.scrollTo(0,1490);
    nav.classList.toggle("nav-toggle");
    bars.classList.toggle("fa-times");
})

document.getElementById("education").addEventListener("click",()=>{
    window.scrollTo(0,2140);
    nav.classList.toggle("nav-toggle");
    bars.classList.toggle("fa-times");
})

document.getElementById("projects").addEventListener("click",()=>{
    window.scrollTo(0,2815);
    nav.classList.toggle("nav-toggle");
    bars.classList.toggle("fa-times");
})

document.getElementById("experience").addEventListener("click",()=>{
    window.scrollTo(0,3620);
    nav.classList.toggle("nav-toggle");
    bars.classList.toggle("fa-times");
})

document.getElementById("contact").addEventListener("click",()=>{
    window.scrollTo(0,5500);
    nav.classList.toggle("nav-toggle");
    bars.classList.toggle("fa-times");
})

let bars=document.querySelector(".fa-bars")
let nav= document.querySelector(".navbar")

bars.addEventListener("click",()=>{
    nav.classList.toggle("nav-toggle")
    bars.classList.toggle("fa-times");
});
