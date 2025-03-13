window.addEventListener("DOMContentLoaded", e=>{
    

    const query1 = "http://localhost:3333/users?id=12&token=abc";
    const query2 = "http://localhost:3333/users/5678/asdf";
    const query3 = "http://localhost:3333/users";

    const buttons = document.querySelectorAll(".bottone");
    const display = document.querySelector("#display");
    buttons.forEach(b=>{

        b.addEventListener("click", e=>{

            let target = e.target;
            console.log(`You clicked on button ${target.id}`);
            switch(e.target.id){

                case "uno":
                    fetch(query1)
                    .then(response =>{
                        console.log(response);
                        display.innerHTML = response.status+" "+ response.statusText;
                    })
                break;

                case "due":
                    fetch(query2)
                    .then(response =>{
                        console.log(response);
                        display.innerHTML = response.status+" "+ response.statusText;
                    })
                break;

                case "tre":

                    const request = {
                        method: "post",
                        header: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        },
                        body: new URLSearchParams({
                            id: 5,
                            token: "56svfgfdt782f" 
                        })
                    }

                    fetch("http://localhost:3333/users", request)
                    .then(response =>{

                        console.log(response);
                        display.innerHTML = response.status + " " + response.statusText;

                    })
            
                break;

            }
            
        })

    })

})