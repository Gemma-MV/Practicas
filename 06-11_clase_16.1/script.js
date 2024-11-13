// Esto sirve para limpiar el localStorage que es donde se guardan los datos.
(function () {
    localStorage.clear();
})();

//Aqui creamos el perro
const crearImg = (perro) =>{
    // Este id aun no esta creado, se crea en el siguiente else: img.id.
    let img = document.querySelector("#principal");
    if (img) {
        // Esto indica que si existe la imagen la pase a la regilla. La foto de la imagen lo saca del message del api que nos da la url donde se encuentra la imagen en su valor message.
        pasarARegilla({message: img.src});
        img.src = perro.message;
    } else {
        // En este else lo que hace es que si no existe la imagen la crea con sus propiedades de html y css.
        img = document.createElement("img");
        img.id = "principal";
        img.src = perro.message;
        img.height = 150;
        img.width = 150;
        let div = document.querySelector("#perro");
        // Aqui añade la imagen al div y del div al body
        div.appendChild(img);
        document.body.appendChild(div);
    }
    // Aqui revisa si hay imagenes en el localStorage, si las hay convierte el dato a numero y le suma 1, sino nImagenes vale 0 porque aun no hay ninguna.
    localStorage.nImagenes ? localStorage.nImagenes = parseInt(localStorage.nImagenes)+1: localStorage.nImagenes = 0;
}

//De aqui sacamos la url donde se encuentra la imagen en su valor message, esto no lo ponemos en el js pero son los valores que recibe el json, podemos verlo poniendo en el navegador la url del api y hay vemos el json con los datos del api.
/*{
  "message": "https://images.dog.ceo/breeds/sheepdog-indian/Himalayan_Sheepdog.jpg",
  "status": "success"
}*/ 

//Aqui ponemos el api que se ejecuta cada vez que invocamos a la funcion cuando pulsamos en el boton.
const random = function (){
    //Esta es la api
    fetch("https://dog.ceo/api/breeds/image/random")
    //Esto significa que cuando (then) hay datos los guarde en un json. 
    .then(datos => datos.json()) 
    //Esto significa que cuando reciba el valor del json lo almacene en perro y hay ejecute la funcion para crear la imagen
    .then(perro => crearImg(perro))
}

//Aqui creamos la regilla
function pasarARegilla(perro) {
    //Aqui comprueba en el localStorage si hay imagenes y si es asi si son 20 y si es asi ejecuta el alert
    if (localStorage.nImagenes && localStorage.nImagenes == "20") {
        alert("Has terminado, mira tu grafico de razas");
    } else {
        //Sino crea el elemento perro dentro de la 
        let divImg = document.createElement("div");
        divImg.id = obtenerRaza(perro.message);
        divImg.setAttribute("class", "casilla");
        let img = document.createElement("img");
        img.src = perro.message;
        img.height = 150;
        img.width = 150;
        divImg.appendChild(img);
        let divRejilla = document.getElementById("rejilla");
        divRejilla.appendChild(divImg); 
    }
}

//Aqui coje de la url donde optiene el dato, ej: https://images.dog.ceo/breeds/sheepdog-indian/Himalayan_Sheepdog.jpg; separandolo a partir del simbolo / y transformandolo en un array la posicion 4 que corresponde a la raza de perro, en este caso sheepdog-indian.
function obtenerRaza(url) {
    return url.split("/")[4];
}


//Intentar grafica