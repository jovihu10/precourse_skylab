function nameNumber(units, tens, teens){

	//Tenemos un número
	var number= 112;

	//convertimos el número a string
	var numberString = number.toString();

	//ahora con split lo convertimos en un array
	var numberSplit = numberString.split("");


	var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	var tens = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	var teens = ['','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

console.log(numberSplit[0]);
	//Ahora, en función del número que sea cada valor de numSlit, se activará y mostrará (o no)
	//un valor de los arrays units, tens y teens
	
	//decenas, 10, 20, 30...
	var i;
	console.log(numberSplit[1])




	if(numberSplit[0] <= 9){
		for(i=0; i<numberSplit[0]; i++){
			units[i];
		}
	}
console.log(units[i]);
//Con esto me están dando las unidades, en este caso, "one"




//Para las centenas (cien como mucho, porque hemos creado un prgrama del número 0 al 100)
var count;
if(numberSplit[1] <= 9 && numberSplit[1] >=2){
		for(count=0; count<numberSplit[1]; count++){
			tens[count];
			
		}
	}

	


//para las decenas (10, 20, 30, 40...)
var count1;
if(!numberSplit[0]){
		for(count1=0; count1<numberSplit[1]; count1++){
			tens[count1];
			
		}
	}

//para el último num(uno, dos, tres...)
var count2;
if(numberSplit[2] <=9){
	for(count2=0; count2 < numberSplit[2]; count2++){
		units[count2];
	}
}

//para diez, once, doce... hasta 19
var count3;
if(numberSplit[1]<2){
	for(count3=1; count3 < numberSplit[2]; count3++){
		teens[count3];
	}
}

	
	



console.log(units[i] +(" ")+teens[count3]+(" ")+ tens[count] + (" ") + units[count2]);



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


