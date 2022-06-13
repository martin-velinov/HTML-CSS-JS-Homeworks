/*
Da se napravi lista od programski jazici 
i site da se prikazat vo lista vo html
*/
let title= document.createElement("h2");
title.innerText="Zadaca 1"


document.body.appendChild(title);

programming_lang= ["JavaScript","TypeScript","Python","C++", "C#","PHP","Ruby"]



// се креира елемент ul во кој ќе бидат сместени елементите 
//на низата и се додава на body во html документот
let list_container = document.createElement('ul');
document.body.appendChild(list_container)

// со for each циклус го изминуваме секој елемент во низата
programming_lang.forEach((language)=>{

  //креираме елемент li и го сместуваме во варијабла li
  let li = document.createElement("li");
  // на li ја менуваме содржината да биде онаа на елемент од низата
  li.innerText = language;
  
  list_container.appendChild(li);
  li.style.listStyleType="none"
})

// ***Решение со for of циклус
for( language of programming_lang){
   
  let li = document.createElement("li");
  
  li.innerText = language;
  
  list_container.appendChild(li);
  li.style.listStyleType="none"
}



/*
Da se kreira lista od filmovi koi imaat parametri 
-title,year, time,genre, cast, pri izminuvanje na 
elementite barem ednas da se iskoristi forEach
*/
let title2= document.createElement("h2");
title2.innerText="Zadaca 2"
document.body.appendChild(title2);

movies=[
    movie={  
        title:"Dark Night Rises",
        year:"2008",
        time:"120 minutes",
        genre:"drama",
        cast:"Christian Bale, Heath Ledger, Aaron Eckhart"
    },

    movie={  
        title:"the Godfather",
        year:"1972",
        time:"155 minutes",
        genre:"crime",
        cast:"Marlon Brando, Al Pacino, James Caan"
    },

    movie={      
        title:"Fight Club",
        year:"1999",
        time:"135 minutes",
        genre:"drama",
        cast:"Brad Pitt, Edward Norton, Meat Loaf"
    },

    movie={
        title:"Whiplash",
        year:"2014",
        time:"95 minutes",
        genre:"music",
        cast:"Miles Teller, J.K.Simmons, Melissa Benoist"
    },
   
]

//креираме елемент ul и го додаваме на body
let movies_container = document.createElement('ul');
document.body.appendChild(movies_container)


// се изминува секој објект филм во низата филмови
movies.forEach((movie)=>{
    
    // се изминуваат сите својства во објектот филм додека има филмови
    for (i = 0; i <= movies.length; i++) {
        let keys = Object.keys(movie);
        
        // клучовите и вредностите се сместени во варијабли
        let key = keys[i];
        let value = movie[key];
       
        let p = document.createElement("p");
    
        p.innerText = key+":"+value;
        

        movies_container.appendChild(p);
    }
    
})



