
let owner = document.getElementById('owner');
let startParallax = 2100*window.innerWidth/1920; // начальное положение для эффекта параллакса
let endParallax = startParallax+900; // конечное положение для эффекта параллакса
if (window.innerWidth<1500){
    startParallax=2050*window.innerWidth/1920;
    endParallax=startParallax+900;
}
if (window.innerWidth<1000){
    startParallax=2060*window.innerWidth/1920;
    endParallax=startParallax+700;
}
document.addEventListener('scroll', function () {
    let scrolled = window.scrollY;
    console.log(startParallax,scrolled,endParallax)
    if (scrolled >= startParallax && scrolled <= endParallax) {
        owner.style.transform = 'translateY(' + ((scrolled - startParallax) * 0.5) + 'px)';
    }
});