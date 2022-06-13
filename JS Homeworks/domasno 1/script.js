
//ispecatete hello world vo konzola

console.log("Hello World");

//ispecatete go zbirot na 5+5 vo konzola

console.log(5+5);

//vnesete go vasheto ime preku promt i ispechatete go
let ime= prompt("what's your name?");

console.log(ime);

//preku promt vnesete dva broja i presmetajte go proizvodot

let broj1= Number(prompt("vnesi prv broj"));
let broj2= Number(prompt("vnesi vtor broj"));

console.log(broj1 * broj2);

//od prethodno vnesenite broevi prikazete koj e pogolem

if(broj1 > broj2){
    console.log(broj1 + " e pogolem");

}else if(broj1 < broj2){
    console.log(broj2 + " e pogolem");

}else if(broj1 === broj2){
    console.log(" broevite se ednakvi");
}



//vnesete poeni preku prompt od 0-100 i ispecatete koja e ocenkata

let poeni = Number(prompt("vnesi osvoeni poeni"));

if(poeni >= 0 && poeni <= 50 ){
    console.log( " ne polozivte");

}else if(poeni >= 51 && poeni <= 59){
    console.log( " dobivte 6ka");

}else if(poeni >= 60 && poeni <= 69){
    console.log( " dobivte 7ca");

}else if(poeni >= 70 && poeni <= 79){
    console.log( " dobivte 8ca");

}else if(poeni >= 80 && poeni <= 89){
    console.log( " dobivte 9ka");

}else if(poeni >= 90 && poeni <= 100){
    console.log( " dobivte 10ka");

}else if(poeni < 0 || poeni > 100){
    console.log("vnesete poeni od 0 do 100!")
}




