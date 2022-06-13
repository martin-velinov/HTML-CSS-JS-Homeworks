
// /* 1 Задача
// Да се напише програма се внесуваат броеви од тастатура се додека 
// не се внесе карактер,да се определат позициите (редните броеви на внесување)
// на двата последователни броеви кои jа имаат наjголемата сума.
// */ 


//корисникот внесува броеви кој се сместуваат во низа
let broj = prompt("Vnesi broj");
let niza = [];

//стартни вредности на варијаблите
let pozicija1 =0;
let pozicija2 = 0;
let i = 0;
let suma = 0;
let najgolema_suma = 0;

//два последователни броја во низата
let prv_broj = niza[i];
let vtor_broj = niza[i + 1];

// ако е внесен број
if (!isNaN(broj)) {

    //додека се внесува број прашувај го корисникот да внесе уште, претвори го во број
    // и ставај ги од позади на низата
    while (!isNaN(broj)) {
        niza.push(parseInt(broj));
        broj = prompt("Vnesi broj");
    }

    //додека должината на низата е поголема од бројачот повторувај циклус
    for (i = 0; i < niza.length; i++) {

        //сумата е збир на двата последователно внесени броја
        suma = niza[i] + niza[i + 1]

        //ако сумата е поголема од моменталната вредност на најголемата сума
        // сумата станува најголема сума
        if (suma > najgolema_suma) {
            najgolema_suma = suma;

            //позиција 1 е моментална вредност на i односно елементот во низата
            //позиција 2 е моментална вредност на i + 1 за да се добие втората позиција
            pozicija1 = i;
            pozicija2 = i + 1;

        }
    }
    
}//ако не се внесе број прекини го промптот и испечати ги резултатите на екран
// со дотогаш внесените броеви
else (isNan(broj));{
    console.log("Vnesovte karakter koj ne e broj")
}
    
console.log("Najgolemata suma e " + najgolema_suma + " i nejzinite pozicii se "+ pozicija1 +" i "+ pozicija2);



//2 Задача
//Да се креира низа од објекти ученици со име презиме и поени од тест, 
//да се пресмета просечниот број на поени на учениците


let niza =[
    ucenik={
        ime:"Martin",
        prezime:"Velinov",
        poeni:90
    },
    ucenik={
        ime:"Monika",
        prezime:"Petkovska",
        poeni:82
    },
    ucenik ={
        ime:"Petar",
        prezime:"Petrov",
        poeni:95
    },
    ucenik={
        ime:"Marko",
        prezime:"Markovski",
        poeni:77
    },
    ucenik={
        ime:"Todor",
        prezime:"Todorov",
        poeni:89
    },
    
]

//НАЧИН 1

//почетна вредност на збирот
let sum = 0;

//додека i е помало од должината на низата повтори го циклусот долу
for(let i = 0;i<niza.length; i++){

    //сумата = сумата плус поените на даден елемент од низата
    sum= sum + niza[i].poeni;
}
// циклусот се повторува додека не ги собере поените од сите објекти

//просекот = на сумата од поените на сите елементи / должина на низата
let prosek = sum/niza.length;

console.log(prosek);


//НАЧИН 2

//почетна вредност на просек
let prosek = 0;
//должина е должина на низата
let length = niza.length;

//за секој клуч поени во објектите на низата просекот 
//е збир на просекот и поените(ги собира сите поени)
niza.forEach(({poeni})=> prosek += poeni);

//го дели собраниот просек со бројот на елементи на низата и дозволува до две децимали
console.log("prosecniot broj na poeni e: "+ ( prosek/length).toFixed(2));


