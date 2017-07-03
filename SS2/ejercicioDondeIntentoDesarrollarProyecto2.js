/*Skylab Airlines! ✈️🛩

(Los datos de los vuelos están al final del enunciado, podéis usarlos en vuestro código)

Programa una inferfaz de usuario para una aerolinea (por terminal...). Esta aerolinea dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos estarán declarados de manera global, cuando se llame a la función:

Se preguntará por el nombre de usuario y dará la bienvenida.
El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
A continuación, el usuario verá el coste medio de los vuelos.
También podrá ver cuantos vuelos efectúan escalas.
Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
*/
var idFly1 = 00;
var idFly2 = 01;
var idFly3 = 02;
var idFly4 = 03;
var idFly5 = 04;
var idFly6 = 05;
var idFly7 = 06;
var idFly8 = 07;
var idFly9 = 08;
var idFly10 = 09;

function booking(id, nameUser, to, from, cost, scale){
	var yourName = prompt("What's your name?");
	var name = yourName;
	document.write("We hope you enjoy travelling with us")
    //Así creamos las properties. Ha de ir en orden como tenemos los parámetros
    this.idFly = id;
    this.nameUser = nameUser;
    this.to = to;
    this.from = from;
    this.cost = cost;
    this.scale = scale;
    


//Así creamos los values de las properties, que irán ordenados con ellas. Ej fullName = "Tony Stark", city="XI"...




var flights = [
{
	id: 00, 
	to: "New York", 
	from: "Barcelona", 
	cost: 700,
	scale: false,
},

{
	id: 01, 
	to: "Los Angeles", 
	from: "Madrid", 
	cost: 1100,
	scale: true
},

{
	id: 02, 
	to: "Paris", 
	from: "Barcelona", 
	cost: 210,
	scale: false
},

{
	id: 03, 
	to: "Roma", 
	from: "Barcelona", 
	cost: 150,
	scale: false
},

{
	id: 04, 
	to: "London", 
	from: "Madrid", 
	cost: 200,
	scale: false
},


//Estos son los últimos vuelos del día
{
	id: 05, 
	to: "Madrid", 
	from: "Barcelona", 
	cost: 90,
	scale: false
},


{
	id: 06, 
	to: "Tokyo", 
	from: "Madrid", 
	cost: 1500,
	scale: true
},


{
	id: 07, 
	to: "Shangai", 
	from: "Barcelona", 
	cost: 800,
	scale: true
},


{
	id: 08, 
	to: "Sydney", 
	from: "Barcelona", 
	cost: 150,
	scale: true
},


{
	id: 09, 
	to: "Tel-Aviv", 
	from: "Madrid", 
	cost: 150,
	scale: false}
]
  for ( var i=0 ; i < flights[i].booking.length; i++) {
    console.log(fligths[0]);

}





//console.log(flights[].to) 
//output: New York


}
booking();



