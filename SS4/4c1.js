// c6) El usuario podrá solo introducir letras, cada número del 0 al 9 corresponderá a varias letras. Podéis seguir este esquema.


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


// Hacer un if en que si es menor o igual que 9, solo será var units
// hacer otro if en que si  es === 0, 10, 20, 30, 40 , 50, 60, 70, 80, 90 será solo tens
// hacer otro if en que si es menor de 100 será tens + units (ex: twenty eigth)
// otro if en que si es entre 10 y 10 sea teens

// luego que lo recorra con un for

// sayItWithWords(5) => //output Five
// sayItWithWords(23) => //output twenty-three
// sayItWithWords(71) => //output seventy-one


