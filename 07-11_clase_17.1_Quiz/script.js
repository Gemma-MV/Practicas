// Esto sirve para limpiar el localStorage que es donde se guardan los datos.
(function () {
    localStorage.clear();
})();

function crearPregunta(n, texto, pregunta){
    let preguntaDiv = document.getElementById('question');
    //preguntaDiv.id ="question"+n;
    let p = document.createElement('p'); 
    if(pregunta){
        p.innerText = `Pregunta ${n}: ${texto}`; 
    } else{  
        p.innerText = `Respuesta ${n}: ${texto}`; 
    }
    preguntaDiv.appendChild(p);

}

//Aqui ponemos el api que se ejecuta cada vez que invocamos a la funcion cuando pulsamos en el boton.
const iniciarQuiz = function () {
    fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple")
    .then(datos => datos.json()) 
    .then(preguntas => {
        let listaPreguntas = preguntas.results;
        listaPreguntas.forEach((pregunta, i) => { 
            //let usarPregunta = (`Pregunta ${i + 1}: ${pregunta.question}`);
            crearPregunta((i+1), pregunta.question, true);
            crearPregunta((i+1), pregunta.correct_answer, false);
            crearPregunta((i+1), pregunta.incorrect_answers, false);
            // console.log(`Pregunta ${i + 1}: ${pregunta.question}`); 
            // console.log(`Respuesta correcta: ${pregunta.correct_answer}`); 
            // console.log(`Respuestas incorrectas: ${pregunta.incorrect_answers.join(', ')}`);
    })
})}