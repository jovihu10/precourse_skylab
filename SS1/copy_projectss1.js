//Method1
function calculator(){
	do{
	var value1 = prompt("Write a number");
	var num1 = parseInt(value1);

	var value2 = prompt("Write a number");
	var num2 = parseInt(value2);

	var operation = [ num1, num2];
	
	if (num1 && num2){

	var sum = operation [0] + operation [1];
	var rest = operation [0] - operation [1];
	var multiplication = operation [0] * operation [1];
	var division = operation [0] / operation[1];
	console.log(("The sum of these numbers is ")+ sum + (" . The rest of these numbers is ")+ rest +(" . The multiplication of these numbers is ")+ multiplication+ (" . The division of these numbers is ")+ division);
	var otherOperation = confirm("Would you like to do another operation?");
}else if(!num1 || !num2){

	var option = confirm("You are writing just a number. Are you sure?");
	var squareRoot = Math.sqrt(operation[0]+[1]);
	console.log(squareRoot);		

	
	}if(option===false){
		value1 = prompt("Write a number");
		var newNum1 = parseInt(value1);
		value2 = prompt("Write another number");
		var newNum2 = parseInt(value2);

		var operation = [ newNum1, newNum2];

	}if (newNum1 && newNum2){

	var sum = operation [0] + operation [1];
	var rest = operation [0] - operation [1];
	var multiplication = operation [0] * operation [1];
	var division = operation [0] / operation[1];

	console.log(("The sum of these numbers is ")+ sum + (" . The rest of these numbers is ")+ rest +(" . The multiplication of these numbers is ")+ multiplication+ (" . The division of these numbers is ")+ division);
	


	}
}
while(otherOperation===true);
	
}
calculator()
















































































































