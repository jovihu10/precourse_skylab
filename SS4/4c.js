
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












//c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)
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
	var dividedSecondOnion2 = parseInt(paramEncripted2) / 2;
	// Después de dividir tenemos el num 4523
	//Lo convertimos a string para luego poderlo meter en un array con el split
	var stringOnion2 = dividedSecondOnion2.toString();
	// hacemos split para tener un array y poder jugar con el número
	var splitOnion2 = stringOnion2.split("");


	// Queremos el num 					4532
										//52

	
	console.log(paramEncripted2)


}

decrypt();





