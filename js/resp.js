burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav')
    rightnav.classList.toggle('v-class');
    nav-list.classList.toggle('v-class');
 
})