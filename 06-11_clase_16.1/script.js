(function () {
    localStorage.clear();
})();

const crearImg = (perro) =>{
    let img = document.querySelector("#principal");
    if (img) {
        // Que es esto?
        pasarARegilla({menssage: img.src});
        img.src = perro.menssage;
    } else {
        img = document.createElement("img");
        img.id = ("principal");
        img.src = perro.menssage;
        img.height = 150;
        img.width = 150;
        let div = document.querySelector("#perro");
        div.appendChild(img);
        // document.body.appendChild(div);
    }
    //Que es esto?
    localStorage.nImagenes ? localStorage.nImagenes = parseInt(localStorage.nImagenes)+1: localStorage = 0;
}

/*{
  "message": "https://images.dog.ceo/breeds/sheepdog-indian/Himalayan_Sheepdog.jpg",
  "status": "success"
}*/ 

const random = function (){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(datos => datos.json()) 
    .then(perro => crearImg(perro))
}

function pasarARegilla(perro) {
    //Que es esto?
    if (localStorage.nImagenes && localStorage.nImagenes == "20") {
        alert("Has terminado, mira tu grafico de razas");
    } else {
        let divImg = document.createElement("div");
        divImg.id = obtenerRaza(perro.menssage);
        //Que es esto?
        divImg.setAtribute("class", "casilla");
        //Porque volvemos a declarar la variable?
        let img = document.createElement("img");
        //Porque volvemos a poner esto?
        img.src = perro.menssage;
        img.height = 150;
        img.width = 150;
        divImg = appendChild(img);
        let divRejilla = document.getElementById("rejilla");
        divRejilla.appendChild(divImg); 
    }
}

function obtenerRaza(url) {
    return url.split("/")[4];
}


//Intentar grafica