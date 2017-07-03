/*Skylab Airlines! ✈️🛩

(Los datos de los vuelos están al final del enunciado, podéis usarlos en vuestro código)

Programa una inferfaz de usuario para una aerolinea (por terminal...). Esta aerolinea dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos estarán declarados de manera global, cuando se llame a la función:

Se preguntará por el nombre de usuario y dará la bienvenida.
El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
A continuación, el usuario verá el coste medio de los vuelos.
También podrá ver cuantos vuelos efectúan escalas.
Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
*/



//Importante, las variables que han de ser los objetos, han de ser globales. Sino nos da problemas
	var citiesList = [];

	citiesList.push( new travels (00, "New York", "Barcelona", 700, false));
	citiesList.push( new travels (01, "Los Angeles", "Madrid", 1100, true));
	citiesList.push( new travels (02, "Paris", "Barcelona", 210, false));	  
	citiesList.push( new travels (03, "Roma", "Barcelona", 150, false));
	citiesList.push( new travels (04, "London", "Madrid", 200, false));
	citiesList.push( new travels( 05, "Madrid", "Barcelona", 90, false));
	citiesList.push( new travels (06, "Tokyo", "Madrid", 1500, true));
	citiesList.push( new travels (07, "Shangai", "Barcelona", 800, true));
	citiesList.push( new travels(08, "Sydney", "Barcelona", 150, true));
	citiesList.push( new travels(09, "Tel-Aviv", "Madrid", 150, false));


//Esto es para saber el precio medio de todos los billetes
	var acc=0;
citiesList.forEach(function(key){
    acc += key.cost
})

console.log(acc);
console.log('la media es => ' + acc / citiesList.length );




//Para memorizar el nombre del usuario y darle la bienvenida
	function nameCustomer(){
		
		var welcome = prompt("Welcome to our company. What's your name?");
		var nameUser = welcome.toString();
		var answer = alert("Mr. / Ms. "+nameUser+ " We hope you enjoy travelling with us. In the following, we will show you our flights for today");

	}

	nameCustomer();



function travels(id, to, from, cost, scale){
	
	this.idValue = id;
	this.to = to;
	this.from = from;
	this.cost = cost;
	this.scale = scale;

	

//Para que nos diga si hay escala o no en función de si era true o false
	var scaleOrNot;
	if (scale ===true){
		scaleOrNot = " with transfer ";

	}else{
		scaleOrNot = " direct flight ";
	}



/*PAra calcular los vuelos que hacen escala
var countScales = [];

var howMuch = 0;
for (var i in countScales) {
    if ( countScales[i].scale === true) {
        countScales.push(countScales[i].fullName)
        howMuch++
    }
console.log("hacen escala"+howMuch);
*/


	//Ahora añadimos una función
	this.description = function(){
		console.log("The flight number "+citiesList + (" from ")+ this.from + (" with destiny ")+this.to +(" costs ") + this.cost + scaleOrNot);
		

	}


}



//Importante, si no se hace este llamamiento por cada objeto, no me lo devolverá

travels();

