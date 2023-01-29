document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = () => {
        const toggleMenu = document.querySelector('.toggleMenu');
        const navigation = document.querySelector('.navigation');
        toggleMenu.classList.toggle('active');
        navigation.classList.toggle('active');
    }

    document.querySelector('.toggleMenu').addEventListener('click', menuToggle);
  });