

// URBAFIGHT....

let vida1 = document.getElementById("vida1");
let vida2 = document.getElementById("vida2");
let ganador = document.getElementById("ganador");

vida1.innerHTML = `${fighter1.life}`;
vida2.innerHTML = `${fighter2.life}`;

document.addEventListener("keydown", (e)=>{

    if(fighter1.life <= 0){
        ganador.innerHTML = `${fighter2.nombre}`;
        return;
    }else if (fighter2.life <= 0){
        ganador.innerHTML = `${fighter1.nombre}`;
        return;
    };

    //Llegamos aqui y hay golpe...
    
    switch(e.key){
        case "m" :
            fighter1.ataque_basico(fighter2);
            vida2.innerHTML = `${fighter2.life}`;
        break;

        case "p":
            fighter2.ataque_basico(fighter1);
            vida1.innerHTML = `${fighter1.life}`;
        break;

        default:
            
        break;  
    };
})