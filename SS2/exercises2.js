//m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.
// Are 3 avengers living in NYC: Tony, Hulk, Hawkeye
//m) crea una función para que solo liste los nombres de los Avengers
function avenger(fullName, city, job, classRoom, studies, markAv){

   this.fullName = fullName;
   this.city = city;
   this.job = job;
   this.classRoom = classRoom;
   this.studies = studies;
   this.markAv = markAv;

//Para hacer esto añadimos una función
   this.description = function(fullName){
       console.log("There are "+this.fullName );
   }

}

var avengerList = [];

avengerList.push(new avenger ("Tony Stark", "NYC","Customer Service",
"Ingeneer", "MIT", 10));
avengerList.push(new avenger("Joker", "NYC", "villain", "the others",
"doesn't have studies", 5));
avengerList.push(new avenger("Hulk", "Madrid"));
avengerList.push(new avenger("Hawkeye", "Amsterdam"));

for (var i in avengerList) {avengerList[i].description;
    if ( avengerList[i].city === 'NYC' ) {
        avengerList[i].description();
    }
}


avenger();

//No está acabado y no está del todo bien. No acabo de entenderlo


