let buttonCatalogMenu = document.querySelector('aside>.title>.category__burger');
buttonCatalogMenu.addEventListener('click', () => {
    document.querySelector('aside>ul').classList.toggle('active');
    buttonCatalogMenu.classList.toggle('active');
})


let buttonNavMenu = document.querySelector('nav>.menu__button>.menu__burger');
buttonNavMenu.addEventListener('click', () => {
    document.querySelector('nav>.menu__drop-menu').classList.toggle('active');
    buttonNavMenu.classList.toggle('active');
})