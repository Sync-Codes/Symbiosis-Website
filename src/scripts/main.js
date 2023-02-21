document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = () => {
        const toggleMenu = document.querySelector('.toggleMenu');
        const navigation = document.querySelector('.navigation');

        toggleMenu.classList.toggle('active');
        navigation.classList.toggle('active');

        if (toggleMenu.classList.contains("active")) {
            toggleMenu.style.backgroundImage = "url(images/close.png)";i
        } else {
            toggleMenu.style.backgroundImage = "url(images/menu.png)";
        }
    }

    document.querySelector('.toggleMenu').addEventListener('click', menuToggle);
  });