/*
1.Напишете функција која враќа количник на два броја. 
Ако вториот број е 0 потребно е да врати -1 и да испечати грешка
*/

function presmetajKolicnik(x,y){

   let kolicnik = x/y;

   //ако вториот број е 0
   if (y===0){
       console.log("error");
       return -1

    // во останатите случаи
   }else{
    return kolicnik;
   }
   
}

console.log(presmetajKolicnik(9,3));
console.log(presmetajKolicnik(9,0));



//2. Да се напише функција за печатење на објект

let person = {
  name: "Peter",
  age: 38,
  city: "New York",
  job: "lawyer"
    
}

function printObject(object){

    let keys = Object.keys(object);


    for(let i = 0; i<keys.length;i++){
        let key = keys[i];
        let value = object[key];
        console.log(key+":"+value);
        
    }

}

printObject(person)




//3.Да се напише листа од броеви и да се исфилтрираат само 
//парните и само непарните


let lista = [25,32,22,97,12,6,36,55,17,64,95];


// филтер за парните броеви
let filter_parni = lista.filter(x => x % 2 == 0 );
console.log("parni broevi se: " + filter_parni);

//филтер за непарните броеви
let filter_neparni = lista.filter(x => x % 2 == 1 );
console.log("neparni broevi se: " + filter_neparni);




//4. Да се напишат функции за основните пресметки на калкулатор

//собирање
function Sobiranje(broj1,broj2){

    rezultat = broj1 + broj2;

    return rezultat;

}

console.log(Sobiranje(5,5));

//одземање
function Odzemanje(broj1,broj2){

    rezultat = broj1 - broj2;

    return rezultat;

}

console.log(Odzemanje(25,5));

//множење
function Mnozenje(broj1,broj2){

    rezultat = broj1 * broj2;

    return rezultat;

}

console.log(Mnozenje(12,5));

//делење
function Delenje(broj1,broj2){

    rezultat = broj1 / broj2;

    return rezultat;

}

console.log(Delenje(50,5));


// Калкулатор

function Kalkulator(broj1,broj2,operator){


    let rezultat = 0;


    if ( operator == '+') {
        rezultat = broj1 + broj2;

    }else if ( operator == '-') {
        rezultat = broj1 - broj2;

    }else if ( operator == '*') {
        rezultat = broj1 * broj2;

    }else if ( operator == '/'){
        rezultat = broj1 / broj2;

    }else if ( operator == '%'){
        rezultat = broj1 % broj2;

    }

    console.log("rezultat:" + " " + broj1 + " "+ operator + " " + broj2 + " " + "=" + " " + rezultat);


}

Kalkulator(16,4,"*")



//5. Да се направи следната пирамида
//  *
// ***
//*****


/*n е бројот на редовите
во секој претходен ред има по едно празно место повеќе од следниот ред
пред да ги испечати ѕвездите
*/
function makePyramid(rows) {

    // главниот циклус се повторува додека i e помало 
    //од внесените редови, ѕвездата е празен стринг без празно место
    for (var i = 0; i < rows; i++) {
      var star = '';

      // првиот вгнезден циклус се повторува додека ј(1) е помало од 
      // бројот на внесените редови минус моменталната вредност на i
      // ѕвездата е празно место
      for (var j = 1; j < rows-i; j++) {
        star +=  ' ';
      }

      // вториот вгнезден циклус се повторува додека
      // к(1) е помало или еднакво на 2 * моментална вредност на i +1
      // ѕвездата е *
      for (var k = 1; k <= (2 * i + 1); k++) {
        star +=  '*';
      }

      //испечати ги вредностите на star за исполнетите услови во вгнездените циклуси
      //за една итерација на главниот циклус(еден ред во конзола)
      console.log(star);
    }

}

// повикај функција да испечати три реда во конзола
makePyramid(3)