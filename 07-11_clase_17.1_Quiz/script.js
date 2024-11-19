// Esto sirve para limpiar el localStorage que es donde se guardan los datos.
(function () {
    localStorage.clear();
})();

//Esto sirve para que itere desde 0
let indicePreguntas = 0;
//Aqui guardamos en un array todas las preguntas
let listaPreguntas = [];
// Contador de respuestas correctas
let respCorrecta = 0;
// Contador de respuestas incorrectas
let respIncorrecta = 0;

function crearPregunta(n, texto, pregunta, div){
    let preguntaDiv = document.getElementById('question'); 
    //Esto sirve para limpiar la pregunta anterior
    let h3 = document.createElement('h3');
    let button = document.createElement('button');
    button.setAttribute("onclick", "respuestas()"); 
    if(pregunta){
        h3.innerText = `Pregunta ${n}: ${texto}`; 
        preguntaDiv.appendChild(h3);
    } else{  
        button.innerText = `Respuesta ${n}: ${texto}`; 
        div.appendChild(button);
    }
    
    
}

//Con esta funcion hacemos que itere por todas las preguntas incrementando cada pregunta en 1 despues de ejecutar la anterior
function siguientePregunta() {
    let div = document.getElementById("question")
    // Aqui verifica que la posicion en la que se encuentra la pregunta sea menor que el largo del array de las preguntas para que cuando llegue al final del array ya no cargue mas preguntas
    if (indicePreguntas < listaPreguntas.length) {
        div.innerHTML = '';
      //  console.log("pregunta: " + pregunta);
        //Aqui muestra la pregunta segun su indice(posicion)
        let pregunta = listaPreguntas[indicePreguntas];
        // Si existe la pregunta le suma 1 para que pase a la siguiente, muestra el texto de la pregunta y true indica que es una pregunta 
        crearPregunta(indicePreguntas + 1, pregunta.question, true, null);
        // Este forEach itera por todas las respuestas incorrectas donde incorrectas representa la respuesta incorrecta en cada iteracion e i representa el indice de la respuesta incorrecta dentro del array
        // Muestra las respuestas incorrectas 
        pregunta.incorrect_answers.forEach((incorrecta, i) => { 
            // Aqui creamos un div para las respuestas incorrectas
            let divIncorrecta = document.createElement('div'); 
            // Esto le da un id al div de las respuestas incorrectas
            divIncorrecta.id = `incorrecta-${indicePreguntas + 1}-${i + 1}`; 
            document.getElementById('question').appendChild(divIncorrecta); 
            crearPregunta(`${indicePreguntas + 1}.${i + 1}`, incorrecta, false, divIncorrecta);
        })
        let divCorrecta = document.createElement('div');
        divCorrecta.id = `correcta-${indicePreguntas + 1}`; 
        document.getElementById('question').appendChild(divCorrecta); 
        crearPregunta(indicePreguntas + 1, pregunta.correct_answer, false, divCorrecta);
        localStorage.setItem("pregunta" + (indicePreguntas + 1), pregunta.question);
        localStorage.setItem("respuestaCorrecta" + (indicePreguntas + 1), pregunta.correct_answer);
        localStorage.setItem("respuestaIncorrecta" + (indicePreguntas + 1), JSON.stringify(pregunta.incorrect_answers));
       
    }
    indicePreguntas++;
} 

function respuestas(divCorrecta) {
    if (divCorrecta) {
        alert('Respuesta correcta');
    } else{
        alert('Respuesta incorrecta');
    }
}

//Aqui ponemos el api que se ejecuta cada vez que invocamos a la funcion cuando pulsamos en el boton.
fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple")
.then(datos => datos.json()) 
.then(preguntas => {
    listaPreguntas = preguntas.results;
    siguientePregunta();
})