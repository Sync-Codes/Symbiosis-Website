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
    // netlify code
    document.querySelectorAll('.nav__link').forEach(link => {
        if (link.pathname === '/') {
            if (link.pathname === window.location.pathname) {
                link.classList.add('active');
            }
        } else {
            if (link.pathname === window.location.pathname.slice(0, -1)) {
                link.classList.add('active');
            }
        }
    });

    // local code
    // document.querySelectorAll('.nav__link').forEach(link => {

    //         if (link.pathname === window.location.pathname.slice(0, -1)) {
    //             link.classList.add('active');
    //         }
    //     });
    });




