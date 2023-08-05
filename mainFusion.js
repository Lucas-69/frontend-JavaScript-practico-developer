//seleccionamos el elemento y lo guardamos en una variable
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoImg = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

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

const productList = [];
productList.push({
    name: 'Compu',
    precio: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Bici',
    precio: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Celulares',
    precio: 1120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProductos(arr){
    for (product of arr){
    const productCart = document.createElement('div');
    productCart.classList.add('product-card');

    //product = {name, precio, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productDivSolo = document.createElement('div');
    
    const productPrecio = document.createElement('p');
    productPrecio.innerText = '$' + product.precio;
    const productName = document.createElement('p');
    productName.innerText = product.name;
    
    productDivSolo.appendChild(productPrecio);
    productDivSolo.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    //vamos a meter nuestra imagen dentro de Figure 
    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productDivSolo);
    productInfo.appendChild(productInfoFigure);

    productCart.appendChild(productImg);
    productCart.appendChild(productInfo);

    cardsContainer.appendChild(productCart);
    }
}

renderProductos(productList);