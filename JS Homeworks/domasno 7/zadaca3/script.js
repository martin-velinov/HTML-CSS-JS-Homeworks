/*
Da se kreira niza od kosharkari so ime prezime godini i visina.
1. Da se kreira forma za dodavanje nanov kosharkar vo nizata
2. Pri vnes na visina vo edno input pole i klik na kopce na se prikaze lista 
(vo html) od site kosarkari nad taa visina
*/


let players=[
player={name:"Lebron",surname:"James",age:37,height:210,},
player={name:"Steph",surname:"Curry",age:32,height:190,},
player={name:"Jimmy",surname:"Buttler",age:30,height:205,},
player={name:"Luka",surname:"Doncic",age:29,height:200,},
player={name:"Joel",surname:"Embid",age:30,height:220,},
   
]

function getUserData(){

    let name =document.getElementById('user_name');
    let surname =document.getElementById('user_surname');
    let age =document.getElementById('user_age');
    let height =document.getElementById('user_height');
    
    let user_object={name:name.value,surname:surname.value,
    age:Number(age.value),height:Number(height.value)}

    players.push(user_object);
    

}


function getFilteredList(){

    let height_filter=document.getElementById('height_filter');
    

    let filtered_players = players.filter(player => player.height > height_filter.value);
    

    for(player of filtered_players){
        let li= document.createElement('li');
        document.body.appendChild(li)
        li.innerText=player.name + " " + player.surname;
    }
  
  
}


