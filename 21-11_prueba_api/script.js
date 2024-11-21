// Esto sirve para limpiar el localStorage que es donde se guardan los datos.
(function () {
    localStorage.clear();
})();

fetch('https://fakestoreapi.com/products?limit=10')
    .then(res=>res.json())
    .then(productos => {
        // Con este forEach iteramos por cada uno de los productos para darle cada producto a la funcion obtener producto para que la pinte
        productos.forEach((producto, i) => { 
            obtenerProducto(producto.image, producto.rating.rate, producto.title, producto.description, producto.price, i); 
        });
        console.log(productos); 
    })

function obtenerProducto(url, rating, title, description, price, i) {
    // Accedemos al div del dom donde se va a alojar la tienda
    let divTienda = document.querySelector("#idTienda");    
    // Creamos el div donde se va a contener cada producto con los atributos de ese div
    let divProducto = document.createElement("div");
    divProducto.id = `producto${i + 1}`;
    divProducto.className = 'classDiv';
    // Creamos la imagen del producto con sus atributos
    let img = document.createElement("img");
    img.src = url;
    img.height = 150;
    img.width = 150;
    // Añadimos la imagen al dom
    divProducto.appendChild(img);
    divTienda.appendChild(divProducto); 
    // Creamos el ranking
    let ranking = document.createElement('p');
    ranking.innerText = ("Puntuacion entre los compradores: " + rating);
    divProducto.appendChild(ranking);
    // Creamos el titulo
    let titulo = document.createElement("h2");
    titulo.innerText = title;
    // Se lo añadimos al dom
    divProducto.appendChild(titulo);
    // Creamos la descripcion
    let descripcion = document.createElement('p');
    descripcion.innerText = ("Descripcion: " + description);
    divProducto.appendChild(descripcion);
    //Creamos el precio
    let precio = document.createElement('h3');
    precio.innerText = (`Precio: ${price} €`);
    divProducto.appendChild(precio);
    // console.log(descripcion);
}