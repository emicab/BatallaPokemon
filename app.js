class Pokemon{
    constructor(nombre, stats, tipo, poderes){
        this.nombre = nombre;
        this.stats = stats;
        this.tipo = tipo;
        this.poderes = poderes;
    }
    restarVida = vidaRestar => {
        this.stats["ps"] -= vidaRestar;
        if(this.stats["ps"] <= 0){
            alert(`${this.nombre} ha muerto`)
        }else{
            alert(`A ${this.nombre} le quedan ${this.stats["ps"]} puntos de vida.`)
            // console.log(this.stats["ps"]);
        }
    }
}

const pikachu = new Pokemon("Pikachu", {ps: 274, atk: 229, def: 196}, "Electrico", [{"Impactrueno": 120 }, {"Bola Voltio": 160}, {"Ataque Rapido": 75}, {"Onda Trueno": 90}]);
const squirtle = new Pokemon("Squirtle", {ps: 292, atk: 214, def: 251}, "Agua", [{"Placaje": 100}, {"Pistola de Agua": 100}, {"Burbuja": 80}, {"Hidropulso": 120}]);

// console.log(squirtle.poderes);
// console.log(squirtle);

let name = prompt("Ingresa tu nombre de entrenador...")
let nameUp = name.toUpperCase();

alert(`**********************************************\n BIENVENIDO ${nameUp} A LA BATALLA POKEMON \n **********************************************`);
alert("Tu Personaje Seleccionado es Pikachu, porque yo lo decido.");
alert("Pikachu: Pika! pika!");
alert("Tu rival sera un Squirtle, porque lo decidi tambien");
alert("Squirtle: Vamo a calmarno");
alert("XD");
// alert(`Squirtle tiene ${squirtle.stats["ps"]} puntos de vida. `)

const pikataque = () =>{
    let poder = parseInt(prompt(`Es tu turno de atacar... elije con que poder empezar: \n 1. Impactrueno: ${pikachu.poderes[0]["Impactrueno"]} \n 2. Bola Voltio: ${pikachu.poderes[1]["Bola Voltio"]}\n 3. Ataque Rapido: ${pikachu.poderes[2]["Ataque Rapido"]}\n 4. Onda Trueno: ${pikachu.poderes[3]["Onda Trueno"]}`));
    switch(poder){
        case 1:
            alert(`Has elegido Impactrueno!`);
            alert("Pikachu: Pika! pika!");
            squirtle.restarVida(pikachu.poderes[0]["Impactrueno"]);
            if(squirtle.stats["ps"] <= 0){
                alert("Has vencido a Squirtle!")
            }else{
                vamoAtacalo();
            }
            break;
        case 2:
            alert(`Has elegido Bola Voltio!`);
            alert("Pikachu: Pika! pika!");
            squirtle.restarVida(pikachu.poderes[1]["Bola Voltio"]);
            if(squirtle.stats["ps"] <= 0){
                alert("Has vencido a Squirtle!")
            }else{
                vamoAtacalo();
            }
            break;
        case 3:
            alert(`Has elegido Ataque Rapido!`);
            alert("Pikachu: Pika! pika!");
            squirtle.restarVida(pikachu.poderes[2]["Ataque Rapido"]);
            if(squirtle.stats["ps"] <= 0){
                alert("Has vencido a Squirtle!")
            }else{
                vamoAtacalo();
            }
            break;
        case 4:
            alert(`Has elegido Onda Trueno!`);
            alert("Pikachu: Pika! pika!");
            squirtle.restarVida(pikachu.poderes[3]["Onda Trueno"]);
            if(squirtle.stats["ps"] <= 0){
                alert("Has vencido a Squirtle!")
            }else{
                vamoAtacalo();
            }
            break;
        default:
            alert("No existe esta habilidad.")
            alert("Pikachu: Pika! Pika! (perdiste el turno)");
            vamoAtacalo();
            break;
    }
}

const vamoAtacalo = () =>{
    alert("Es el turno de Squirtle para atacar!")
    let ataqueAletorio = Math.round(Math.random(0, 5) + 1)
    console.log(ataqueAletorio);
    switch(ataqueAletorio){
        case 1:
            alert(`Squirtle ha elegido Placaje!`);
            alert("Squirtle: vamo a atacalo!");
            pikachu.restarVida(squirtle.poderes[0]["Placaje"]);
            if(pikachu.stats["ps"] <= 0){
                alert("Has sido derrotado!");
            }else{
                pikataque();
            }
            break;
        case 2:
            alert(`Has elegido Pistola de Agua!`);
            alert("Squirtle: vamo a atacalo!");
            pikachu.restarVida(squirtle.poderes[1]["Pistola de Agua"]);
            if(pikachu.stats["ps"] <= 0){
                alert("Has sido derrotado!");
            }else{
                pikataque();
            }
            break;
        case 3:
            alert(`Has elegido Burbuja!`);
            alert("Squirtle: vamo a atacalo!");
            pikachu.restarVida(squirtle.poderes[2]["Burbuja"]);
            if(pikachu.stats["ps"] <= 0){
                alert("Has sido derrotado!");
            }else{
                pikataque();
            }
            break;
        case 4:
            alert(`Has elegido Onda Trueno!`);
            alert("Squirtle: vamo a atacalo!");
            pikachu.restarVida(squirtle.poderes[3]["Hidropulso"]);
            if(pikachu.stats["ps"] <= 0){
                alert("Has sido derrotado!");
            }else{
                pikataque();
            }
            break;
        // default:
        //     alert("No existe esta habilidad.")
        //     break;
    }
}

pikataque();