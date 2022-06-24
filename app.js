class Pokemon{
    constructor(nombre, stats, tipo, poderes, pocion){
        this.nombre = nombre;
        this.stats = stats;
        this.tipo = tipo;
        this.poderes = poderes;
        this.pocion = pocion;
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
//Pikachu
const pikachu = new Pokemon("Pikachu", {ps: 274, atk: 229, def: 196, atk_esp: 199, def_esp: 199, vel: 279}, "Electrico", [{"Impactrueno": 40,"Tipo": "Electrico", "Categoria": "Especial"}, {"Chispa": 65, "Tipo": "Electrico", "Categoria": "Fisico"}, {"Ataque Rapido": 40, "Tipo": "Normal", "Categoria": "Fisico"}, {"Gruñido": 0.95, "Tipo": "Normal", "Categoria": "Estado"}], {"Cantitad": 2, "Cura": 25});
//Squirtle
const squirtle = new Pokemon("Squirtle", {ps: 292, atk: 214, def: 251, atk_esp: 199, def_esp: 227, vel: 185}, "Agua", [{"Placaje": 40, "Tipo": "Normal", "Categoria": "Fisico"}, {"Acua Cola": 90, "Tipo": "Agua", "Categoria": "Fisico"}, {"Burbuja": 40, "Tipo": "Agua", "Categoria": "Especial"}, {"Defensa Ferrea": 1.10, "Tipo": "Acero", "Categoria": "Estado"}], {"Cantitad": 2, "Cura": 25});
//Charmander
const charmander = new Pokemon("Charmander", {ps: 282, atk: 203, def: 185, atk_esp: 219, def_esp: 199, vel: 229}, "Fuego",[{"Garra Metal": 40, "Tipo": "Acero", "Categoria": "Fisico"},{"Colmillo Igneo": 65, "Tipo": "Fuego", "Categoria": "Fisico"},{"Lanzallamas": 90, "Tipo": "Fuego", "Categoria": "Especial"}, {"Malicioso": 0.95, "Tipo": "Normal", "Categoria": "Estado"}], {"Cantitad": 2, "Cura": 25})
//Bulbasaur
const bulbasour = new Pokemon("Bulbasaur", {ps: 294, atk: 197, def: 197, atk_esp: 229, def_esp: 229, vel: 207}, "Planta", [{"Drenadoras": 0.0625, "Tipo": "Planta", "Categoria": "Estado"}, {"Latigo Cepa": 45, "Tipo": "Planta", "Categoria": "Fisico"}, {"Hoja Afilada": 55, "Tipo": "Planta", "Categoria": "Fisico"}, {"Rayo Solar": 90, "Tipo": "Planta", "Categoria": "Especial"}], {"Cantitad": 2, "Cura": 25})

console.log(pikachu);

function intro(){
    let name = prompt("Ingresa tu nombre de entrenador...")
    let nameUp = name.toUpperCase();
    alert(`**********************************************\n BIENVENIDO ${nameUp} A LA BATALLA POKEMON \n **********************************************`);
    
    alert("Bueno, ahora te voy a dejar que elijas tu Pokemon");
    let eleccion = prompt("Elije el Pokemon que quieras luchar: \n 1. Pikachu\n 2. Squirtle \n 3. Charmander \n 4. Bulbasour")
    
    
}


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
    }
}
// intro();