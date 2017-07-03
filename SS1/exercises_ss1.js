// STRINGS


// a) Puedes contar cuantas letras tiene tu nombre?
	function name(){
		var myName ="joel".length;
		console.log("My name has " +myName+ " letters.");
	}

		name();
	//Result: My name has 4 letters.





// b) Añade tu apellido e indica en que posición se encuentra
	function LastName(){
		var fullName = "joel vila";
		var pLastName = fullName.lastIndexOf("vila");
		console.log("Your first last name starts on position " +pLastName);
	}

	LastName();
	//Result: Your first last name starts on position 5





// c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.
		function name(){
			var fullName = "Joel Vila";
			var position = fullName.substring(0,4);
			console.log("My name is "+position);
		}

		name();
	// Result: My name is Joel





//	d) Ahora, solo tu apellido.
	function lastName(){
		var fullName = "Joel Vila";
		var position = fullName.substring(5,9);
		console.log("My lastname is "+position);
	}

	lastName();
	//Result: My lastname is Vila






//  d1) Iguala el resultado a una variable nueva e imprímela por pantalla.
	function name(){
		var fullName = "Joel Vila";
		var position = fullName.substring(0,4);
		var myNewString = position;
		console.log(fullName+(', ')+myNewString);
	}

	name();
	//Result: Joel Vila, Joel




//  e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.
		function name(){
			var fullName = "Joel Vila";
			var position = fullName.substring(0,4);
			var myNewString = position;
			fullName = "Mr/Ms";
			console.log("Hello"+(', ')+fullName+(' ')+myNewString);
		}

		name();
		//Result: Hello, Mr/Ms Joel





//  f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.
	function capitaLetters(){
		var fullName = "Joel Vila";
		var position = fullName.substring(5,9);
		var myNewString = position.toUpperCase();
		console.log("My lastname is "+myNewString);
	}

	capitaLetters();
	// Result: My lastname is VILA





//  g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.
	function name(){
		var fullName = "Joel Vila";
		var newWhatever = fullName + " is awsome."
		console.log(newWhatever);
	}

	name();
	// Result: Joel Vila is awsome.





//  h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?
	//Método 1: con substring
	function name(){
		var fullName = "Joel Vila";
		var initialsName = fullName.substring(0,1);
		var initialsLastN = fullName.substring(5,6);
		console.log(initialsName+(".")+initialsLastN);
	}

	name();
	// Result: J.V



	//Método 2: con slice
	function name(){
		var fullName = "Joel Vila";
		var initialsName = fullName.slice(0,1);
		var initialsLastN = fullName.slice(5,6);
		console.log(initialsName+(".")+initialsLastN);
	}
	name();
	//Result: J.V









//	ARRAYS



//	a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"
	function myNameSeparated(){
		var fullName = "Joel Vila";
	    var splitName = fullName.split('').join('/');
	    var nameArray = [splitName];
	    console.log(splitName);
	}

	myNameSeparated();
	//REsult: J/o/e/l/ /V/i/l/a




//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"
function myNameSeparated(){
	var fullName = "Joel Vila";
	var justLastName = fullName.substring(5,9);
    var splitName = justLastName.split('').join('|');
    var nameArray = [splitName];
    console.log(splitName);
}

myNameSeparated();
// REsult: V|i|l|a








//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)
https://www.w3schools.com/jsref/jsref_split.asp
//Estudiar este
function orderLettersName(){
	
	var fullName = "Joel Vila";
	var justName = fullName.substring(0,4);
    var splitName = justName.split('').join('|');
	
    
    var nameArray = [splitName];
    for (i=0; i<splitName.length; i++){
    	var positionLetters = splitName.lastIndexOf();

    console.log(i);
    console.log(fullName[i]);
}
};


orderLettersName();
/* Result: 
J
1
o
2
e
3
l
4
  
5
V
6
i

*/








// d)Como en el ejercicio anterior, pero seleccionando tu apellido
// Resource: https://www.w3schools.com/jsref/jsref_length_array.asp
// Esta sería la manera más eficiente de hacer el c y el d. Estudiar este
function orderLettersName(fullName){
	var justLastName = fullName.substring(5,9);  
    for(i in justLastName){
    	console.log(i + ' => '+ justLastName[i])
    }
};
orderLettersName("Joel Vila")
/* Result:
0 => V
1 => i
2 => l
3 => a









// e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings
/* TEn en cuenta que en un array le podemos indicar la posición a imprimir sólo indicando la var, posicion array y posición dentro del array
console.log(name [0][0] */
	function firstLetterFname(){
		var name = ["Joel", "Vila"];
		console.log(name [0][0]+ name [1][0]);
	}
	firstLetterFname();
	// Result: JV







// f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.
function myName(){
		var name = ["Joel", "Vila", "36"];
		console.log("My name is " +name [0]+" "+ name [1]+ " and I'm "+name[2]+ " years old");
	}
	myName();
	//REsult: My name is Joel Vila and I'm 36 years old






// g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.
		function firstLetterFname(city){

		var name = ["Joel", "Vila", "36"];
		name.splice(name.length, 0, city)
		console.log(name)
	}
	firstLetterFname("Barcelona")

	//Método 2 (éste es más directo):
		function firstLetterFname(city){

		var name = ["Joel", "Vila", "36"];
		name.splice(name.length, 0, "Barcelona")
		console.log(name)
	}
	firstLetterFname();
	// REsult: ["Joel", "Vila", "36", "Barcelona"]







// h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.
		function firstLetterFname(city){

			var name = ["Joel", "Vila", "36", "Barcelona"];
			name.splice(3,1)
			console.log(name)
		}
		firstLetterFname();



//  j) Ahora, elimina el nombre y asegura los cambios 
//  Resources: https://www.w3schools.com/jsref/jsref_shift.asp
//  Usaremos shift, ya que elimina el primer valor sólo
	function firstLetterFname(city){

		var name = ["Joel", "Vila", "36", "Barcelona"];
		name.shift();
		console.log(name)
	}
	firstLetterFname();
	// REsult: ["Vila", "36", "Barcelona"]





// k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición? 
// Resources: https://www.w3schools.com/jsref/jsref_splice.asp	
	function firstLetterFname(city){

			var name = ["Vila", "36", "Barcelona"];
			name.splice(0,0,"Joel");
			console.log(name)
		}
		firstLetterFname();
		// Result: ["Joel", "Vila", "36", "Barcelona"]









// l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.
	function double(x) {
	  return x * 2;
	}
	 
	var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var result = numbers.map(double);
	console.log(result); 
	//Result = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
	//Este link lo explica muy bien http://www.enrique7mc.com/2015/12/metodos-map-filter-y-sort-en-javascript/





// l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.
// Resource: https://www.w3schools.com/jsref/jsref_map.asp
	// Ahora multiplicaremos cada número *3
	function triple(x) {
		return x * 3;
	}
 
	var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var result = numbers.map(triple);
	console.log(result); 

//Result = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30]





// m) Podrías mostrarlos en el orden inverso? 
// Resources: https://www.w3schools.com/jsref/jsref_sort.asp
	function invertOrder() {

	var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	numbers.sort(function(a, b){return b-a});
	console.log(numbers); 

	}

	invertOrder();



// NUMBERS



// a) Que hora es? Declara la hora como número y devuelvela como String

// He consultado: https://desarrolloweb.com/faq/317.php
// Para saber la hora, creamos una var con new Date();
// Luego creamos otra var con la otra var.getHours();

ffunction timeIsIt(){
	var date = new Date();
	var hour = date.getHours();
	var hourString = hour.toString();

    var minutes = date.getMinutes();
    var minutesString = minutes.toString();


    //Hago un if para que me diga si es mañana, tarde o noche
    var perioDay;
    if (hour <= 16){
    	perioDay = "morning";

    } else if(hour <= 20){
    	perioDay = "evening";

    } else if(hour<=23){
    	perioDay = "night";

    } else if(hour<=24){
    	perioDay = "midnight";
    }else{
    	perioDay = "morning";
    }


    console.log("It's " + hourString + (".") + minutesString + " of "+perioDay);

}

timeIsIt(); 
// Result: I'ts 10.45 of morning








//  b) Nono, que hora exactamente? Dime la hora sin minutos
function timeIsIt(){
	var date = new Date();
	var hour = date.getHours();
	var hourString = hour.toString();

    


    //Hago un if para que me diga si es mañana, tarde o noche
    var perioDay;
    if (hour <= 16){
    	perioDay = "morning";

    } else if(hour <= 20){
    	perioDay = "evening";

    } else if(hour<=23){
    	perioDay = "night";

    } else if(hour<=24){
    	perioDay = "midnight";
    }else{
    	perioDay = "morning";
    }


    console.log("It's around " + hourString + " of "+perioDay);

}

timeIsIt(); 
// Result: It's around 16 of morning






// c) Ahora, declara tu hora y muéstrala redondeada.
//Fuente: https://www.w3schools.com/jsref/jsref_round.asp
function timeIsIt(){
	var date = new Date();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var time = hour + "." + minutes



    console.log(Math.round(time));

}

timeIsIt(); 






// d) Hagamos una calculadora. Primero, la suma.
// We can do a calculator, so let's do it! first, do a sum with two numbers
function calculator(){

	//Importante. Cuando introducimos el numero con el prompt es un string, con lo que hay que convertirlo a número
	var value1 = prompt("Write a number to do a sum");
	var number1 = parseInt(value1); 

	
	var value2= prompt("Write another number");
		var number2 = parseInt(value2);

	var sum = number1 + number2;
	console.log("The sum of " +number1+ "+ " +number2+" is " + sum);



}

calculator();
// Result: The sum of 2+ 3 is 5





//d1) Añade la resta...
function calculator(){

	//Importante. Cuando introducimos el numero con el prompt es un string, con lo que hay que convertirlo a número
	var value1 = prompt("Write a number to do a sum");
	var number1 = parseInt(value1); 

	
	var value2= prompt("Write another number");
		var number2 = parseInt(value2);

	var sum = number1 + number2;
	var rest= number1 - number2;
	console.log("The sum and rest of " +number1+ "and " +number2+" is " +sum+ "and " +rest);



}

calculator();
//Result: The sum and rest of 7 and 3 is 10 and 4









// d2) Y la multiplicación
function calculator(){

	//Importante. Cuando introducimos el numero con el prompt es un string, con lo que hay que convertirlo a número
	var value1 = prompt("Write a number to do a sum");
	var number1 = parseInt(value1); 

	
	var value2= prompt("Write another number");
		var number2 = parseInt(value2);

	var sum = number1 + number2;
	var rest= number1 - number2;
	var multiplication = number1 * number2;
	console.log(+sum+ ", " +rest+ "and "+multiplication);



}

calculator();
//Result: 5, -1and 6







//d3) Por ultimo, la división
function calculator(){

	//Importante. Cuando introducimos el numero con el prompt es un string, con lo que hay que convertirlo a número entero con parseInt
	var value1 = prompt("Write a number to do a sum");
	var number1 = parseInt(value1); 

	
	var value2= prompt("Write another number");
		var number2 = parseInt(value2);

	var sum = number1 + number2;
	var rest= number1 - number2;
	var multiplication = number1 * number2;
	var division = number1 / number2;

	console.log(+sum+ ", " +rest+ ", "+multiplication+ " and "+division);



}

calculator();
//Result: 5, -1, 6 and 0.6666666666666666







// d4) Ahora, intenta multiplicar un número por una string, que devuelve?
function calculator(){

	var number = 10; 	
	var textString= "hour";
	var multiplication = number * textString;
	console.log(multiplication);


}

calculator();
// Result: NaN











// e) Podemos controlar este error con un condicional if?
function calculator(){

	//Importante. Cuando introducimos el numero con el prompt es un string, con lo que hay que convertirlo a número entero con parseInt
	
	var number = 10; 	
	var textString= "hour";
		
		if(textString){
			var multiplication = number * textString;
			console.log(multiplication);

		}


}

calculator();
//Result: no se puede porque sigue siendo una string por un número














	






	








