fetch('https://dog.ceo/api/breeds/image/random')
.then(res=>res.json())
.then(function callback(json){
    let etiqueta = document.getElementsByTagName('td');
    let contenido = document.createElement(json);
    etiqueta.appendChild(contenido); 
});