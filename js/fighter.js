
class Fighter {

    constructor(nombre,peso,velocidad,fuerza,suerte){
        this.nombre = nombre,
        this.peso = peso,
        this.velocidad = velocidad,
        this.fuerza = fuerza,
        this.suerte = suerte,
        this.life = 100;
        this.adrenaline = false;
        this.stamina = 100;
    }

    ataque_basico(enemigo){
        enemigo.life -= parseInt((this.fuerza / this.suerte) - (enemigo.velocidad / enemigo.peso));
    }

    ataque_fuerte(enemigo){
        enemigo.life -= parseInt((this.fuerza + this.suerte) - (enemigo.velocidad / enemigo.peso));
    }

    defensa(){

    }

};

let fighter1 = new Fighter("Martin",90,12,10,Math.floor(Math.random() * (10 - 1) + 1 ));

let fighter2 = new Fighter("Pedro",82,15,8,Math.floor(Math.random() * (10 - 1) + 1 ));

