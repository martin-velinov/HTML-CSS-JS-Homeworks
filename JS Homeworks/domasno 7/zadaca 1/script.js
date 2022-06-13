/*
Да се креира инпут поле и копче и уште еден параграф во кој 
при клик на копчето ќе се впише температурата за внесениот град
*/

// главен div
let container_wrapper= document.createElement('div');
document.body.appendChild(container_wrapper);
container_wrapper.id="container-wrapper";

// наслов
let title= document.createElement('h2');
title.innerText="Check the temperature of any city in the world!"
container_wrapper.appendChild(title)

// div за инпут
let container= document.createElement('div');
container_wrapper.appendChild(container)

let input= document.createElement('input');
container.appendChild(input)
input.id="city";

// копче
let button= document.createElement('button');
container.appendChild(button)
button.innerText='check temp';

// на клик копчето ќе ја изврши функцијата
button.addEventListener('click',onClick)

// параграф со одговор
let p= document.createElement('p');
container_wrapper.appendChild(p)




function onClick() {
    // city e инпутот 
    let city= document.getElementById('city');

    let api = 'https://api.openweathermap.org/data/2.5/weather?q=';
    
    // api клучевите
    let api_key ='&&appid=8457316cae451195bb62dbd17236b2b3';

    // единица мерка е целзиус
    let celsius= '&units=metric'

    // линкот за повикот е разложен за да може вредноста на градот
    // да биде динамична
    let api_call = api + city.value + api_key+ celsius;

    // бараме податок
    fetch(api_call)

    // добиениот одговор го конвертираме во json
    .then(response=>response.json())

    // потоа од објектот пристапуваме до температурата и ја менуваме
    // содржината на параграфот
    .then(json=>{
        
        p.innerText= "the temperature is "+  Math.round(json.main.temp) + " degrees celsius";
    })
}


