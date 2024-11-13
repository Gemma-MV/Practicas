// Esto sirve para limpiar el localStorage que es donde se guardan los datos.
(function () {
    localStorage.clear();
})();

//Aqui ponemos el api que se ejecuta cada vez que invocamos a la funcion cuando pulsamos en el boton.
const iniciarQuiz = function (){
    //Esta es la api
    fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=easy")
    //Esto significa que cuando (then) hay datos los guarde en un json. 
    .then(datos => datos.json()) 
    .then()
}

const crearQuestion = (pregunta) => {
    div.appendChild(img);
    document.body.appendChild(div);
}