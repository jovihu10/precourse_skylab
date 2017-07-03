// a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, 
// muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), 
// además, cada elemento de la pareja deberá estar multiplicada por 2.



function master(){

function couples(parameter){
//Para multiplicar el array *2 lo hacemos con este método de map, con el return. 
//Importante, la función tiene que estar cerrada así, y poner las variables fuera
//Este link lo explica muy bien http://www.enrique7mc.com/2015/12/metodos-map-filter-y-sort-en-javascript/
	return parameter * 2;
}

couples();
	



	var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	var result = numbers.map(couples);

	var i;

	//He puesto el contador i=1 porque así pueda decir 1º, 2º, 3º...
	for (i=1; i<result.length; i++){

		//he puesto result[i-1] y [i] para que así me dé los dos valores de la cadena al hacer el for
		console.log(i + "ª pareja " + result[i-1].toString() +(" - ") +result[i].toString());
		
	}

}


master();
/* Result:
1ª pareja 2 - 4
2ª pareja 4 - 6
3ª pareja 6 - 8
4ª pareja 8 - 10
5ª pareja 10 - 12
6ª pareja 12 - 14
7ª pareja 14 - 16
8ª pareja 16 - 18
*/









//a1) La funcion debería aceptar la array a tratar como argumento.
function master(num1, num2, num3, num4, num5, num6, num7, num8, num9){

function couples(parameter){
//Para multiplicar el array *2 lo hacemos con este método de map, con el return. 
//Importante, la función tiene que estar cerrada así, y poner las variables fuera
//Este link lo explica muy bien http://www.enrique7mc.com/2015/12/metodos-map-filter-y-sort-en-javascript/
	return parameter * 2;
}

couples();
	



	var numbers = [];
	numbers.push(num1);
	numbers.push(num2);
	numbers.push(num3);
	numbers.push(num4);
	numbers.push(num5);
	numbers.push(num6);
	numbers.push(num7);
	numbers.push(num8);
	numbers.push(num9);


	var result = numbers.map(couples);
	
	var i;

	//He puesto el contador i=1 porque así pueda decir 1º, 2º, 3º...
	for (i=1; i<result.length; i++){

		//he puesto result[i-1] y [i] para que así me dé los dos valores de la cadena al hacer el for
		console.log(i + "ª pareja " + result[i-1].toString() +(" - ") +result[i].toString());
		
	}

}


master(1, 2, 3, 4, 5, 6, 7, 8, 9);

/*
Result: 
1ª pareja 2 - 4
2ª pareja 4 - 6
3ª pareja 6 - 8
4ª pareja 8 - 10
5ª pareja 10 - 12
6ª pareja 12 - 14
7ª pareja 14 - 16
8ª pareja 16 - 18

*/








//a2) Pasa también el numero a multiplicar a la función como argumento. En vez de multiplicar por 2 lo haremos por 12
function master(num1, num2, num3, num4, num5, num6, num7, num8, num9, numToMultiply){

function couples(parameter){
//Para multiplicar el array *2 lo hacemos con este método de map, con el return. 
//Importante, la función tiene que estar cerrada así, y poner las variables fuera
//Este link lo explica muy bien http://www.enrique7mc.com/2015/12/metodos-map-filter-y-sort-en-javascript/
	return parameter * numToMultiply;
}

couples();
	



	var numbers = [];
	numbers.push(num1);
	numbers.push(num2);
	numbers.push(num3);
	numbers.push(num4);
	numbers.push(num5);
	numbers.push(num6);
	numbers.push(num7);
	numbers.push(num8);
	numbers.push(num9);


	var result = numbers.map(couples);
	
	var i;
	console.log("El número elegido es " +numToMultiply );

	//He puesto el contador i=1 porque así pueda decir 1º, 2º, 3º...
	for (i=1; i<result.length; i++){

		//he puesto result[i-1] y [i] para que así me dé los dos valores de la cadena al hacer el for
		
		console.log(i + "ª pareja " + result[i-1].toString() +(" - ") +result[i].toString());
		
	}

}


master(1, 2, 3, 4, 5, 6, 7, 8, 9, 12);

/*Result:
El número elegido es 12
1ª pareja 12 - 24
2ª pareja 24 - 36
3ª pareja 36 - 48
4ª pareja 48 - 60
5ª pareja 60 - 72
6ª pareja 72 - 84
7ª pareja 84 - 96
8ª pareja 96 - 108

*/




//a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total. El último número de argumento (parámetro) lo podemos usar para esto.
//Usaremos el número 3 de delimitador

function master(num1, num2, num3, num4, num5, num6, num7, num8, num9, numToMultiply, delimiter){

function couples(parameter){


	return parameter * numToMultiply;
}

couples();
	



	var numbers = [];
	numbers.push(num1);
	numbers.push(num2);
	numbers.push(num3);
	numbers.push(num4);
	numbers.push(num5);
	numbers.push(num6);
	numbers.push(num7);
	numbers.push(num8);
	numbers.push(num9);


	var result = numbers.map(couples);
	
	var i;
	console.log("El número elegido es " + numToMultiply );
	console.log("Se quieren mostrar las " + delimiter + " primeras parejas");

	//He puesto el contador i=1 porque así pueda decir 1º, 2º, 3º...
	for (i=1; i<=delimiter; i++){

		//he puesto result[i-1] y [i] para que así me dé los dos valores de la cadena al hacer el for
		
		console.log(i + "ª pareja " + result[i-1].toString() +(" - ") +result[i].toString());
		
	}

}


master(1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 3);

/*
Result:
El número elegido es 12
Se quieren mostrar las 3 primeras parejas
1ª pareja 12 - 24
2ª pareja 24 - 36
3ª pareja 36 - 48

*/











//b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci? https://www.mathsisfun.com/numbers/fibonacci-sequence.html
function fibo(){

var i;
var fib = []; // Iinicializamos el array

fib[0] = 0;
fib[1] = 1;
for(i=2; i<=10; i++)
{
    //La secuencia de fibonacci es la suma de los dos anteriores números, y así eternamente
    fib[i] = fib[i-2] + fib[i-1];
    console.log(fib[i]);
}

}
fibo();
/* Result: 
1
2
3
5
8
13
21
34
55

*/






//b2) Puedes añadir además, la posición de cada resultado?
function fibo(){

var i;
var fib = []; // Iinicializamos el array

fib[0] = 0;
fib[1] = 1;
for(i=2; i<=10; i++)
{
    //La secuencia de fibonacci es la suma de los dos anteriores números, y así eternamente
    fib[i] = fib[i-2] + fib[i-1];

    //le resto 1 al contador para que así pueda poner 1º, 2º, 3º, ya que sino empezaría por 2, que es donde lo hemos inicializado
    console.log(i-1+"ª position for the number " + fib[i]);
}

}
fibo();

/* Result:
1ª position for the number 1
2ª position for the number 2
3ª position for the number 3
4ª position for the number 5
5ª position for the number 8
6ª position for the number 13
7ª position for the number 21
8ª position for the number 34
9ª position for the number 55

*/






//b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.
function fibo(){

var i;
var fib = []; // Iinicializamos el array

fib[0] = 0;
fib[1] = 1;
for(i=2; i<=10; i++)
{
    //La secuencia de fibonacci es la suma de los dos anteriores números, y así eternamente
    fib[i] = fib[i-2] + fib[i-1];

//Creamos un array e introduciremos todos los valores del otro array llamándolos con push
    
}
var arrayFibo = [];
    arrayFibo.push(fib[0]);
    arrayFibo.push(fib[1]);
    arrayFibo.push(fib[2]);
    arrayFibo.push(fib[3]);
    arrayFibo.push(fib[4]);
    arrayFibo.push(fib[5]);
    arrayFibo.push(fib[6]);
    arrayFibo.push(fib[7]);
    arrayFibo.push(fib[8]);
    arrayFibo.push(fib[9]);
    arrayFibo.push(fib[10]);


   


    //le resto 1 al contador para que así pueda poner 1º, 2º, 3º, ya que sino empezaría por 2, que es donde lo hemos inicializado
    console.log("The number of fibonacci are " + arrayFibo);
}
fibo();
// Result: The number of fibonacci are 0,1,1,2,3,5,8,13,21,34,55





//b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.

//function fibo(10){}
//... 55 - pos 10º
function fibo(){

var i;
var fib = []; // Iinicializamos el array

fib[0] = 0;
fib[1] = 1;
for(i=2; i<=10; i++)
{
    //La secuencia de fibonacci es la suma de los dos anteriores números, y así eternamente
    fib[i] = fib[i-2] + fib[i-1];

//Creamos un array e introduciremos todos los valores del otro array llamándolos con push
    
}
var arrayFibo = [];
    arrayFibo.push(fib[0]);
    arrayFibo.push(fib[1]);
    arrayFibo.push(fib[2]);
    arrayFibo.push(fib[3]);
    arrayFibo.push(fib[4]);
    arrayFibo.push(fib[5]);
    arrayFibo.push(fib[6]);
    arrayFibo.push(fib[7]);
    arrayFibo.push(fib[8]);
    arrayFibo.push(fib[9]);
    arrayFibo.push(fib[10]);


   


    //le resto 1 al contador para que así pueda poner 1º, 2º, 3º, ya que sino empezaría por 2, que es donde lo hemos inicializado
    console.log("The number of fibonacci are " + arrayFibo);
}
fibo();
//No lo sé!!!!










//b5) Ahora, muestra los resultados en forma piramidal:


function fibo(){

var i;
var fib = []; // Iinicializamos el array

fib[0] = 0;
fib[1] = 1;
for(i=2; i<=10; i++)
{
    //La secuencia de fibonacci es la suma de los dos anteriores números, y así eternamente
    fib[i] = fib[i-2] + fib[i-1];
    fib1 = fib.toString();
    console.log(fib1);
}

//for( i=10; i<=2; i--){
//console.log("hola")

//};




}
fibo();
//No acabado!!!










//c) Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creandio un nuevo código
// Primero conviértelo en el número 7123
// Método 1
function modifyNumber(code){
	             //tenemos el num 3712

	             //Queremos elnum 7123

// Importante! Para que con el split nos construya un array, necesitamos poner las comillas en el split. 
// Si no las pusiéramos sería un array de un solo elemento 
	var codeString = code.toString();
	var codeSplit = codeString.split("");

	

	//Con el shift hemos quitado el primer num (3) y memorizado en memorizado en la variable
	var seven = codeSplit.shift();

	//ahora añadimos el 3 al final con el push
	//Usamos ahora join para volverlo a convertir en un string sin separacions

	codeSplit.push(seven);
	var resultString1 = codeSplit.join("");  
	console.log("The first call is the number " + resultString1);
	// REsult: The first call is the number 7123



	
	

	//Ahora conviértelo en el número 1237

	var one =codeSplit.shift();
	codeSplit.push(one);
	var resultString2 = codeSplit.join(""); 

	console.log("The second call is the number " +resultString2);
	// Result: The second call is the number 1237
	


	//Ahora conviértelo en el número 2371

	var lastOne = codeSplit.shift();
	codeSplit.push(lastOne);
	var resultString3 = codeSplit.join(""); 

	console.log("The third call is the number " +resultString3);
	// REsult: The third call is the number 2371




}
modifyNumber(3712);
// Result:
// The first call is the number 7123
// The second call is the number 1237
// The third call is the number 2371
// The original number is 3712






// Método 2. (el que se busca es el primer método, pero también es válido)
// Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creandio un nuevo código
// Primero conviértelo en el número 7123
// Método 1
function modifyNumber(){
	var code = 3712;
	var codeString = code.toString();
	var newCodeString = codeString.substring(1,2) + codeString.substring(2,3) + codeString.substring(3,4) + codeString.substring(0,1);
	var newCode = parseInt(newCodeString);
	console.log("The first call is the number " + newCode);


	//Ahora conviértelo en el número 1237
	var newCodeString2 = codeString.substring(2,3) + codeString.substring(3,4) + codeString.substring(0,1) + codeString.substring(1,2);
	var newCode2 = parseInt(newCodeString2);
	console.log("The second call is the number " + newCode2);


	//Ahora conviértelo en el número 2371
	var newCodeString3 = codeString.substring(3,4) + codeString.substring(0,1) + codeString.substring(1,2) + codeString.substring(2,3);
	var newCode3 = parseInt(newCodeString3);
	console.log("The third call is the number " + newCode3);


	//Ahora retorna el número original
	console.log("The original number is " + code);




}
modifyNumber();
// Result:
// The first call is the number 7123
// The second call is the number 1237
// The third call is the number 2371
// The original number is 3712



//Método2 (Y correcto)






//c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)

//Método1
//Importante. Si queremos usar los parametros y darles un valor, simplemente no les asignamos ningún valor abajo. Así les podemos introducir uno
function codeScript(parameter1, parameter2){
	//Hacemos el primer número
	parameter1 = 3452;
	var parameter1String = parameter1.toString();
	// pasamos el parámetro de un string a un array.

	var parameter1Split = parameter1String.split("");
	console.log("The first original code is " + parameter1String);

	var firstNumber1 =parameter1Split.shift();
	parameter1Split.push(firstNumber1);
	var resultString1 = parameter1Split.join("");
	console.log(("The first encripted number is "+resultString1));


	// Hacemos el segundo número
	parameter2 = 5432;
	var parameter2String = parameter2.toString();
	// pasamos el parámetro de un string a un array.

	var parameter2Split = parameter2String.split("");
	console.log("The second original code is " + parameter2String);

	var firstNumber2 =parameter2Split.shift();
	parameter2Split.push(firstNumber2);
	var resultString2 = parameter2Split.join("");
	console.log(("The second encripted number is "+resultString2));
	



}
codeScript();
// REsult: The first original code is 3452
// The first encripted number is 4523
// The second original code is 5432
// The second encripted number is 4325















//Método2
//Importante. Si queremos usar los parametros y darles un valor, simplemente no les asignamos ningún valor abajo. Así les podemos introducir uno
function codeScript(parameter1, parameter2){
	parameter1 = ("Write a code of 4 numbers");
	


	var firstCodeString = parameter1.toString();

	var encriptedCode = firstCodeString.substring(3,4) + firstCodeString.substring(2,3) + firstCodeString.substring(0,1) + firstCodeString.substring(1,2);

	parameter2 = prompt("Write another code of 4 numbers");
	console.log("The first encripted code is " + encriptedCode);
	


	var secondCodeString = parameter2.toString();

	var encriptedCode2 = secondCodeString.substring(3,4) + secondCodeString.substring(2,3) + secondCodeString.substring(0,1) + secondCodeString.substring(1,2);
	console.log("The second encripted code is " + encriptedCode2);



}
codeScript();
// REsult: The first encripted code is 4312
// The second encripted code is 1423













// c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, 
// multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10. 
// (Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores)
function codeScript(parameter1, parameter2){
	//Hacemos el primer número
	parameter1 = 3452;
	//Creamos otra variable donde hacemos *2 el valor del parámetro como otra capa de seguridad
	parameter1onion = parameter1 * 2;
	var parameter1String = parameter1onion.toString();
	// pasamos el parámetro de un string a un array.

	var parameter1Split = parameter1String.split("");
	console.log("The first original code is " + parameter1String);

	var firstNumber1 =parameter1Split.shift();
	parameter1Split.push(firstNumber1);
	var resultString1 = parameter1Split.join("");
	console.log(("The first encripted number is "+resultString1));


	// Hacemos el segundo número
	parameter2 = 4532;
	parameter2onion =parameter2 * 2;
	var parameter2String = parameter2onion.toString();
	// pasamos el parámetro de un string a un array.

	var parameter2Split = parameter2String.split("");
	console.log("The second original code is " + parameter2String);

	var firstNumber2 =parameter2Split.shift();
	parameter2Split.push(firstNumber2);
	var resultString2 = parameter2Split.join("");
	console.log(("The second encripted number is "+resultString2));
	



}
codeScript();
// REsult: The first original code is 6904
// The first encripted number is 9046
// The second original code is 9064
// The second encripted number is 0649















// c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, 
// multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10. 
// (Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores)
//Método2
function codeScript(parameter1, parameter2){
	var firstCodeString = parameter1.toString();
	var encriptedCode = firstCodeString.substring(3,4) + firstCodeString.substring(2,3) + firstCodeString.substring(0,1) + firstCodeString.substring(1,2);
	//Segunda capa de seguridad. Multiplicaremos el número *3
	var secondOnion1 =encriptedCode * 2;
	console.log("The first encripted code is " + secondOnion1);

	parameter2 = prompt("Write another code of 4 numbers");

	var secondCodeString = parameter2.toString();

	var encriptedCode2 = secondCodeString.substring(3,4) + secondCodeString.substring(2,3) + secondCodeString.substring(0,1) + secondCodeString.substring(1,2);
	var secondOnion2 = encriptedCode2 *2;
	console.log("The second encripted code is " + secondOnion2);



}
codeScript(8624, 2486);
// Result: The first encripted code is 8624
// The second encripted code is 2486










//c4) Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento un código encriptado 
// (y correspondientemente multiplicado en el apartado c3) y nos devuelva el código desencriptado.

//Como las dos funciones van a ser independientes, hago que las variables que serán el resultado encriptado sean globales
var copySecondOnion1;
var copySecondOnion2;


function codeScript(parameter1, parameter2){
	//Hacemos el primer número
	parameter1 = 3452;
	//Creamos otra variable donde hacemos *2 el valor del parámetro como otra capa de seguridad
	parameter1onion = parameter1 * 2;
	var parameter1String = parameter1onion.toString();
	// pasamos el parámetro de un string a un array.

	var parameter1Split = parameter1String.split("");
	console.log("The first original code is " + parameter1String);

	var firstNumber1 =parameter1Split.shift();
	parameter1Split.push(firstNumber1);
	var resultString1 = parameter1Split.join("");

	//Igualamos la variable encriptada de resultado final con la variable global que hemos creado para poder usarla en la otra función
	copySecondOnion1 = resultString1;
	console.log("The first encripted number is "+copySecondOnion1);


	// Hacemos el segundo número
	parameter2 = 4532;
	parameter2onion =parameter2 * 2;
	var parameter2String = parameter2onion.toString();
	// pasamos el parámetro de un string a un array.

	var parameter2Split = parameter2String.split("");
	console.log("The second original code is " + parameter2String);

	var firstNumber2 =parameter2Split.shift();
	parameter2Split.push(firstNumber2);
	var resultString2 = parameter2Split.join("");
	//Igualamos la variable encriptada de resultado final con la variable global que hemos creado para poder usarla en la otra función
	copySecondOnion2 = resultString2;
	console.log("The second encripted number is "+copySecondOnion2);
	

}
codeScript();


function decrypt(paramEncripted1, paramEncripted2){

	//Desencriptado parámetro1
	paramEncripted1 = copySecondOnion1;
	var dividedSecondOnion1 = parseInt(paramEncripted1) / 2;
	// Después de dividir tenemos el num 4523
	//Lo convertimos a string para luego poderlo meter en un array con el split
	var stringOnion1 = dividedSecondOnion1.toString();
	// hacemos split para tener un array y poder jugar con el número
	var splitOnion1 = stringOnion1.split("");


	// Queremos el num 					3452
										//52

	

	var numberThree = splitOnion1.pop();
	//En esta variable hemos almacenado el num 3
	//Ahora tenemos el num 52


	//Añadiremos el 3 delante

	splitOnion1.unshift(numberThree);
	//Ahora tenemos el num 352

	var numberTwoo = splitOnion1.pop();
	//Quitamos el 2 y lo almacenamos en esta variable

	//Ahora con push añadimos al array el número 2 al final (var numberTwoo)
	splitOnion1.push(numberTwoo);

	// Usamos join para convertir el array en un string

	var resDecrypted1 = splitOnion1.join("")


	console.log(resDecrypted1);






	//Desencriptado parámetro2
	paramEncripted2 = copySecondOnion2;

	// Después de dividir tenemos el num 4523
	//Lo convertimos a string para luego poderlo meter en un array con el split
	var stringEncripted2 = paramEncripted2.toString();
	// hacemos split para tener un array y poder jugar con el número
	var splitEncripted2 = stringEncripted2.split("");


	// Queremos el num 					9064
			//Tenemos el				0649

	var nine = splitEncripted2.pop();
	//Quitamos el num 9 con pop

	splitEncripted2.unshift(nine);
	//Hemos puesto el 9 delante y ahora tenemos el 9064

	var joinEncripted2 = splitEncripted2.join("");
	//Ahora hemos convertido el array en un string


	var dividedEncripted2 = joinEncripted2 / 2;
	//Ahora ya tenemos el 4532, que era el num inicial
	
	
	console.log(dividedEncripted2)


}

decrypt();
// Result: The first original code is 6904
// The first encripted number is 9046
// The second original code is 9064
// The second encripted number is 0649
// 3452
// 4532














//Método2
var copySecondOnion1;
var copySecondOnion2;

function codeScript(parameter1, parameter2){
	parameter1 = prompt("Write a code of 4 numbers");
	


	var firstCodeString = parameter1.toString();

	var encriptedCode = firstCodeString.substring(3,4) + firstCodeString.substring(2,3) + firstCodeString.substring(0,1) + firstCodeString.substring(1,2);
	//Segunda capa de seguridad. Multiplicaremos el número *3
	var secondOnion1 =encriptedCode *2;
	copySecondOnion1 = secondOnion1;
	
	console.log("The first encripted code is " + secondOnion1);

	

	parameter2 = prompt("Write another code of 4 numbers");

	var secondCodeString = parameter2.toString();

	var encriptedCode2 = secondCodeString.substring(3,4) + secondCodeString.substring(2,3) + secondCodeString.substring(0,1) + secondCodeString.substring(1,2);
	var secondOnion2 = encriptedCode2 *2;
	copySecondOnion2 = secondOnion2;
	console.log("The second encripted code is " + secondOnion2);
	


};
codeScript( );


function decrypter(originalNum1, OriginalNum2){

		originalNum1 = copySecondOnion1;

		//quitamos la multiplicación que hicimos previamente
		var dividedOrNum1 = parseInt(originalNum1) / 2;
		var stringDivided1 =dividedOrNum1.toString();

		//hacemos la desencriptación, que será llamar al número 
		var decrypted1 = stringDivided1.substring(2,3) + stringDivided1.substring(3,4) + stringDivided1.substring(1,2) + stringDivided1.substring(0,1);

		
		
		console.log("the first original number is "+ decrypted1);




	//Repetimos el proceso para sacar el número 2 original
	originalNum2 = copySecondOnion2;

		//quitamos la multiplicación que hicimos previamente
		var dividedOrNum2 = parseInt(originalNum1) / 2;
		var stringDivided2 =dividedOrNum2.toString();

		//hacemos la desencriptación, que será llamar al número 
		var decrypted2 = stringDivided2.substring(2,3) + stringDivided2.substring(3,4) + stringDivided2.substring(1,2) + stringDivided2.substring(0,1);

		
		
		console.log("the second original number is "+ decrypted2);

	};

	decrypter();

	// Result: The first encripted code is 8624
	// The second encripted code is 8624
	// the first original number is 1234
	// the second original number is 1234










//	c5) Añade las dos funciones a la misma función padre, de forma que encripte y desencripte a la vez cuando termine de ejecutarse.
var copySecondOnion1;
var copySecondOnion2;


function father (){

function codeScript(parameter1, parameter2){
	//Hacemos el primer número
	parameter1 = 3452;
	//Creamos otra variable donde hacemos *2 el valor del parámetro como otra capa de seguridad
	parameter1onion = parameter1 * 2;
	var parameter1String = parameter1onion.toString();
	// pasamos el parámetro de un string a un array.

	var parameter1Split = parameter1String.split("");
	console.log("The first original code is " + parameter1String);

	var firstNumber1 =parameter1Split.shift();
	parameter1Split.push(firstNumber1);
	var resultString1 = parameter1Split.join("");

	//Igualamos la variable encriptada de resultado final con la variable global que hemos creado para poder usarla en la otra función
	copySecondOnion1 = resultString1;
	console.log("The first encripted number is "+copySecondOnion1);


	// Hacemos el segundo número
	parameter2 = 4532;
	parameter2onion =parameter2 * 2;
	var parameter2String = parameter2onion.toString();
	// pasamos el parámetro de un string a un array.

	var parameter2Split = parameter2String.split("");
	console.log("The second original code is " + parameter2String);

	var firstNumber2 =parameter2Split.shift();
	parameter2Split.push(firstNumber2);
	var resultString2 = parameter2Split.join("");
	//Igualamos la variable encriptada de resultado final con la variable global que hemos creado para poder usarla en la otra función
	copySecondOnion2 = resultString2;
	console.log("The second encripted number is "+copySecondOnion2);
	

}
codeScript();


function decrypt(paramEncripted1, paramEncripted2){

	//Desencriptado parámetro1
	paramEncripted1 = copySecondOnion1;
	var dividedSecondOnion1 = parseInt(paramEncripted1) / 2;
	// Después de dividir tenemos el num 4523
	//Lo convertimos a string para luego poderlo meter en un array con el split
	var stringOnion1 = dividedSecondOnion1.toString();
	// hacemos split para tener un array y poder jugar con el número
	var splitOnion1 = stringOnion1.split("");


	// Queremos el num 					3452
										//52

	

	var numberThree = splitOnion1.pop();
	//En esta variable hemos almacenado el num 3
	//Ahora tenemos el num 52


	//Añadiremos el 3 delante

	splitOnion1.unshift(numberThree);
	//Ahora tenemos el num 352

	var numberTwoo = splitOnion1.pop();
	//Quitamos el 2 y lo almacenamos en esta variable

	//Ahora con push añadimos al array el número 2 al final (var numberTwoo)
	splitOnion1.push(numberTwoo);

	// Usamos join para convertir el array en un string

	var resDecrypted1 = splitOnion1.join("")


	console.log(resDecrypted1);






	//Desencriptado parámetro2
	paramEncripted2 = copySecondOnion2;

	// Después de dividir tenemos el num 4523
	//Lo convertimos a string para luego poderlo meter en un array con el split
	var stringEncripted2 = paramEncripted2.toString();
	// hacemos split para tener un array y poder jugar con el número
	var splitEncripted2 = stringEncripted2.split("");


	// Queremos el num 					9064
			//Tenemos el				0649

	var nine = splitEncripted2.pop();
	//Quitamos el num 9 con pop

	splitEncripted2.unshift(nine);
	//Hemos puesto el 9 delante y ahora tenemos el 9064

	var joinEncripted2 = splitEncripted2.join("");
	//Ahora hemos convertido el array en un string


	var dividedEncripted2 = joinEncripted2 / 2;
	//Ahora ya tenemos el 4532, que era el num inicial
	
	
	console.log(dividedEncripted2)


}

decrypt();

}

father();
// Result: The first original code is 6904
// The first encripted number is 9046
// The second original code is 9064
// The second encripted number is 0649
// 3452
// 4532

















//c6) El usuario podrá solo introducir letras, cada número del 0 al 9 corresponderá a varias letras. Podéis seguir este esquema.
function letters(){



	var dictionary = {
    0: ['A', 'K', 'T'],
    1: ['B', 'L', 'U'],
    2: ['C', 'M', 'V'],
    3: ['D', 'N', 'W'],
    4: ['E', 'Ñ', 'X'],
    5: ['F', 'O', 'Y'],
    6: ['G', 'P', 'Z'],
    7: ['H', 'Q', '.'],
    8: ['I', 'R', ','],
    9: ['J', 'S', ' ']
}

// var arrDictionary = [];



//Para recorrer esta lista de objetos, el primer número es el número concreto y el segundo la letra
	console.log(dictionary[7][0] + dictionary[8][0] + "," + dictionary[3][2] + dictionary[4][0] + "," + dictionary[3][1] + dictionary[4][0] + dictionary[4][0] + dictionary[3][0] + "," + dictionary[7][0] + dictionary[4][0] + dictionary[1][1] + dictionary[6][1]);



}

letters();
// Result: HI,WE,NEED,HELP




















	


// d) Crea un programa que use la encriptacion Romana, como es? Si tenemos la palabra SKYLAB, 
// la palabra encriptada será SLKAYB. Si divides la palabra original en 2 grupos obtienes:
// SKY
//|-|-|
// LAB Entonces, uniendo las primeras letras de cada grupo, las segundas y las terceras obtienes SLKAYB.
// Entonces, el programa deberá recibir SKYLAB y retornar SLKAYB
//Dividimos el string en dos arrays. Ahí irá la primera letra con la primera, la segunda con la segunda y la tercera con la tercera

//SKY LAB
//SLKAYB

//SL KA YB
function romeEncript(){
	var skylab = "SKYLAB";

	//Dividimos "SKYLAB" en las palabras "SKY" y "LAB"
	var sky = skylab.substring(0, 3);
	var lab = skylab.substring(3, 7);
	
	//ahora convertimos en un array las letras de sky y en otro las de lab 
	var arrSky = sky.split("");
	var arrLab = lab.split("");
	var i;
	var arrSum = [];

	// Ahora hacemos un for para que nos ponga la primera letra de un array
	// con la primera del otro array, la segunda de uno con la segunda del otro...
	for(i = 0; i<arrSky.length; i++){

		//Haciendo esto tenemos SL KA YB
		var sum = arrSky[i] + arrLab[i];

		//Añadimos los arrays al array arrSum
		var sum1 = arrSum.push(sum);
		

		//Hacemos join para unir todos los resultados 
		var result = arrSum.join("");
	

	}

	// mostramos consola fuera del for para que solo imprima el resultado final, SLKAYB
		console.log(result);

}

romeEncript();
// Result: SLKAYB


















// d2) Programa el desencriptador, pasa como parámetro SLKAYB y que devuelva SKYLAB.
// Hint: for decrypt, only catch the pair words like: S L K A Y B , then, you get SKY, 
// the next step is catch the odd words, S L K A Y B, group the two groups and you get the original word.
function romeEncript(){
	var skylab = "SKYLAB";

	//Dividimos "SKYLAB" en las palabras "SKY" y "LAB"
	var sky = skylab.substring(0, 3);
	var lab = skylab.substring(3, 7);
	
	//ahora convertimos en un array las letras de sky y en otro las de lab 
	var arrSky = sky.split("");
	var arrLab = lab.split("");
	var i;
	var arrSum = [];

	// Ahora hacemos un for para que nos ponga la primera letra de un array
	// con la primera del otro array, la segunda de uno con la segunda del otro...
	for(i = 0; i<arrSky.length; i++){

		//Haciendo esto tenemos SL KA YB
		var sum = arrSky[i] + arrLab[i];

		//Añadimos los arrays al array arrSum
		var sum1 = arrSum.push(sum);
		

		//Hacemos join para unir todos los resultados 
		var result = arrSum.join("");
	

	}

	// mostramos consola fuera del for para que solo imprima el resultado final, SLKAYB
		console.log(result);
		



		function decrypt(){
			 var resultSplit = result.split("");

			// usaremos esta variable para sacar la palabra sky de SLKAYB. 
			// Lo haremos con un bucle for y que cuente los impares solo (con i+=2)
			var decripted1 = resultSplit;
			
			var arrDecripted = [];

			// con el 1er for Esto nos da "S K Y"
			for(i =0; i<decripted1.length; i+=2){
				decripted1[i];
				//en decripted1[i] hay almacenado S K Y
//console.log(decripted1[i])
				// Ahora el array S K Y lo introducimos en el array arrDecripted con un push
				var decripted1Arr = arrDecripted.push(decripted1[i]);
				//console.log(decripted1[i]);
							
			

			};
			
		

			// Hacemos otra variable y otro for para las letras pares (LAB). (por eso será i+1)
			var decripted2 = resultSplit;

			for(i =1; i<decripted2.length; i+=2){
				decripted2[i];

				// Ahora el array L A B lo introducimos en el array arrDecripted con un push
				// En arrDecripted ya tenemos "S K Y" y "L A B"
				var decripted2Arr = arrDecripted.push(decripted2[i]);
				//console.log(decripted2[i]);
			};

			// convertimos el array en un string con join y ya nos desencripta, devolviéndonos SKYLAB
			var decriptedResult = arrDecripted.join("");
			console.log(decriptedResult);
			

		};
		

		decrypt();


};

romeEncript();
// Result: SLKAYB
// SKYLAB


















// d4) Lo tienes? Prueba ahora con SKYLABCODERS. Cambia la función para que pueda aceptar palabras más largas.
function romeEncript(){
	var skylab = "SKYLABCODERS";

	//Dividimos "SKYLAB" en las palabras "SKY" y "LAB"
	var sky = skylab.substring(0, 6);
	console.log(sky);
	var lab = skylab.substring(6, 13);
	console.log(lab);
	//ahora convertimos en un array las letras de sky y en otro las de lab 
	var arrSky = sky.split("");
	var arrLab = lab.split("");
	var i;
	var arrSum = [];

	// Ahora hacemos un for para que nos ponga la primera letra de un array
	// con la primera del otro array, la segunda de uno con la segunda del otro...
	for(i = 0; i<arrSky.length; i++){

		//Haciendo esto tenemos SL KA YB
		var sum = arrSky[i] + arrLab[i];

		//Añadimos los arrays al array arrSum
		var sum1 = arrSum.push(sum);
		

		//Hacemos join para unir todos los resultados 
		var result = arrSum.join("");
	

	}

	// mostramos consola fuera del for para que solo imprima el resultado final, SLKAYB
		console.log(result);
		



		function decrypt(){
			 var resultSplit = result.split("");

			// usaremos esta variable para sacar la palabra sky de SLKAYB. 
			// Lo haremos con un bucle for y que cuente los impares solo (con i+=2)
			var decripted1 = resultSplit;
			
			
			var arrDecripted = [];

			// con el 1er for Esto nos da "S K Y"
			for(i =0; i<decripted1.length; i+=2){
				decripted1[i];
				//en decripted1[i] hay almacenado S K Y
//console.log(decripted1[i])
				// Ahora el array S K Y lo introducimos en el array arrDecripted con un push
				var decripted1Arr = arrDecripted.push(decripted1[i]);
				//console.log(decripted1[i]);
							
			

			};
			
		



			// Hacemos otra variable y otro for para las letras pares (LAB). (por eso será i+1)
			var decripted2 = resultSplit;

			for(i =1; i<decripted2.length; i+=2){
				decripted2[i];

				// Ahora el array L A B lo introducimos en el array arrDecripted con un push
				// En arrDecripted ya tenemos "S K Y" y "L A B"
				var decripted2Arr = arrDecripted.push(decripted2[i]);
				//console.log(decripted2[i]);
			};

			// convertimos el array en un string con join y ya nos desencripta, devolviéndonos SKYLAB
			var decriptedResult = arrDecripted.join("");
			console.log(decriptedResult);
			



		};
		

		decrypt();


};

romeEncript();
// Result: SCKOYDLEARBS
// SKYLABCODERS

















// e) Crea un programa al que le introduces un número como parámetro del 0 al 100 
// y devuelve el número transformado a alfabeto normal, es decir:
function nameNumber(number){

	//Tenemos un número
	var writeNumber = prompt("write a number");

		number = writeNumber;
	//convertimos el número a string
	var numberString = number.toString();

	//ahora con split lo convertimos en un array
	var numberSplit = numberString.split("");


	var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	var tens = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

console.log(numberSplit[0]);
	//Ahora, en función del número que sea cada valor de numSlit, se activará y mostrará (o no)
	//un valor de los arrays units, tens y teens
	
	//decenas, 10, 20, 30...
	var i;
	console.log(numberSplit[1])




	if((numberSplit[0] <= 9) && (numberSplit[1] <= 9) && (numberSplit[1] >=2) && (numberSplit[2] <=9)){
		for(i=0; i<numberSplit[0]; i++){
			units[i];
		}

	

	var count;

		for(count=0; count<numberSplit[1]; count++){
			tens[count];
			
		}

		var count2;

	for(count2=0; count2 < numberSplit[2]; count2++){
		units[count2];
	}


	
console.log(units[i]);
console.log(units[i] + (" ") + tens[count] + (" ") + units[count2]);
//Con esto me están dando las unidades, en este caso, "one"



//Estos if es para el caso normal
//Para las centenas (cien como mucho, porque hemos creado un prgrama del número 0 al 100)


	




//En caso de que el segundo array de un valor más bajo de 2(12, 13, 14...), que haga esto

}else{

	for(i=0; i<numberSplit[0]; i++){
			units[i];
		}





var count3;
 
	for(count3 = 0; count3 <numberSplit[2]; count3++){
		teens[count3];
	}
	console.log(units[i] + (" ") + teens[count3])
}




};
nameNumber();
//Result: one fifty three



