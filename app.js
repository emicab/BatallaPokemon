class Pokemon{
    constructor(nombre, stats, tipo, poderes, pocion, sonido){
        this.nombre = nombre;
        this.stats = stats;
        this.tipo = tipo;
        this.poderes = poderes;
        this.pocion = pocion;
        this.sonido = sonido;
    }
    restarVidaUsuario = dañoCalculado => {        
        this.stats["ps"] -= dañoCalculado;
        if(this.stats["ps"] <= 0){
            alert(`${this.nombre} ha muerto`)
        }else{
            alert(`A ${this.nombre} le quedan ${this.stats["ps"]} puntos de vida.`)
        }
    }
    restarVidaRival = dañoCalculado => {        
        this.stats["ps"] -= dañoCalculado;
        if(this.stats["ps"] <= 0){
            alert(`${this.nombre} ha muerto`)
        }else{
            alert(`A ${this.nombre} le quedan ${this.stats["ps"]} puntos de vida.`)
        }
    }
}

const calcularDañoUser = (seleccion, poder) => {
    console.log(poder);
    if (seleccion.poderes[poder].Categoria == 'Fisico'){
        
        if(seleccion.poderes[poder].TipoPoder == seleccion.tipo){
            let stab = 1.6;
            dañoCalculado = parseInt(((2 * 50 / 5 + 2) * seleccion.stats["atk"] * seleccion.poderes[poder].Potencia / seleccionRival.stats["def"]) / 50 * stab);
            alert("Has hecho un daño aumentado de " + dañoCalculado + " puntos!")
        }else{
            dañoCalculado = parseInt(((2 * 50 / 5 + 2) * seleccion.stats["atk"] * seleccion.poderes[poder].Potencia / seleccionRival.stats["def"]) / 50);
            alert("Has hecho un daño aumentado de " + dañoCalculado + " puntos!")
        }
    } else if (seleccion.poderes[poder].Categoria == 'Especial'){
        
        if(seleccion.poderes[poder].TipoPoder == seleccion.tipo){
            let stab = 1.73;
            dañoCalculado = parseInt(((2 * 50 / 5 + 2) * seleccion.stats["atk_esp"] * seleccion.poderes[poder].Potencia / seleccionRival.stats["def_esp"]) / 50 * stab);
            alert("Has hecho un daño aumentado de " + dañoCalculado + " puntos!")
        }else{
            dañoCalculado = parseInt(((2 * 50 / 5 + 2) * seleccion.stats["atk_esp"] * seleccion.poderes[poder].Potencia / seleccionRival.stats["def_esp"]) / 50);
            alert("Has hecho un daño aumentado de " + dañoCalculado + " puntos!")
        }
    }else if (seleccion.poderes[poder].Categoria == 'Estado'){
        alert('tipo estado');
    }
}
const calcularDañoRival = (seleccionRival, ataqueAletorio, seleccion) => {
    if (seleccionRival.poderes[ataqueAletorio].Categoria == 'Fisico'){
        
        if(seleccionRival.poderes[ataqueAletorio].TipoPoder == seleccionRival.tipo){
            let stab = 1.6;
            dañoCalculado = parseInt(((2 * 50 / 5 + 2) * seleccionRival.stats["atk"] * seleccionRival.poderes[ataqueAletorio].Potencia / seleccion.stats["def"]) / 50 * stab);
            alert("Has hecho un daño aumentado de " + dañoCalculado + " puntos!")
        }else{
            dañoCalculado = parseInt(((2 * 50 / 5 + 2) * seleccionRival.stats["atk"] * seleccionRival.poderes[ataqueAletorio].Potencia / seleccion.stats["def"]) / 50);
            alert("Has hecho un daño aumentado de " + dañoCalculado + " puntos!")
        }
    } else if (seleccionRival.poderes[ataqueAletorio].Categoria == 'Especial'){
        
        if(seleccionRival.poderes[ataqueAletorio].TipoPoder == seleccionRival.tipo){
            let stab = 1.73;
            dañoCalculado = parseInt(((2 * 50 / 5 + 2) * seleccionRival.stats["atk_esp"] * seleccionRival.poderes[ataqueAletorio].Potencia / seleccion.stats["def_esp"]) / 50 * stab);
            alert("Has hecho un daño aumentado de " + dañoCalculado + " puntos!")
        }else{
            dañoCalculado = parseInt(((2 * 50 / 5 + 2) * seleccionRival.stats["atk_esp"] * seleccionRival.poderes[ataqueAletorio].Potencia / seleccion.stats["def_esp"]) / 50);
            alert("Has hecho un daño aumentado de " + dañoCalculado + " puntos!")
        }
    }else if (seleccionRival.poderes[ataqueAletorio].Categoria == 'Estado'){
        alert('tipo estado');
    }
}


//Pikachu
const pikachu = new Pokemon("Pikachu",
    {ps: 274, atk: 229, def: 196, atk_esp: 199, def_esp: 199, vel: 279},
    "Electrico", 
    [   
        {Poder: "Impactrueno", Potencia: 40,"TipoPoder": "Electrico", "Categoria": "Especial"}, 
        {Poder: "Chispa", Potencia: 65, "TipoPoder": "Electrico", "Categoria": "Fisico"}, 
        {Poder: "Ataque Rapido", Potencia: 40, "TipoPoder": "Normal", "Categoria": "Fisico"}, 
        {Poder: "Gruñido", Potencia: 0.95, "TipoPoder": "Normal", "Categoria": "Estado"}
    ], 
    {"Cantidad": 2, "Cura": 25}, 
    "Pika! pikaa!");
//Squirtle
const squirtle = new Pokemon("Squirtle", 
    {ps: 292, atk: 214, def: 251, atk_esp: 199, def_esp: 227, vel: 185}, 
    "Agua", 
    [{Poder: "Placaje", Potencia: 40, "TipoPoder": "Normal", "Categoria": "Fisico"}, 
        {Poder: "Acua Cola", Potencia: 90, "TipoPoder": "Agua", "Categoria": "Fisico"}, 
        {Poder: "Burbuja", Potencia: 40, "TipoPoder": "Agua", "Categoria": "Especial"}, 
        {Poder: "Defensa Ferrea", Potencia: 1.10, "TipoPoder": "Acero", "Categoria": "Estado"}], 
    {"Cantidad": 2, "Cura": 25});
//Charmander
const charmander = new Pokemon("Charmander", 
    {ps: 282, atk: 203, def: 185, atk_esp: 219, def_esp: 199, vel: 229}, 
    "Fuego",
    [{Poder: "Garra Metal", Potencia: 40, "TipoPoder": "Acero", "Categoria": "Fisico"},
        {Poder: "Colmillo Igneo", Potencia: 65, "TipoPoder": "Fuego", "Categoria": "Fisico"},
        {Poder: "Lanzallamas", Potencia: 90, "TipoPoder": "Fuego", "Categoria": "Especial"}, 
        {Poder: "Malicioso", Potencia: 0.95, "TipoPoder": "Normal", "Categoria": "Estado"}], 
    {"Cantidad": 2, "Cura": 25})
//Bulbasaur
const bulbasour = new Pokemon("Bulbasaur", 
    {ps: 294, atk: 197, def: 197, atk_esp: 229, def_esp: 229, vel: 207}, 
    "Planta", 
    [{Poder: "Drenadoras", Potencia: 0.0625, "TipoPoder": "Planta", "Categoria": "Estado"}, 
        {Poder: "Latigo Cepa", Potencia: 45, "TipoPoder": "Planta", "Categoria": "Fisico"}, 
        {Poder: "Hoja Afilada", Potencia: 55, "TipoPoder": "Planta", "Categoria": "Fisico"}, 
        {Poder: "Rayo Solar", Potencia: 90, "TipoPoder": "Planta", "Categoria": "Especial"}], 
    {"Cantidad": 2, "Cura": 25});

let name = prompt("Ingresa tu nombre de entrenador...")
let nameUp = name.toUpperCase();
alert(`**********************************************\n BIENVENIDO ${nameUp} A LA BATALLA POKEMON \n **********************************************`);
function intro(){
    
    alert("Bueno, ahora te voy a dejar que elijas tu Pokemon");
    let eleccion = parseInt(prompt("Elije el Pokemon que quieras luchar: \n 1. Pikachu\n 2. Squirtle \n 3. Charmander \n 4. Bulbasaur"))
    
    pokeElegido(eleccion);
}

const pokeElegido = (eleccion) =>{
    let seleccion;
    
    if(eleccion == 1){
        seleccion = pikachu;
        alert(`Has selecionado a ${seleccion.nombre}`);
        pokeRival();
        ataqueUsuario(seleccion, seleccionRival);
    }else if(eleccion == 2){
        seleccion = squirtle;
        alert(`Has selecionado a ${seleccion.nombre}`);
        pokeRival();
        ataqueUsuario(seleccion, seleccionRival);
    }else if(eleccion == 3){
        seleccion = charmander;
        alert(`Has selecionado a ${seleccion.nombre}`);
        pokeRival();
        ataqueUsuario(seleccion, seleccionRival);
    }else if(eleccion == 4){
        seleccion = bulbasour;
        alert(`Has selecionado a ${seleccion.nombre}`);
        pokeRival();
        ataqueUsuario(seleccion, seleccionRival);
    }else{
        alert('No existe ese pokemon.');
    }
    
}

function pokeRival(){  
    let numRival = parseInt(Math.ceil(Math.random(0, 5) * 4))
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
        alert('No existe ese pokemon.');
    }
}

const ataqueUsuario = (seleccion) =>{
    
    let poderSelec = parseInt(prompt(`Es tu turno de atacar... elije con que poder empezar: \n 1. ${seleccion.poderes[0].Poder}: ${seleccion.poderes[0].Potencia} \n 2. ${seleccion.poderes[1].Poder}: ${seleccion.poderes[1].Potencia}\n 3. ${seleccion.poderes[2].Poder}: ${seleccion.poderes[2].Potencia}\n 4. ${seleccion.poderes[3].Poder}: ${seleccion.poderes[3].Potencia}`));
    let poder = poderSelec - 1;
    switch(poderSelec){
        case 1:
            alert(`Has elegido ${seleccion.poderes[0].Poder}!`);
            calcularDañoUser(seleccion, poder);
            seleccionRival.restarVidaRival(seleccion.poderes[0].Potencia);
            if(seleccionRival.stats["ps"] <= 0){
                alert(`Has vencido a ${seleccionRival.nombre}`)
            }else{
                ataqueRival(seleccionRival, seleccion);
            }
            break;
        case 2:
            alert(`Has elegido ${seleccion.poderes[1].Poder}!`);
            calcularDañoUser(seleccion, poder);
            seleccionRival.restarVidaRival(seleccion.poderes[1].Potencia);
            if(seleccionRival.stats["ps"] <= 0){
                alert(`Has vencido a ${seleccionRival.nombre}`)
            }else{
                ataqueRival(seleccionRival, seleccion);
            }
            break;
        case 3:
            alert(`Has elegido ${seleccion.poderes[2].Poder}!`);
            calcularDañoUser(seleccion, poder);
            seleccionRival.restarVidaRival(seleccion.poderes[2].Potencia);
            if(seleccionRival.stats["ps"] <= 0){
                alert(`Has vencido a ${seleccionRival.nombre}`)
            }else{
                ataqueRival(seleccionRival, seleccion);
            }
            break;
        case 4:
            alert(`Has elegido ${seleccion.poderes[3].Poder}!`);
            calcularDañoUser(seleccion, poder);
            seleccionRival.restarVidaRival(seleccion.poderes[3].Potencia);
            if(seleccionRival.stats["ps"] <= 0){
                alert(`Has vencido a ${seleccionRival.nombre}`)
            }else{
                ataqueRival(seleccionRival, seleccion);
            }
            break;
    }
}

function ataqueRival(seleccionRival, seleccion){
    alert(`Es el turno de ${seleccionRival.nombre} rival para atacar!`)
    let ataqueAletorioSelec = Math.round(Math.random(0, 4) * 4)
    console.log(ataqueAletorioSelec);
    let ataqueAletorio = ataqueAletorioSelec - 1;
    switch(ataqueAletorioSelec){
        case 1:
            alert(`${seleccionRival.nombre} ha elegido ${seleccionRival.poderes[0].Poder}!`);
            calcularDañoRival(seleccionRival, ataqueAletorio, seleccion)
            seleccion.restarVidaUsuario(seleccionRival.poderes[0].Potencia);
            if(seleccion.stats["ps"] <= 0){
                alert("Has sido derrotado!");
            }else{
                ataqueUsuario(seleccion, ataqueAletorio);
            }
            break;
        case 2:
            alert(`${seleccionRival.nombre} ha elegido ${seleccionRival.poderes[1].Poder}!`);
            calcularDañoRival(seleccionRival, ataqueAletorio, seleccion)
            seleccion.restarVidaUsuario(seleccionRival.poderes[1].Potencia);
            if(seleccion.stats["ps"] <= 0){
                alert("Has sido derrotado!");
            }else{
                ataqueUsuario(seleccion, ataqueAletorio);
            }
            break;
        case 3:
            alert(`${seleccionRival.nombre} ha elegido ${seleccionRival.poderes[2].Poder}!`);
            calcularDañoRival(seleccionRival, ataqueAletorio, seleccion)
            seleccion.restarVidaUsuario(seleccionRival.poderes[2].Potencia);
            if(seleccion.stats["ps"] <= 0){
                alert("Has sido derrotado!");
            }else{
                ataqueUsuario(seleccion, ataqueAletorio);
            }
            break;
        case 4:
            alert(`${seleccionRival.nombre} ha elegido ${seleccionRival.poderes[3].Poder}!`);
            calcularDañoRival(seleccionRival, ataqueAletorio, seleccion)
            seleccion.restarVidaUsuario(seleccionRival.poderes[3].Potencia);
            if(seleccion.stats["ps"] <= 0){
                alert("Has sido derrotado!");
            }else{
                ataqueUsuario(seleccion, ataqueAletorio);
            }
            break;
    }
}

intro();