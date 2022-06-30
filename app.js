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
            console.log(`${this.nombre} ha muerto`)
        }else{
            console.log(`A ${this.nombre} le quedan ${this.stats["ps"]} puntos de vida.`)
        }
    }
    restarVidaRival = dañoCalculado => {        
        this.stats["ps"] -= dañoCalculado;
        if(this.stats["ps"] <= 0){
            console.log(`${this.nombre} ha muerto`)
        }else{
            console.log(`A ${this.nombre} le quedan ${this.stats["ps"]} puntos de vida.`)
        }
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

    // let name = prompt("Ingresa tu nombre de entrenador...")
// let nameUp = name.toUpperCase();
// console.log(`**********************************************\n BIENVENIDO ${nameUp} A LA BATALLA POKEMON \n **********************************************`);
function intro(){
    
    console.log("Bueno, ahora te voy a dejar que elijas tu Pokemon");
    let eleccion = parseInt(prompt("Elije el Pokemon que quieras luchar: \n 1. Pikachu\n 2. Squirtle \n 3. Charmander \n 4. Bulbasaur"))
    
    pokeElegido(eleccion);
}

const pokeElegido = (eleccion) =>{
    let numRival = parseInt(Math.ceil(Math.random(0, 5) * 4))
    let seleccion;
    
    if(eleccion == 1){
        seleccion = pikachu;
        console.log(`Has selecionado a ${seleccion.nombre}`);
        pokeRival(numRival);
        ataqueUsuario(seleccion, seleccionRival);
    }else if(eleccion == 2){
        seleccion = squirtle;
        console.log(`Has selecionado a ${seleccion.nombre}`);
        pokeRival(numRival);
        ataqueUsuario(seleccion, seleccionRival);
    }else if(eleccion == 3){
        seleccion = charmander;
        console.log(`Has selecionado a ${seleccion.nombre}`);
        pokeRival(numRival);
        ataqueUsuario(seleccion, seleccionRival);
    }else if(eleccion == 4){
        seleccion = bulbasour;
        console.log(`Has selecionado a ${seleccion.nombre}`);
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
        console.log('El rival ha elegido a '+ seleccionRival.nombre)
    }else if(numRival == 2){
        seleccionRival = squirtle;
        console.log('El rival ha elegido a '+ seleccionRival.nombre)
    }else if(numRival == 3){
        seleccionRival = charmander;
        console.log('El rival ha elegido a '+ seleccionRival.nombre)
    }else if(numRival == 4){
        seleccionRival = bulbasour;
        console.log('El rival ha elegido a '+ seleccionRival.nombre)
    }else{
        console.log('No existe ese pokemon.');
    }
}