
/*
да се креира табела од корисници од линкот од час каде што ќе 
се прикаже името презимето маил и град во кој живеат
*/


// функција за клик на копче
function onClick(){
     
    let users_entered= document.getElementById('input');

    let api = 'https://randomuser.me/api/?results=';



    // линкот за повикот е разложен за да може бројката 
    // на корисници да биде динамична
    let api_call = api + users_entered.value ;

    fetch(api_call)
    .then(response=>response.json())
    
    .then(json=>{
        console.log(json.results)
        
        let users = json.results;

        //табела само со heading  за сите резултати во продолжение
        let table_heading = document.createElement("table");
        document.body.appendChild(table_heading)

        // ред во кој ќе бидат сместени насловите
        let heading_row = document.createElement("tr");
        table_heading.appendChild(heading_row);

        //ред бр.
        let order_title = document.createElement("th");
        order_title.innerText ="Number";
        heading_row.appendChild(order_title);

        //име
        let name_title = document.createElement("th");
        name_title.innerText ="Name";
        heading_row.appendChild(name_title);

        //презиме
        let surname_title = document.createElement("th");
        surname_title.innerText ="Surname";
        heading_row.appendChild(surname_title);

        //емаил
        let email_title = document.createElement("th");
        email_title.innerText ="Email";
        heading_row.appendChild(email_title);

        //град на живеење
        let city_title = document.createElement("th");
        city_title.innerText ="City";
        heading_row.appendChild(city_title);

        //стилови за ќелиите да имаат фиксна ширина
        email_title.style.width="300px"
        name_title.style.width="100px"
        surname_title.style.width="100px"
        city_title.style.width="100px"
        order_title.style.width="50px"

        //стил за табелата да има бордер
        table_heading.setAttribute("border","1px");
        table_heading.style.marginTop="65px"

        // циклус за секој објект корисник од сите корисници
        for(user of users){

            //табела со податоци
            let table = document.createElement("table");
            document.body.appendChild(table)

            // ред за податоците на секој корисник каде ќе се
            // додаваат сите ќелии за секој податок
            let user_data_row = document.createElement("tr");

            //ред бр.
            let order = document.createElement("th");
            let serial_number= Number(users.indexOf(user))
            order.innerText= serial_number + 1;
            user_data_row.appendChild(order);

            // ќелија за името
            let name = document.createElement("td");
            name.innerText =user.name.first;
            user_data_row.appendChild(name);

            // ќелија за презиме
            let surname = document.createElement("td");
            surname.innerText =user.name.last;
            user_data_row.appendChild(surname);

            // ќелија за мејл
            let email = document.createElement("td");
            email.innerText =user.email;
            user_data_row.appendChild(email);

            // ќелија за град
            let city = document.createElement("td");
            city.innerText =user.location.city;
            user_data_row.appendChild(city);

            //се додаваат сите редови во табелата
            table.appendChild(user_data_row);

            // стил на ќелиите
            email.style.width="300px"
            name.style.width="100px"
            surname.style.width="100px"
            city.style.width="100px"
            order.style.width="60px"
        
            // стил на табелата
            table.setAttribute("border","1px");
            
        }
        
    })
}


// го земаме копчето преку id и на клик да ја изврши функцијата
let button_get= document.getElementById('get-users');
button_get.addEventListener('click',onClick)
	
	

