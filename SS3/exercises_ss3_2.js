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








//d) Iguala tu función a una variable y ejecútala
var greetings = function (myName, myAge){
	console.log( "Hello "+myName+" ,you are "+myAge+" years old.");
	console.log(greetings);


};

greetings("Joël", 36);
// Result: "Hello Joël ,you are 36 years old."












//e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado 
//a otra variable, intenta imprimir sus dos resultados concatenados 
//Metodo1
var greetings = function (myName, myAge){
	return myName +(" ") +myAge;
	


};
var copyGreetings = greetings;
console.log(copyGreetings);

greetings("Joël", 36);
// Result: "Hello Joël ,you are 36 years old."




	

	








	

















// e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.
//myName() + (myAge() + myRandomNumber).toString()//output: IronMan 45
function myName(name){
	return name;

	function myAge(age){
	return age;


};


};
var copyName = myName;
	var copyAge = myAge;
	//console.log(copyName +(" , ")+ copyAge);
(myName("Joel")+(" , ")+ (myAge(36)+Math.random())).toString();
// Result: "Joel , 36.56072571944524"
// Es correcto????????????????????????????????????????





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


var master = function(){
	

function myName(name){
	 

var memoryName = name;
	
	


	function myAge(age){
	var memoryAge = age;
};

myAge(Math.floor((Math.random() * 10) + 1));
console.log(memoryName, memoryAge);
};
myName("Ironman");

};

master();








//Método 3
var master = function(){
	

function myName(name){
	 

var memoryName = name;
	
	


	function myAge(age){
	var memoryAge = Math.floor((Math.random(age) * 10) + 1)
	
};

myAge(1);
console.log(memoryName, memoryAge);
};
myName("Ironman");

};

master();
//Result: Ironman 51




//Método 4
var master = function(){
	

function myName(name){
	 

var memoryName = name;
	
	


	function myAge(age){
	var memoryAge = return Math.random().toString();
};

myAge(1);
console.log(memoryName, memoryAge);
};
myName("Ironman");

};

master();
//Result: Ironman 51















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
// Result: Definitively, you are Tony Stark
// The first function returns: Ironman...Sure you're Tony Stark?  The second function returns: 49










//m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. Retorna a la funcion padre y concaténalo en el return padre.
   //Creamos una variable global que nos dará un número random y lo pasamos por parámetro 
    var randomNumber = Math.floor((Math.random() * 50) + 0).toString();
  




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
// Result: The first function returns: Hulk so...you are not Ironman 


