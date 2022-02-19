const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar__menu');
const navlogo = document.querySelector('#navbar__logo');
// Display Mobile Menu :
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

}
menu.addEventListener('click', mobileMenu);
menuLinks.addEventListener('click', mobileMenu);

//Show Active Menu when Scrolling
const hightligntMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const servicesMenu = document.querySelector('#service-page');
    const abouttMenu = document.querySelector('#about-page');
    let scrollPos = window.scrollY;
    // adds 'highlits'
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth > 960 && (scrollPos >= 600 && scrollPos < 1400)) {

        servicesMenu.classList.add('highlight');
        abouttMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth > 960 && (scrollPos >= 1400 && scrollPos < 2345)) {

        abouttMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
        return;
    }

    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
}
window.addEventListener('scroll', hightligntMenu);
window.addEventListener('click', hightligntMenu);

const hideMobileMenu = () => {

    const menubar = document.querySelector('.is-active');
    if (window.innerWidth <= 760 && menubar) {
        menubar.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}
menuLinks.addEventListener('click', hideMobileMenu);
navlogo.addEventListener('click', hideMobileMenu);