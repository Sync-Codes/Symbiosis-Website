document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = () => {
        const toggleMenu = document.querySelector('.toggleMenu');
        const navigation = document.querySelector('.navigation');
        const socialtoggle = document.querySelector('.socialtoggle');

        toggleMenu.classList.toggle('active');
        navigation.classList.toggle('active');
        socialtoggle.classList.toggle('active');
        // if (toggleMenu.classList.contains("active")) {
        //     toggleMenu.style.backgroundImage = "url(/images/close.png)";
        // } else {
        //     toggleMenu.style.backgroundImage = "url(/images/menu.png)";
        // }
    }

    document.querySelector('.toggleMenu').addEventListener('click', menuToggle);
  });



const navLinkEles = document.querySelectorAll('.nav__link');
const windowPathname = window.location.pathname;

navLinkEles.forEach(navlinkEle =>{
    const navLinkPathname = new URL(navlinkEle.href).pathname;


    if(windowPathname === navLinkPathname){
        navlinkEle.classList.add('active');
    }
});