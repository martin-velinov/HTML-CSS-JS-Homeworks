/*
1 Да се напише програма што ´ке овозможи претворање на 
двоцифрените броеви во зборови на следниот начин: 
За двоцифрениот броj 89 на екран ´ке се испечати "osum devet".
*/


let cifri = ["nula", "eden", "dva", "tri", "cetiri", "pet", "sest", "sedum", "osum", "devet"];
let broj = prompt("Vnesi dvocifren broj!");
if (broj.length == 2) {

    //прва цифра од јузер(првиот карактер од стрингот)
    let prva = broj[0];
    // втора цифра од јузер(вториот карактер од стрингот)
    let vtora = broj [1];
    
    
    //прва цифра претворена
    let prva_pretvorena=0;
    //втора цифра претворена
    let vtora_pretvorena=0;

    //додека должината на низата е помала од бројачот, повтори го циклусот
    for (let i = 0; i <= cifri.length; i++){

        //ако првата цифра од јузер е еднаква со i
        if (prva == i) {
            //претворената ќе биде заменета со иста позиција на елемент во цифри
            prva_pretvorena = cifri[i];
        }
        //ако втората цифра од јузер е еднаква со i
        if (vtora == i) {
            //претворената ќе биде заменета со иста позиција на елемент во цифри
            vtora_pretvorena = cifri[i];
        }

       
    } 
    //надвор од циклусот испечати ги на екран
    console.log(prva_pretvorena, vtora_pretvorena);
    
}else {

    console.log(broj)
}





/*
2 Да се напише програма коjа од n броеви (внесени од тастатура) ќе го определи 
броjот на броеви што се деливи со 3, при делењето со 3 имаат остаток 1, односно 2. 
Забелeшка: Задачата да се реши со while, do. . . while и for
*/

let broj = prompt("Vnesete kolku sakate broevi i pritisnete q za kraj");
let niza = [];
//ако не е внесен број
if(isNaN(broj)){
	console.log("ve molime vnesete broj");
}
//ако е внесен број прашувај го корисникот се додека внесува броеви и не внесе карактер
else{
	while(!isNaN(broj)){
        //внеси го бројот во празната низа
		niza.push(broj);
		broj=prompt("Vnesi broj");

    }
}

//бројачи
let delitel=0;
let ostatok1=0;
let ostatok2=0;
let i=0;
//додека i e помало од бројот на елементите во креираната низа повторувај циклус
while (i<niza.length) {

    //ако елемент од низата има остаток 0 е делител
    if (niza[i] % 3 == 0){
        //зголеми го бројачот на делител за 1
        delitel++;
    }
    //ако елемент од низата има остаток 1 
    else if (niza[i] % 3 == 1){
    //зголеми го бројачот на остаток1 за 1
        ostatok1++;
    }
    //ако елемент од низата има остаток 2
    else if (niza[i] % 3 == 2){
        //зголеми го бројачот на остаток2 за 1
        ostatok2++;
    }

    //зголеми го i и врати се на условот горе
    i++;
}

// циклусот завршува кога ќе се прегледаат сите елементи во низата и се печатат резултати на екран
console.log(delitel + " broevi se delivi so 3. \n " + ostatok1 + " broevi imaat ostatok 1. \n  "+ ostatok2 + " broevi imaat ostatok 2.");



/* 4.
Да се напише објект кој ќе содржи повеќе клуч-вредност парови, 
каде што вредностите ќе бидат од тип стринг, број, низа и објект.
Да се испечатат сите својства на објектот во следниот формат клуч: 
вредност. Доколку вредноста е низа да се напишат елементите 
од низата во нов ред со празни места пред елементот.
*/

const NikeCorporation = {
    name:"Nike",
    founded:1964,
    trademark:"just do it",
    locations:["Europe", "USA", "Latin America","Asia","Africa","Australia"],
    best_selling_shoes:{
        mans:["Nike Air Force","Nike Blazer Low","Nike SB Zoom","Nike Air Max AP"],
        womens:["Nike Air Max 270","Nike Waffle Debut","Nike Air Force 1 Shadow"],
        kids:["Nike Air Max","Nike Blazer","Nike Dunk","Nike AP"]
    }

}

//for in loop за пребарување на елементи на објект
for(let i in NikeCorporation){
    console.log(i + ":"  + NikeCorporation[i]);
    
}

for(let i in NikeCorporation.best_selling_shoes){
    console.log(i + ":" + NikeCorporation.best_selling_shoes[i]);
}



/*
5. Да се напише програма за пресметување на y=x^n (x на степен n)

*/

let x= Number(prompt("vnesi x nepoznta"))
let n= Number(prompt("vnesi na koj stepen da bide x nepoznata"));

/*
бројачот е на нула, у е еден(ова се чита само првиот пат), додека бројачот е помал од внесениот
степен зголеми го бројачот (помини уште еден циклус)
внатре се извршува у = 1 * со внесениот x и се печати на екран,
понатаму секоја нова добиена вредност на y се користи во наредниот циклус

Ако внесеме x=4 n=3:
во условот гледаме дека 0<3 се симнува доле ги извршува наредбите
y=1*4 и го печати 4, потоа i++ го враќа бројачот од почеток 1<3,
ги извршува наредбите сега у ќе биде 4,  y=4*4 и го печати 16,
потоа i++ го враќа бројачот од почеток 2<3,
ги извршува наредбите сега у ќе биде 16,  y=16*4 и го печати 64 потоа i++ враќа од
почеток 3<3 не е точно и престанува циклусот.
*/

for(i = 0, y = 1; i < n; i++) {

   
    y = y * x;

    
    console.log(y);
}






/*
Бонус:
Да се напише програма коjа на екран ќе ги испечати 
сите четири-цифрени броеви каj кои збирот на трите 
наjмалку значаjни цифри е еднаков со наjзначаjната цифра
*/


//почетна вредност 
let suma = 0;
broj =1000;

//додека бројот е четирицифрен
while (broj >= 1000 && broj <= 9999 ) {

    //моментална вредност на број/1000
    let najznacajna_cifra = parseInt(broj / 1000);//2020/1000= (2,02)
    let vtora_cifra = parseInt((broj % 1000) / 100);// 2020/1000 има остаток 20, 20/100= (0,2)
    let treta_cifra = parseInt((broj % 100) / 10);// 2020/100 има остаток 20, 20/10= (2)
    let cetvrta_cifra = parseInt(broj % 10);// 2020/10 нема остаток

    //сумата е збир на трите  понезначајни цифри
    suma = vtora_cifra + treta_cifra + cetvrta_cifra;

    // ако сумата е еднаква со најзначајната цифра испечати го бројот
    if (suma == najznacajna_cifra) {
        console.log(broj);
    }

    //зголемувај го бројот од 1000 се до 9999
    broj++;
}
