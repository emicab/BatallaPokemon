class Pokemon{
    constructor(nombre, stats, tipo, poderes, pocion, sonido){
        this.nombre = nombre;
        this.stats = stats;
        this.tipo = tipo;
        this.poderes = poderes;
        this.pocion = pocion;
        this.sonido = sonido;
    }
    restarVida = dañoCalculado => {
        
        this.stats["ps"] -= dañoCalculado;
        if(this.stats["ps"] <= 0){
            alert(`${this.nombre} ha muerto`)
        }else{
            alert(`A ${this.nombre} le quedan ${this.stats["ps"]} puntos de vida.`)
        }
    }
    dañoUsuario = (poder) =>{
        if(this.poderes[poder].Categoria == "Fisico"){
            console.log("Poder Fisico");
            calculoDañoFisico()
            
        }else if(this.poderes[poder].Categoria == "Especial"){
            console.log("especial");
            calculoDañoEspecial()
        }else{
            console.log("Poder de Estado");
        }
    }
}



//Pikachu
const pikachu = new Pokemon("Pikachu", {ps: 274, atk: 229, def: 196, atk_esp: 199, def_esp: 199, vel: 279}, "Electrico", [{Poder: "Impactrueno", Potencia: 40,"Tipo": "Electrico", "Categoria": "Especial"}, {Poder: "Chispa", Potencia: 65, "Tipo": "Electrico", "Categoria": "Fisico"}, {Poder: "Ataque Rapido", Potencia: 40, "Tipo": "Normal", "Categoria": "Fisico"}, {Poder: "Gruñido", Potencia: 0.95, "Tipo": "Normal", "Categoria": "Estado"}], {"Cantidad": 2, "Cura": 25}, "Pika! pikaa!");
//Squirtle
const squirtle = new Pokemon("Squirtle", {ps: 292, atk: 214, def: 251, atk_esp: 199, def_esp: 227, vel: 185}, "Agua", [{Poder: "Placaje", Potencia: 40, "Tipo": "Normal", "Categoria": "Fisico"}, {Poder: "Acua Cola", Potencia: 90, "Tipo": "Agua", "Categoria": "Fisico"}, {Poder: "Burbuja", Potencia: 40, "Tipo": "Agua", "Categoria": "Especial"}, {Poder: "Defensa Ferrea", Potencia: 1.10, "Tipo": "Acero", "Categoria": "Estado"}], {"Cantidad": 2, "Cura": 25});
//Charmander
const charmander = new Pokemon("Charmander", {ps: 282, atk: 203, def: 185, atk_esp: 219, def_esp: 199, vel: 229}, "Fuego",[{Poder: "Garra Metal", Potencia: 40, "Tipo": "Acero", "Categoria": "Fisico"},{Poder: "Colmillo Igneo", Potencia: 65, "Tipo": "Fuego", "Categoria": "Fisico"},{Poder: "Lanzallamas", Potencia: 90, "Tipo": "Fuego", "Categoria": "Especial"}, {Poder: "Malicioso", Potencia: 0.95, "Tipo": "Normal", "Categoria": "Estado"}], {"Cantidad": 2, "Cura": 25})
//Bulbasaur
const bulbasour = new Pokemon("Bulbasaur", {ps: 294, atk: 197, def: 197, atk_esp: 229, def_esp: 229, vel: 207}, "Planta", [{Poder: "Drenadoras", Potencia: 0.0625, "Tipo": "Planta", "Categoria": "Estado"}, {Poder: "Latigo Cepa", Potencia: 45, "Tipo": "Planta", "Categoria": "Fisico"}, {Poder: "Hoja Afilada", Potencia: 55, "Tipo": "Planta", "Categoria": "Fisico"}, {Poder: "Rayo Solar", Potencia: 90, "Tipo": "Planta", "Categoria": "Especial"}], {"Cantidad": 2, "Cura": 25})

// console.log(pikachu.tipo);
// pikachu.dañoUsuario(20, 0)

// let name = prompt("Ingresa tu nombre de entrenador...")
// let nameUp = name.toUpperCase();
// alert(`**********************************************\n BIENVENIDO ${nameUp} A LA BATALLA POKEMON \n **********************************************`);
function intro(){
    
    alert("Bueno, ahora te voy a dejar que elijas tu Pokemon");
    let eleccion = parseInt(prompt("Elije el Pokemon que quieras luchar: \n 1. Pikachu\n 2. Squirtle \n 3. Charmander \n 4. Bulbasaur"))
    
    pokeElegido(eleccion);
}

const pokeElegido = (eleccion) =>{
    let numRival = parseInt(Math.round(Math.random() * (5 - 1)))
    let seleccion;
    
    if(eleccion == 1){
        seleccion = pikachu;
        alert(`Has selecionado a ${seleccion.nombre}`);
        pokeRival(numRival);
        ataqueUsuario(seleccion, seleccionRival);
    }else if(eleccion == 2){
        seleccion = squirtle;
        alert(`Has selecionado a ${seleccion.nombre}`);
        pokeRival(numRival);
        ataqueUsuario(seleccion, seleccionRival);
    }else if(eleccion == 3){
        seleccion = charmander;
        alert(`Has selecionado a ${seleccion.nombre}`);
        pokeRival(numRival);
        ataqueUsuario(seleccion, seleccionRival);
    }else if(eleccion == 4){
        seleccion = bulbasour;
        alert(`Has selecionado a ${seleccion.nombre}`);
        pokeRival(numRival);
        ataqueUsuario(seleccion, seleccionRival);
    }else{
        console.log('No existe ese pokemon.');
    }
}

function pokeRival(numRival){  
    console.log(numRival);
    if(numRival == 1){
        seleccionRival = pikachu;
        alert('El rival ha elegido a '+ seleccionRival.nombre)
    }else if(numRival == 2){
        seleccionRival = squirtle;
        alert('El rival ha elegido a '+ seleccionRival.nombre)
    }else if(numRival == 3){
        seleccionRival = charmander;
        alert('El rival ha elegido a '+ seleccionRival.nombre)
    }else if(numRival == 4){
        seleccionRival = bulbasour;
        alert('El rival ha elegido a '+ seleccionRival.nombre)
    }else{
        console.log('No existe ese pokemon.');
    }
}
function calculoDañoFisico (seleccion, poder) {
    let dañoCalculado = 0; 
    if(seleccion.tipo == seleccion.poderes[poder].Tipo){
        let stab = 1.5;
        dañoCalculado = parseInt(((2 * 50 / 5 + 2) * seleccion.stats["atk"] * seleccion.poderes[poder].Potencia / seleccionRival.stats["def"]) / 50 * stab);
        console.log(dañoCalculado);
        console.log("Has hecho un daño aumentado de " + dañoCalculado + " puntos!")
        seleccion.dañoUsuario(seleccion, poder);
        seleccionRival.restarVida(dañoCalculado);
    }else{
        dañoCalculado = ((2 * 50 / 5 + 2) * seleccion.stats["atk"] * seleccion.poderes[poder].Poder / seleccion.stats["def"]) / 50;
        seleccion.dañoUsuario(seleccion, poder);
        alert("Has hecho " + dañoCalculado + " puntos de daño!")
    }
}
function calculoDañoEspecial(seleccion, poder) {
    let dañoCalculado = 0; 
    if(seleccion.tipo == seleccion.poderes[poder].Tipo){
        let stab = 1.5;
        dañoCalculado = parseInt(((2 * 50 / 5 + 2) * seleccion.stats["atk_esp"] * seleccion.poderes[poder].Potencia / seleccionRival.stats["def_esp"]) / 50 * stab);
        console.log(dañoCalculado);
        console.log("Has hecho un daño aumentado de " + dañoCalculado + " puntos!")
        seleccion.dañoUsuario(seleccion, poder);
        seleccionRival.restarVida(dañoCalculado);
    }else{
        dañoCalculado = ((2 * 50 / 5 + 2) * seleccion.stats["atk"] * seleccion.poderes[poder].Poder / seleccion.stats["def"]) / 50;
        seleccion.dañoUsuario(seleccion, poder);
        alert("Has hecho " + dañoCalculado + " puntos de daño!")
    }
}



const ataqueUsuario = (seleccion, seleccionRival) =>{
    let poder = parseInt(prompt(`Es tu turno de atacar... elije con que poder empezar: \n 1. ${seleccion.poderes[0].Poder}: ${seleccion.poderes[0].Potencia} \n 2. ${seleccion.poderes[1].Poder}: ${seleccion.poderes[1].Potencia}\n 3. ${seleccion.poderes[2].Poder}: ${seleccion.poderes[2].Potencia}\n 4. ${seleccion.poderes[3].Poder}: ${seleccion.poderes[3].Potencia}`));
    switch(poder){
        case 1:
            alert(`Has elegido ${seleccion.poderes[0].Poder}!`);
            // calculoDañoFisico(seleccion, poder);
            seleccion.dañoUsuario();
            seleccionRival.restarVida(seleccion.poderes[0].Potencia);
            if(seleccionRival.stats["ps"] <= 0){
                alert(`Has vencido a ${seleccionRival.nombre}`)
            }else{
                ataqueRival(seleccion, seleccionRival);
            }
            break;
        case 2:
            alert(`Has elegido ${seleccion.poderes[1].Poder}!`);           
            seleccionRival.restarVida(seleccion.poderes[1].Potencia);
            if(seleccionRival.stats["ps"] <= 0){
                alert(`Has vencido a ${seleccionRival.nombre}`)
            }else{
                ataqueRival(seleccion, seleccionRival);
            }
            break;
        case 3:
            alert(`Has elegido ${seleccion.poderes[2].Poder}!`);            
            seleccionRival.restarVida(seleccion.poderes[2].Potencia);
            if(seleccionRival.stats["ps"] <= 0){
                alert(`Has vencido a ${seleccionRival.nombre}`)
            }else{
                ataqueRival(seleccion, seleccionRival);
            }
            break;
        case 4:
            alert(`Has elegido ${seleccion.poderes[3].Poder}!`);            
            seleccionRival.restarVida(seleccion.poderes[3].Potencia);
            if(seleccionRival.stats["ps"] <= 0){
                alert(`Has vencido a ${seleccionRival.nombre}`)
            }else{
                ataqueRival(seleccion, seleccionRival);
            }
            break;
        default:
            alert("No existe esta habilidad.")
            alert("Perdiste el turno");
            // ataqueRival();
            break;
    }
}
function ataqueRival(seleccion, seleccionRival){
    alert(`Es el turno de ${seleccionRival.nombre} para atacar!`)
    let ataqueAletorio = Math.round(Math.random() * (5 - 1)+ 1)
    console.log('poder rival ' + ataqueAletorio);
    switch(ataqueAletorio){
        case 1:
            alert(`${seleccionRival.nombre} ha elegido ${seleccionRival.poderes[0].Poder}!`);            
            seleccion.restarVida(seleccionRival.poderes[0].Potencia);
            if(seleccion.stats["ps"] <= 0){
                alert("Has sido derrotado!");
            }else{
                ataqueUsuario(seleccion, seleccionRival);
            }
            break;
        case 2:
            alert(`${seleccionRival.nombre} ha elegido ${seleccionRival.poderes[1].Poder}!`);            
            seleccion.restarVida(seleccionRival.poderes[1].Potencia);
            if(seleccion.stats["ps"] <= 0){
                alert("Has sido derrotado!");
            }else{
                ataqueUsuario(seleccion, seleccionRival);
            }
            break;
        case 3:
            alert(`${seleccionRival.nombre} ha elegido ${seleccionRival.poderes[2].Poder}!`);            
            seleccion.restarVida(seleccionRival.poderes[2].Potencia);
            if(seleccion.stats["ps"] <= 0){
                alert("Has sido derrotado!");
            }else{
                ataqueUsuario(seleccion, seleccionRival);
            }
            break;
        case 4:
            alert(`${seleccionRival.nombre} ha elegido ${seleccionRival.poderes[3].Poder}!`);            
            seleccion.restarVida(seleccionRival.poderes[3].Potencia);
            if(seleccion.stats["ps"] <= 0){
                alert("Has sido derrotado!");
            }else{
                ataqueUsuario(seleccion, seleccionRival);
            }
            break;
    }
}
intro();