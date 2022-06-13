
/* 
Задача I
Од тастатура се внесуваат координати на една точка. 
Да се напише програма со која ќе се испечати на кој квадрант или оска припаѓа внесената точка. 
Ако станува збор за точка која лежи на координатниот почеток, да се испечати соодветна порака.
*/


/*
vo prv kvadrant i dvete koordinati x,y se pozitivni broevi
vo vtor kvadrant prvata koordinata x e negativen broj vtorata y pozitiven broj
vo tret kvadrant i dvete koordinati se negativni broevi
vo cetvrt kvadrant prvata x e poziniven broj vtorata y e negativen
ako x=0, a y < ili > od 0 tockata se naogja na y oska
ako y=0, a x < ili > od 0 tockata se naogja na x oska
koordinaten pocetok e vo centar x=0 i y=0
*/

const x = Number(prompt('vnesi prva koordinata: '));
const y = Number(prompt('vnesi vtora koordinata: '));



if ( x > 0 && y > 0){
    console.log("tockata se naogja vo prv kvadrant")

}else if ( x < 0 && y > 0) {
    console.log("tockata se naogja vo vtor kvadrant")

}else if ( x < 0 && y < 0) {
    console.log("tockata se naogja vo tret kvadrant")

}else if (x > 0 && y < 0) {
    console.log("tockata se naogja vo cetvrt kvadrant")

}else if (x === 0 && y > 0 || y < 0){
    console.log("tockata se naoga na y oska")

}else if (y === 0 && x > 0 || x < 0){
    console.log("tockata se naoga na x oska")
}
else if (x === 0 && y === 0){
    console.log("tockata se naoga na koordinaten pocetok")
}else{
    console.log("koordinata moze da bide 0,pozitiven ili negativen broj!")
}




/* 
Задача II
Да се напише програма која ќе претставува едноставен калкулатор. 
Во програмата се вчитуваат два броја и оператор 
*/

//ПРВ НАЧИН СО IF - ELSE УСЛОВИ

const operator = prompt('vnesi eden od operatorite: +, -, *, /, % ');


const broj1 = Number(prompt('vnesi prv broj: '));
const broj2 = Number(prompt('vnesi vtor broj: '));

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

}else{
    console.log("vnesi eden od ponudenite operatori!")
}


console.log("rezultat:" + " " + broj1 + " "+ operator + " " + broj2 + " " + "=" + " " + rezultat);



/*
ВТОР НАЧИН СО SWITCH и CASE


const operator = prompt('vnesi eden od operatorite: +, -, *, /, % ');


const broj1 = Number(prompt('vnesi prv broj: '));
const broj2 = Number(prompt('vnesi vtor broj: '));

let rezultat = 0;

switch(operator) {
    case '+':
         rezultat = broj1 + broj2;
        break;

    case '-':
         rezultat = broj1 - broj2;
        break;

    case '*':
         rezultat = broj1 * broj2;
        break;

    case '/':
         rezultat = broj1 / broj2;
        break;

    case '%':
        rezultat = broj1 % broj2;
        break;

    default:
        console.log('nevaliden operator');
        break;
}

console.log(broj1 + operator + broj2 + " = " + rezultat);

*/



/*
Задача III
•Да се креира листа од омилени книги, 
потоа листата да се сортира и да се испечатат првите 3 книги

*/

let books = ["Da Vinci Code", "12 rules for life","Think and grow rich","War and Peace","Crime and Punishment","Atomic Habits" ];

//ја сортира низата
console.log(books.sort());

// ги печати првите три книги
console.log(books.slice(0,3));



