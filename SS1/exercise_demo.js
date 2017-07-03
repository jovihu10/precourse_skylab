//m) crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.
// La consola tiene que devolverte esto:   Are 3 avengers living in NYC: Tony, Hulk, Hawkeye
function avenger(fullName, city, job, classRoom, studies, markAv){

    this.fullName = fullName;
    this.city = city;
    this.job = job;
    this.classRoom = classRoom;
    this.studies = studies;
    this.markAv = markAv;

//Para hacer esto añadimos una función
    this.description = function(fullName){
        console.log(this.fullName )
    }

}

var tonyStark = new avenger ("Tony Stark", "NYC","Customer Service", "Ingeneer", "MIT", 10);
var otherAvenger = new avenger("Joker", "NYC", "villain", "the others", "doesn't have studies", 5)
var hulk = new avenger("Hulk", "Madrid");
var hawkeye = new avenger("Hawkeye", "Amsterdam");





avenger()