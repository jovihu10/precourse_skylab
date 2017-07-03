//FUNCTIONS


// Diferencia console.log() / return
// console.log is only used for debugging/informative purposes. return is an integral part of the Javascript language 	 	
// console.log is the equivalent of print in other languages. return is used for returning values from a function. 



// a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.
function greetings(myName){
	console.log("Hello "+myName);

};

greetings("Joël");
// Result: Hello Joël






// b) Intenta retornar los valores en lugar de usar console.log
function greetings(myName){
	return "Hello "+myName;

};
greetings("Joël");
// REsult: Hello Joël








//c) Ahora, añade tu edad y concaténala al return
function greetings(myName, myAge){
	return "Hello "+myName+" ,you are "+myAge+" years old."

};

greetings("Joël", 36);
// Result: "Hello Joël ,you are 36 years old."








//c) Ahora, añade tu edad y concaténala al return
//Si hacemos una copia de una función en una variable, en esa variable se habrá guardado el return (el resultado)
function greetings(myName, myAge){
	return "Hello "+myName+" ,you are "+myAge+" years old."

};
var copyGreetings = greetings;
console.log(copyGreetings);

greetings("Joël", 36);
// Result: "Hello Joël ,you are 36 years old."









//e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados 

//Metodo1
var greetings = function (myName, myAge){
	return myName +(" ") +myAge;
	


};
var copyGreetings = greetings;
console.log(copyGreetings);

greetings("Joël", 36);
// Result: "Hello Joël ,you are 36 years old."










//e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.
function myName(name){
	 
var memoryName = name;
	
	


	function myAge(age){
	memoryAge = age;

};

myAge(46);

console.log(memoryName, memoryAge+Math.floor((Math.random() * 10) + 1).toString());
// El 10 es el número tope hasta el que llegará el num random y el 1 el min

};
myName("Ironman");
// REsult: Ironman 51










//f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.
//La clave es que los parametros los memoricemos en variables
function myName(name){
	 
var memoryName = name;
	
	


	function myAge(age){
	memoryAge = age;

};

myAge(46);

console.log(memoryName, memoryAge);
};
myName("Ironman");
// Result: Ironman 46











//g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas

//Funcion maestro
var master = function(){
	

function myName(name){
	 

var memoryName = name;
	
	


	function myAge(age){
	var memoryAge = age;

};

myAge(46);
console.log(memoryName, memoryAge);
};
myName("Ironman");

};

master();








// h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()
// He mirado en http://www.w3schools.com/jsref/jsref_random.asp
// La clave para que el Math.random() no nos dé problemas es pasarlo a toString()
// Si lo queremos usar como numero ya lo convertiremos con  parseInt() 
function master(){

function myName(name){
	 
var memoryName = name;
	
	


	function myAge(age){
	memoryAge = age;

};

myAge(Math.floor((Math.random() * 10) + 1).toString());

console.log(memoryName, memoryAge);
// El 10 es el número tope hasta el que llegará el num random y el 1 el min

};
myName("Ironman");


};

master();
// Result: Ironman 5







// i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50
// return x + y // output: IronMan 3...Sure you're Tony Stark?
function master(){

function myName(name){
	 
var memoryName = name;
	
	


	function myAge(age){
	memoryAge = age;

};

myAge(Math.floor((Math.random() * 50) + 0).toString());

function chances (){
	if(memoryAge<20){
		console.log("So...You are Tony Stark?");
	}else{
		console.log("Definitively, you are Tony Stark");
	}

}
chances();
 console.log(memoryName +(" ")+ memoryAge);


};
myName("Ironman");


};

master();
// Result: Definitively, you are Tony Stark
// Ironman 37









// j) Al return de la función name(), concaténale otro mensaje
// return x + y // output: Tony Stark...aka IRONMAN, 34...Sure you're Tony Stark? 
function master(){

function myName(name){
	 
var memoryName = name + "...Sure you're Tony Stark? ";
	
	


	function myAge(age){
	memoryAge = age;

};

myAge(Math.floor((Math.random() * 50) + 0).toString());

function chances (){
	if(memoryAge<20){
		console.log("So...You are Tony Stark?");
	}else{
		console.log("Definitively, you are Tony Stark");
	}

}
chances();
 console.log(memoryName +(" ")+ memoryAge);


};
myName("Ironman");


};

master();

// Result: Definitively, you are Tony Stark
// Ironman...Sure you're Tony Stark?  38










// k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable
// return x + y // output: The first function returns: 'Tony Stark...aka IRONMAN', The second function returns: '34...Sure you're Tony Stark?' 
function master(parameter1, parameter2){
	memoParameter1 = parameter1;
	memoParameter2 = parameter2;

function myName(name){
	 
var memoryName = name + "...Sure you're Tony Stark? ";
	
	


	function myAge(age){
	memoryAge = age;

};

myAge(Math.floor((Math.random() * 50) + 0).toString());

function chances (){
	if(memoryAge<20){
		console.log("So...You are Tony Stark?");
	}else{
		console.log("Definitively, you are Tony Stark");
	}

}
chances();
 console.log(parameter1 + memoryName +(" ")+ parameter2 + memoryAge);


};
myName("Ironman");


};

master("The first function returns: ", "The second function returns: ");
// Result: Definitively, you are Tony Stark
// The first function returns: Ironman...Sure you're Tony Stark?  The second function returns: 49













// l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada
// return x + y // output: "The first function returns: Hulk... You're not IRONMAN!"
function master(parameter1, parameter2){
	memoParameter1 = parameter1;
	memoParameter2 = parameter2;

function myName(name){
	 
var memoryName = name;
if(memoryName ==="Ironman"){

	function myAge(age){
	memoryAge = age;
	console.log(memoParameter1 + " so definitively you are the great Ironman");


};
//cierre myAge
myAge(Math.floor((Math.random() * 50) + 0).toString());

}else{
	console.log(memoParameter1 + memoryName + memoParameter2);

}


//cierre myName	
	

};
myName("Hulk");


};

master("The first function returns: ", " so...you are not Ironman ");
// Result: The first function returns: Hulk so...you are not Ironman 











//m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. Retorna a la funcion padre y concaténalo en el return padre.
// Creamos una variable global y la ponemos en otra funcion ylo pasamos por parámetro a la funcion father
    var randomNumber;

    function valueRandom(){
    randomNumber =Math.floor((Math.random() * 50) + 0).toString();
    return randomNumber;
  }
  valueRandom();




function master(parameter1, parameter2){
	memoParameter1 = parameter1;
	memoParameter2 = parameter2;
	console.log( memoParameter1);

function myName(name){
	 
var memoryName = name;
if(memoryName ==="Ironman"){

	function myAge(age){
	memoryAge = age;
	console.log(memoParameter1 + " so definitively you are the great Ironman");


};
//cierre myAge
myAge();

}else{
	console.log(memoParameter1 + memoryName + memoParameter2);

}


//cierre myName	
	

};
myName("Hulk");


};

master(randomNumber, " so...you are not Ironman ");
// Result: 28
// so...you are not Ironman 













//n) Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último se encargará de llamarlas todas y mostrar sus resultados.
//Hay que hacer que todas las funciones aparte de ser externas, tengan sus variables declaradas como globales
var randomNumber;
var memoParameter1;
var memoParameter2;
var memoryName;
var memoryAge;

    function valueRandom(){
    randomNumber =Math.floor((Math.random() * 50) + 0).toString();
    return randomNumber;
  }
  valueRandom();




function master(parameter1, parameter2){
	memoParameter1 = parameter1;
	memoParameter2 = parameter2;
	console.log( randomNumber+(" , ")+memoParameter1+(" , ")+memoParameter2+(" , ")+memoryName+(" , ")+memoryAge);


	};

master(randomNumber, " so...you are not Ironman ");




function myName(name){
	memoryName = name;

};
myName("Hulk");

function myAge(age){
	memoryAge = age;
	


};

myAge(5);
// REsult: 28 , 28 ,  so...you are not Ironman  , Hulk , 5











//ñ) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre, muestra los resultados de esta array como siempre.
var randomNumber;
var memoParameter1;
var memoParameter2;
var memoryName;
var memoryAge;



    function valueRandom(){
    randomNumber =Math.floor((Math.random() * 50) + 0).toString();
    return randomNumber;
  }
  valueRandom();




function master(parameter1, parameter2){
	memoParameter1 = parameter1;
	memoParameter2 = parameter2;
//Creamos un array
//Ahí pondremos todas las variables globales con push
	var superFather = [];
	superFather.push(randomNumber, memoParameter1, memoParameter2, memoryName, memoryAge);
	// Recorremos el array con un loop for
	var i;

	//El bucle for no sería necesario, ya que no necesitamos publicar 5 veces el array
	for(i=0; i<superFather.length; i++){
		console.log( superFather);

	}


	


	};

master(randomNumber, " so...you are not Ironman ");




function myName(name){
	memoryName = name;

};
myName("Hulk");

function myAge(age){
	memoryAge = age;
	


};

myAge(5);
// Return: ["16", "16", " so...you are not Ironman ", "Hulk", 5]







//o) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, deberá hacer otro push "hello from the dark side..." a la array que crea father(). Muestra toda la array completa.
var randomNumber;
var memoParameter1;
var memoParameter2;
var memoryName;
var memoryAge;

var superFather;



    function valueRandom(){
    randomNumber =Math.floor((Math.random() * 50) + 0).toString();
    return randomNumber;
  }
  valueRandom();




function master(parameter1, parameter2){
	memoParameter1 = parameter1;
	memoParameter2 = parameter2;
//Creamos un array
//Ahí pondremos todas las variables globales con push
	superFather = [];
	superFather.push(randomNumber, memoParameter1, memoParameter2, memoryName, memoryAge);

	


	

	};

master(randomNumber, " so...you are not Ironman ");




function myName(name){
	memoryName = name;

};
myName("Hulk");

function myAge(age){
	memoryAge = age;
	


};

myAge(5);



//ESta es la function que llama a la funcion master
function god(){
	
	superFather.push("hello from the dark side...")
	console.log(superFather)



}
god(master());
//REsult: ["27", undefined, undefined, "Hulk", 5, "hello from the dark side..."]












// p)Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus randomNums, mostrando un mensaje indicando cual es mayor. El nombre pasado por parámetro también deberá ser random entre una array de nombres, con lo cual, también deberás refactorizar las funciones hijas.
var randomNumber;
var memoParameter1;
var memoParameter2;
var memoryName;
var memoryAge;

var superFather;



    function valueRandom(){
    randomNumber =Math.floor((Math.random() * 50) + 0).toString();
    return randomNumber;
  }
  valueRandom();




function master(parameter1, parameter2){
	memoParameter1 = parameter1;
	memoParameter2 = parameter2;
//Creamos un array
//Ahí pondremos todas las variables globales con push
	superFather = [];
	superFather.push(randomNumber, memoParameter1, memoParameter2, memoryName, memoryAge);

	


	

	};

master(randomNumber, " so...you are not Ironman ");




function myName(name){
	memoryName = name;

};
myName("Hulk");

function myAge(age){
	memoryAge = age;
	


};

myAge(5);



//ESta es la function que llama a la funcion master
function god(){
	
	superFather.push("hello from the dark side...")
	var godfather1 = superFather;
	var godfather2 = superFather;



}
god(master());






