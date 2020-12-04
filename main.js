// menu show y hidden
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close'), 
    about = document.getElementById('about-container')


// show menu
toggleMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle('show')
})

// hidden menu
closeMenu.addEventListener('click', ()=> {
    navMenu.classList.remove('show')
})

// move icon
document.addEventListener('mousemove', moved)

function moved(e){
    this.querySelectorAll('.moved').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

// gsap
gsap.registerPlugin(ScrollTrigger)
// nav
gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay: 2, y: 10}) 
gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2}) 

// home
gsap.from('.home__greating', {opacity: 0, duration: 1, delay: 1.4, y: 30}) 
gsap.from('.home__title', {opacity: 0, duration: 1, delay: 1.6, y: 30}) 
gsap.from('.home__description', {opacity: 0, duration: 1, delay: 1.8, y: 30}) 
gsap.from('.home__icon', {opacity: 0, duration: 1, delay: 1.9, y: 30, stagger: 0.2}) 
gsap.from('.moved', {opacity: 0, duration: 1, delay: 1.3, y: 30}) 

// about
gsap.from('.about__title', {scrollTrigger:'.about__title', opacity: 0, duration: 1, delay: 1.2, x: -30}) 
gsap.from('.about__img', {scrollTrigger:'.about__img', opacity: 0, duration: 1, delay: 1.4, x: 30})
gsap.from('.about__description', {scrollTrigger:'.about__description', opacity: 0, duration: 1, delay: 1.5, x: -30}) 

// skills
gsap.from('.bar', {scrollTrigger:'.bar', opacity: 0, duration: 1, delay: 1.1, x: 30}) 
gsap.from('.skills__title', {scrollTrigger:'.skills__title', opacity: 0, duration: 1, delay: 1.3, x: 30}) 
gsap.from('.skills__description', {scrollTrigger:'.skills__description', opacity: 0, duration: 1, delay: 1.5, x: 30}) 
gsap.from('.skills__desc', {scrollTrigger:'.skills__desc', opacity: 0, duration: 1, delay: 1.3, y: -30}) 
gsap.from('.skills__code', {scrollTrigger:'.skills__code', opacity: 0, duration: 1, delay: 1.5, y: 30, stagger: 0.2}) 
gsap.from('.skills__design', {scrollTrigger:'.skills__design', opacity: 0, duration: 1, delay: 1.5, y: 30, stagger: 0.2}) 

// portfolio
gsap.from('.portfolio__title', {scrollTrigger:'.portfolio__title', opacity: 0, duration: 1, delay: 1.1, y: -30}) 
gsap.from('.portfolio__description', {scrollTrigger:'.portfolio__description', opacity: 0, duration: 1, delay: 1.3, y: -30}) 
gsap.from('.glide__slides', {scrollTrigger:'.glide__slides', opacity: 0, duration: 1, delay: 1.5, x: 30}) 

// contact
gsap.from('.contact__title', {scrollTrigger:'.contact__title', opacity: 0, duration: 1, delay: 1.1, y: -30}) 
gsap.from('.contact__description', {scrollTrigger:'.contact__description', opacity: 0, duration: 1, delay: 1.3, y: -30}) 
gsap.from('.contact__icon', {scrollTrigger:'.contact__icon', opacity: 0, duration: 1, delay: 1.5, y: 30, stagger: 0.2}) 
gsap.from('.contact__copyright', {scrollTrigger:'.contact__copyright', opacity: 0, duration: 1, delay: 1.6, x: 30}) 

// glide
new Glide('.glide', {
    type: "carousel",
    startAt: 0,
    autoplay: 3000,
    hoverpause: false,
    gap: 5,
    perView: 1
}).mount()


