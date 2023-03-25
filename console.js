console.log('hello user')
//navbar
let sections = document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');
window.onscroll = () => {
sections. forEach(sec => {
let top = window.scrollY;
let offset = sec.offsetTop - 150;
let height = sec.offsetHeight;
let id = sec.getAttribute('id');

if(top >= offset && top < offset + height) {
navLinks.forEach(links => {
links.classList.remove('active');
document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

});
};
});
};

//mobile navbar
bars = document.querySelector(".menu1");
nav = document.querySelector("nav");
sec=document.querySelector(".body")
fo=document.querySelector(".footer")
bars.onclick = function() {
    nav.classList.toggle("act");
    sec.classList.toggle("act");
    fo.classList.toggle("act");
}
