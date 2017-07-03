//Variables para las preguntas correctas e incorrectas
var goodPoints = 0;
var badPoints = 0;
var continuePlaying;
var i;
var noAnswered;



//Hago este array de objetos global
var questions = [
    {letter: "a", 
    answer: "abducir", 
    status: 0, 
    question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") 
},
    { letter: "b", 
    answer: "bingo", 
    status: 0, 
    question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") 
},
    
    { letter: "c", 
    answer: "churumbel", 
    status: 0, 
    question: ("CON LA C. Niño, crío, bebé") 
},

    { letter: "d", 
    answer: "diarrea", 
    status: 0, 
    question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") 
},

    { letter: "e", 
    answer: "ectoplasma", 
    status: 0, 
    question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") 
},

    { letter: "f", 
    answer: "facil", 
    status: 0, 
    question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") 
},

    { letter: "g", 
    answer: "galaxia", 
    status: 0, 
    question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") 
},

    { letter: "h", 
    answer: "harakiri", 
    status: 0, 
    question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") 

},
    { letter: "i", 
    answer: "iglesia", 
    status: 0, 
    question: ("CON LA I. Templo cristiano") 

},

    { letter: "j", 
    answer: "jabali", 
    status: 0, 
    question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") 
},

    { letter: "k", 
    answer: "kamikaze", 
    status: 0, 
    question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") 

},

    { letter: "l", 
    answer: "licantropo", 
    status: 0, 
    question: ("CON LA L. Hombre lobo") 

},
    { letter: "m", 
    answer: "misantropo", 
    status: 0, 
    question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") 

},
    { letter: "n", 
    answer: "necedad", 
    status: 0, 
    question: ("CON LA N. Demostración de poca inteligencia") 

},
    { letter: "ñ", 
    answer: "señal", 
    status: 0, 
    question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") 

},
    { letter: "o", 
    answer: "orco", 
    status: 0, 
    question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") 


},
    { letter: "p", 
    answer: "protoss", 
    status: 0, 
    question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") 

},
    { letter: "q", 
    answer: "queso", 
    status: 0, 
    question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") 

},
    { letter: "r", 
    answer: "raton", 
    status: 0, 
    question: ("CON LA R. Roedor") 

},
    { letter: "s", 
    answer: "stackoverflow", 
    status: 0, 
    question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") 
},

    { letter: "t", 
    answer: "terminator", 
    status: 0, 
    question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") 

},

    { letter: "u", 
    answer: "unamuno", 
    status: 0, 
    question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") 
},

    { letter: "v", 
    answer: "vikingos", 
    status: 0, 
    question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") 

},

    { letter: "w", 
    answer: "sandwich", 
    status: 0, 
    question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") 

},

    { letter: "x", 
    answer: "botox", 
    status: 0, 
    question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") 

},
    { letter: "y", 
    answer: "peyote", 
    status: 0, 
    question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") 

},
    { letter: "z", 
    answer: "zen", 
    status: 0, 
    question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") 
},
]


//no pasamos nada por parametro. Vamos a probar así
var juegoPasapalabra = function(){


	while(!continuePlaying){
	var gameName = prompt("Dime tu nombre");
	var gameConfirm= confirm(gameName + " VAmos a jugar al pasapalabra. Quieres jugar?");
//Con este confirm si le damos a confirmar que queremos jugar, jugaremos. Sino, no.

if (gameConfirm){
	
	//Hago un for que recorra todo el array de objetos con la segunda condicion de que sea hasta que todas
	//las preguntas tengan status 0
	for(i=0; (i < questions.length) && (questions[i].status ===0); i++){
	var letterA = prompt(questions[i].question);

	//Si lo que escribas en el prompt sea lo mismo que la respuesta y no sea pasapalabra, haz esto
	if(letterA === questions[i].answer && letterA != "pasapalabra"){

		goodPoints ++;
		questions[i].status = 1;
		console.log("Muy bien, respuesta correcta");
	
	//Si lo que escribes en el prompt es diferente a la respuesta y no pones pasapalabra, pasará esto
	}else if(letterA != questions[i].answer && letterA != "pasapalabra"){
		console.log("Oh, te has equivocado");
		badPoints ++;
		questions[i].status = 1;

	}else{
		console.log("Saltamos a la siguiente pregunta y ya la responderás luego");
noAnswered = questions[i].question;

};

var lastTry = prompt(noAnswered);

if(lastTry === questions[i].answer){
    goodPoints ++;

    console.log("Muy bien, respuesta correcta!");

}else{
    console.log("Oh, te has equivocado");
    badPoints ++;

};

	

};



//Hacemos un condicional que dice que si hemos recorrido todas las preguntas, que nos muestre las no respondidas



	


console.log("has acertado en total " + goodPoints);
console.log("has fallado " + badPoints);
console.log("No has respondido " + noAnswered[i].length);


};


};

};

juegoPasapalabra();


