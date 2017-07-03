// OBJECTS


// a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)
// Para acceder a las propiedades usaremos Object.keys(nombre objeto)
// Recuerda que todo es un objeto. Una variable también.
//He mirado aquí https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// Método1
function values(){
    var avenger = { 
        name : "Tony", 
        class : "VII", 
        id : 1 
    };


    console.log(Object.keys(avenger));

}

values();
// Result:  ["name", "class", "id"]






// Método 2
function values(){
    var avenger = { 
        name : "Tony", 
        class : "VII", 
        id : 1 
    };



    console.log(Object.getOwnPropertyNames(avenger));

}

values();
// Result: Object {name: "Tony", class: "VII", id: 1}









// b) Ahora, crea una función que liste solo los valores de las propiedades.
//Método 1
function object(){
    var avenger = { 
        name : "Tony", 
        class : "VII", 
        id : 1 
    };


    console.log(avenger.name+(" , ")+avenger.class+(" , ")+avenger.id);

}

object();
// REsult: Tony , VII , 1



//Método 2
//Para este caso es mejor el método 1 porque muestra más preciso lo que busca
function object(){
    var avenger = { 
        name : "Tony", 
        class : "VII", 
        id : 1 
    };


    console.log(avenger);

}

object();
// Result: Object {name: "Tony", class: "VII", id: 1}









// d) Ahora, elimina la propiedad ID y asegura los cambios.
function values(){
    var avenger = { 
        name : "Tony", 
        class : "VII", 
        id : 1 
    };
    delete avenger.id;


    console.log(avenger.id);

}

values();
// Result: Not exist :(





// e) Añade una nueva propiedad, por ejemplo city y dale un valor.
function values(){
    var avenger = { 
        name : "Tony", 
        class : "VII", 
        id : 1 
    };
    avenger.city = "Barcelona";


    console.log(avenger);

}

values();
// Result:name: "Tony", class: "VII", id: 1, city: "Barcelona"






//e1) Asegura los cambios solo imprimiendo esa nueva propiedad.
function values(){
    var avenger = { 
        name : "Tony", 
        class : "VII", 
        id : 1 
    };
    avenger.city = "Barcelona";


    console.log(avenger.city);

}

values();
// Result: Barcelona




//f) Lista el numero de propiedades que contiene el objeto.
// Siempre usaremos Object.keys(objeto).length
function values(){
    var avenger = { 
        name : "Tony", 
        class : "VII", 
        id : 1 
    };
    avenger.city = "Barcelona";


    console.log(Object.keys(avenger).length);

}

values();
// Result: 4





// g) Cambia la propiedad name por fullName.
// g1) Asegura los cambios.
//No sé si mi manera es correcta. Simplemente he eliminado la propiedad name y creado la surname.
//Habría que hacerlo con Object.defineProperty(object, propertyname, descriptor)??
function values(){
    var avenger = { 
        name : "Tony", 
        class : "VII", 
        id : 1 ,
    };
    delete avenger.name;

    avenger.surName = "Tony Stark";
    console.log(avenger.surName);

}

values();
 //Result: Tony Stark








//h) Lista todas las propiedades del objeto a través de un console.log()
function values(){
    var avenger = { 
        name : "Tony", 
        class : "VII", 
        id : 1 ,
    };

    avenger.name = "Tony Stark";
    console.log("Hi there, I'm "+avenger.name+ " +the "+avenger.class+" of "+avenger.id);

}

values();
//Result: Hi there, I'm Tony Stark +the VII of 1









//h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...
function values(){
    var avenger = { 
        name : "Tony", 
        class : "VII", 
        id : 1 ,
    };
    delete avenger.name;

    avenger.surName = "Tony Stark";
    avenger.markAverage = 5;
    avenger.country = "England";
    avenger.studies = "knight";
    console.log(avenger);

}

values();
 //Result: class : "VII", id : 1 , surName: "Tony Stark", markAverage: 5, country: "England", studies: "knight"









// i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)
// http://www.w3schools.com/js/js_object_definition.asp
// el constructor sirve cuando queremos crear muchos objetos en vez de uno solo
function avenger(fullName, city, job, classRoom, studies, markAv){

    //Así creamos las properties. Ha de ir en orden como tenemos los parámetros
    this.fullName = fullName;
    this.city = city;
    this.job = job;
    this.classRoom = classRoom;
    this.studies = studies;
    this.markAv = markAv;

}
//Así creamos los values de las properties, que irán ordenados con ellas. Ej fullName = "Tony Stark", city="XI"...
var tonyStark = new avenger ("Tony Stark", "NYC","Customer Service", "Ingeneer", "MIT", 10)
var other 
console.log(tonyStark)

avenger();










// j) Crea otro objeto y imprime sus propiedades por pantalla.
function avenger(fullName, city, job, classRoom, studies, markAv){

    //Así creamos las properties. Ha de ir en orden como tenemos los parámetros
    this.fullName = fullName;
    this.city = city;
    this.job = job;
    this.classRoom = classRoom;
    this.studies = studies;
    this.markAv = markAv;

}
//Así creamos los values de las properties, que irán ordenados con ellas. Ej fullName = "Tony Stark", city="XI"...
// Será var = new el nombre de la función
var tonyStark = new avenger ("Tony Stark", "NYC","Customer Service", "Ingeneer", "MIT", 10);
var otherAvenger = new avenger("Joker", "Manhattan", "villain", "the others", "doesn't have studies", 5)
console.log(otherAvenger)

avenger();
// Result: avenger {fullName: "Joker", city: "Manhattan", job: "villain", classRoom: "the others", studies: "doesn't have studies"…}











// k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia. . Example of property:
function avenger(fullName, city, job, classRoom, studies, markAv){

    this.fullName = fullName;
    this.city = city;
    this.job = job;
    this.classRoom = classRoom;
    this.studies = studies;
    this.markAv = markAv;

//Para hacer esto añadimos una función
this.description = function(){
    console.log(this.fullName + (" , ") +this.city + " , " + this.job + " , " +this.classRoom + " , " + " , " + this.studies + " , " + this.markAv)
}

}

var tonyStark = new avenger ("Tony Stark", "NYC","Customer Service", "Ingeneer", "MIT", 10);
var otherAvenger = new avenger("Joker", "Manhattan", "villain", "the others", "doesn't have studies", 5)

//Importante. Esto es el llamamiento de la funcion
tonyStark.description()

avenger();
// Result: Tony Stark , NYC , Customer Service , Ingeneer ,  , MIT , 10












// l) Ahora, crea una función que solo liste los nombres de los objetos instanciados
// Método 1
//Se podría hacer también con filter?
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
var otherAvenger = new avenger("Joker", "Manhattan", "villain", "the others", "doesn't have studies", 5)


// Importante. Esto es el llamamiento de la funcion
// Como queremos llamar al nombre que hay en las dos variables, hacemos dos llamamientos
tonyStark.description();
otherAvenger.description();


avenger();









//m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.
// Are 3 avengers living in NYC: Tony, Hulk, Hawkeye
//m) crea una función para que solo liste los nombres de los Avengers
// Estudiarme este ejercicio
var pplInNYC = '';

function avenger(fullName, city, job, classRoom, studies, markAv){

 this.fullName = fullName;
 this.city = city;
 this.job = job;
 this.classRoom = classRoom;
 this.studies = studies;
 this.markAv = markAv;


//Para hacer esto añadimos una función
this.description = function(fullName){
      // console.log("There are "+pplInNYC );
  }

}

//Creamos un array de objetos 
var avengerList = [];

avengerList.push(new avenger ("Tony Stark", "NYC","Customer Service",
    "Ingeneer", "MIT", 10));
avengerList.push(new avenger("Joker", "NYC", "villain", "the others",
    "doesn't have studies", 5));
avengerList.push(new avenger("Hulk", "Madrid"));
avengerList.push(new avenger("Hawkeye", "Amsterdam"));

//Funcion para saber quienes son los que viven en NYC
//El contador howMuch nos dirá cuantos
var peopleInNYC = []
var howMuch = 0;
for (var i in avengerList) {
    if ( avengerList[i].city === 'NYC') {
        peopleInNYC.push(avengerList[i].fullName)
        howMuch++
    }
}
console.log(peopleInNYC.join(', ') + ' ' + howMuch)
// Result: Tony Stark, Joker 2










//n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.
// IMPORTANTE

// objectsArray = forEach
// objects = forIn
// array = for
//Estudiarme este ejercicio
function avenger(fullName, city, job, classRoom, studies, markAv){
 this.fullName = fullName;
 this.city = city;
 this.job = job;
 this.classRoom = classRoom;
 this.studies = studies;
 this.markAv = markAv;
}

var avengerList = [];

avengerList.push(new avenger ("Tony Stark", "NYC","Customer Service",
    "Ingeneer", "MIT", 10));
avengerList.push(new avenger("Joker", "NYC", "villain", "the others",
    "doesn't have studies", 5));
avengerList.push(new avenger("Hulk", "Madrid", "super hero", "x-men", "blah blah", 5));
avengerList.push(new avenger("Hawkeye", "Amsterdam", "super hero", "x-men", "blah blah", 5));
avengerList.push(new avenger("Joel", "Amsterdam", "sound engineer","Skylab bootcamp", "audio", 10 ));
//Al querer recorrer un array de objetos, usamos un forEach
//creamos un contador
var acc = 0;
/*nombre del array de objetos . forEach(function(parámetro){
    contador += parametro.parametro objeto que queremos filtrar

})

*/  

avengerList.forEach(function(key){
    acc += key.markAv
})
console.log(acc);
console.log('la media es => ' + acc / avengerList.length );
// Result: la media es => 7









//ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.

// console.log(myFunction()) 
// HawkEye vs Tony => Tony is better! \n Thor vs Hulk => Hulk is better! \n Vision vs Captain America => Vision is better

// IMPORTANTE

// objectsArray = forEach
// objects = forIn
// array = for
var colleages1;
function avenger(fullName, city, job, classRoom, studies, markAv, id){
 this.fullName = fullName;
 this.city = city;
 this.job = job;
 this.classRoom = classRoom;
 this.studies = studies;
 this.markAv = markAv;
 this.id = id;
}

var avengerList = [];

avengerList.push(new avenger ("Tony Stark", "NYC","Customer Service",
    "Ingeneer", "MIT", 10,"partner1"));
avengerList.push(new avenger("Joker", "NYC", "villain", "the others",
    "doesn't have studies", 5,"partner1"));
avengerList.push(new avenger("Hulk", "Madrid", "super hero", "x-men", "blah blah", 5, "partner2"));
avengerList.push(new avenger("Hawkeye", "Amsterdam", "super hero", "x-men", "blah blah", 5, "partner2"));
avengerList.push(new avenger("Joel", "Amsterdam", "sound engineer","Skylab bootcamp", "audio", 10, "partner3" ));

var peopleMarkAv = []
var howMuch = 0;

//for in para que nos diga las personas que son partner1 y su nota media (markAv)
for (var i in avengerList) {
    if ( avengerList[i].id === "partner1") {
        peopleMarkAv.push(avengerList[i].markAv)
        howMuch++
    }

    //función para que nos diga de partner1 quien es mayor
    
    function partN1(){
      if( avengerList.markAv(0) > avengerList.markAv(1)){
        colleages1 = "Tony Stark is bigger thank Joker";
      }else{
      colleages1= "Joker is bigger than Tony Stark";
      }

    }
console.log("this is"+colleages1);
}

avenger();


