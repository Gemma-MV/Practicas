let mundo = JSON.parse('{\
    "localidade 1": {\
    "Continente": "África",\
    "País": "Angola",\
    "Capital": "Luanda"\
    },\
    "localidade 2": {\
    "Continente": "América do Norte",\
    "País": "Estados Unidos",\
    "Capital": "Washington DC"\
    },\
    "localidade 3": {\
    "Continente": "América Central",\
    "País": "México",\
    "Capital": "Cidade do México"\
    },\
    "localidade 4": {\
    "Continente": "América do Sul",\
    "País": "Brasil",\
    "Capital": "Brasília"\
    },\
    "localidade 5": {\
    "Continente": "Europa",\
    "País": "Espanha",\
    "Capital": "Madri"\
    },\
    "localidade 6": {\
    "Continente": "Europa",\
    "País": "Alemanha",\
    "Capital": "Berlim"\
    },\
    "localidade 7": {\
    "Continente": "Oceania",\
    "País": "Austrália",\
    "Capital": "Camberra"\
    },\
    "localidade 8": {\
    "Continente": "Ásia",\
    "País": "Japão",\
    "Capital": "Tóquio"\
    }\
}');

// Ejercicio 2.1
console.log(mundo["localidade 8"]["País"]);

//Ejercicio 2.2
// Una forma de hacerlo
mundo["localidade 9"]= {
    "Continente": "A",
    "País": "B",
    "Capital": "C"
};
// Otra forma de hacerlo
// mundo["localidade 9"]["Continente"]= "D";
// mundo["localidade 9"]["País"]= "E";
// mundo["localidade 9"]["apital"]= "F";
console.log(mundo["localidade 9"]);

// Ejercicio 2.3
mundo["localidade 4"]["Nhabitantes"] = "x";

console.log(mundo["localidade 4"]["Nhabitantes"]);