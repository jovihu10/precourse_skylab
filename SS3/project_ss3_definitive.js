function bingo(){
	var name = prompt("What's your name?");
	var copyName = name;




//los números que aparecerán en el cartón
	var luckNumber1 = Math.floor((Math.random() * 9) + 1);
	var luckNumber2 = Math.floor((Math.random() * 9) + 1);
	var luckNumber3 = Math.floor((Math.random() * 9) + 1);
	var luckNumber4 = Math.floor((Math.random() * 9) + 1);
	var luckNumber5 = Math.floor((Math.random() * 9) + 1);
	var luckNumber6 = Math.floor((Math.random() * 9) + 1);
	var luckNumber7 = Math.floor((Math.random() * 9) + 1);
	var luckNumber8 = Math.floor((Math.random() * 9) + 1);
	var luckNumber9 = Math.floor((Math.random() * 9) + 1);
	var luckNumber10 = Math.floor((Math.random() * 9) + 1);
	var luckNumber11 = Math.floor((Math.random() * 9) + 1);
	var luckNumber12 = Math.floor((Math.random() * 9) + 1);
	var luckNumber13 = Math.floor((Math.random() * 9) + 1);
	var luckNumber14 = Math.floor((Math.random() * 9) + 1);
	var luckNumber15 = Math.floor((Math.random() * 9) + 1);

	var arrNumbers = [luckNumber1, luckNumber2, luckNumber3, luckNumber4, luckNumber5, luckNumber6, luckNumber7, luckNumber8, luckNumber9, luckNumber10, luckNumber11, luckNumber12, luckNumber13, luckNumber14, luckNumber15];
	console.log("Your numbers are " + arrNumbers);
	console.log("Good luck!!");





	// números del bingo
	var number1 = Math.floor((Math.random() * 9) + 1);
	var number2 = Math.floor((Math.random() * 9) + 1);
	var number3 = Math.floor((Math.random() * 9) + 1);
	var number4 = Math.floor((Math.random() * 9) + 1);
	var number5 = Math.floor((Math.random() * 9) + 1);
	var number6 = Math.floor((Math.random() * 9) + 1);
	var number7 = Math.floor((Math.random() * 9) + 1);
	var number8 = Math.floor((Math.random() * 9) + 1);
	var number9 = Math.floor((Math.random() * 9) + 1);
	var number10 = Math.floor((Math.random() * 9) + 1);
	var number11 = Math.floor((Math.random() * 9) + 1);
	var number12 = Math.floor((Math.random() * 9) + 1);
	var number13 = Math.floor((Math.random() * 9) + 1);
	var number14 = Math.floor((Math.random() * 9) + 1);
	var number15 = Math.floor((Math.random() * 9) + 1);
var arrPaperNumbers = [number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, number11, number12, number13, number14, number15];
	




var i;

	function compare(){
		//do{
		for(i = 0; i<arrPaperNumbers.length; i++){
		

		//Number 1
		alert("The number is "+arrNumbers[i]);
		if (arrNumbers[0] === arrPaperNumbers[0]){
			console.log("Very goood! Your number ir correct!");
			
		
		}else{
			console.log("ohhhh! Your number is wrong!!! ");
			

		};
		var option = confirm("Would you like to keep playing?");
		if (option===false){

		console.log("Good luck next time!");
		break;
		
}

}

/*}
while(option===true);
	
*/


	















	};
	compare()

}
bingo()