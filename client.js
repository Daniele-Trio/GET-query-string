window.addEventListener("DOMContentLoaded", e=>{
    
    const query1 = "http://localhost:3333/users?id=12&token=abc";
    const query2 = "http://localhost:3333/users/5678/asdf";
    const query3 = "http://localhost:3333/users";
    // const button1 = document.querySelector("#uno");
    // const button2 = document.querySelector("#due");
    // const button3 = document.querySelector("#tre");

    const buttons = document.querySelectorAll(".bottone");
    const display = document.querySelector("#display");
    buttons.forEach(b=>{

        b.addEventListener("click", e=>{

            let target = e.target;
            console.log(`You clicked on button ${target.id}`);
            fetch(query1)
            .then(response =>{
                console.log(response);
                display.innerHTML = response.status+" "+ response.statusText;
            })
        })

    })

    // button1.addEventListener("click", e=>{

    //     b = e.target;
    //     console.log(`Hai cliccato il bottone ${b.id}`);
        
    // })

    // button2.addEventListener("click", e=>{

    //     b = e.target;
    //     console.log(`Hai cliccato il bottone ${b.id}`);

    // })

    // button3.addEventListener("click", e=>{
        
    //     b = e.target;
    //     console.log(`Hai cliccato il bottone ${b.id}`);
  
    // })
})