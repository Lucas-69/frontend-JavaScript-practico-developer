//seleccionamos el elemento y lo guardamos en una variable
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoImg = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail');

//creamos un escuchador de eventos y un nombre de funcion toggleDesktopMenu que aun no creamos
menuEmail.addEventListener('click', toggleDesktopMenu);
/* si hago click en la img del menu hamburguesa va a mostrarme o no el menu mobil del navbar */
menuHamIcon.addEventListener('click', toggleMobileMenu);

menuCarritoImg.addEventListener('click', toggleBtnCarriImg);

function toggleDesktopMenu(){
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');
    
    if(!isMenuCarritoClosed){
        menuCarrito.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive'); //creamos la funcion classList.toggle que quita o pone la opcion inactive dependiendo si esta o no..
}
function toggleMobileMenu(){
    //guardo en una constante el valor de true o false de su clase inactive
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');
    
    //si esta abierto el menu mobile, lo cierro 
    if(!isMenuCarritoClosed){
        menuCarrito.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleBtnCarriImg(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    //cerramos el menu desktop cuando abrimos el carrito 
    const isDesktopClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    //preguntamos si esta abierto el menu desktop y si es asi lo cerramos
    if(!isDesktopClosed){
        desktopMenu.classList.add('inactive');
    }
    menuCarrito.classList.toggle('inactive');
}
