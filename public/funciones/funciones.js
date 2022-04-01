// alert( suma(5,6) );

/*
    AQUÍ SÓLO DEFINIMOS LA FUNCIÓN
    NO SE ESTÁ EJECUTANDO

    LOS PARÁMETROS QUE PONEMOS EN LA DEFINICIÓN ES LO QUE ESPERAMOS
    QUE NOS PASEN CUANDO LA VAYAN A USAR

    Parámetros de esta función
    alumno ---- objeto
        { nombre: "Pepito", edat: 25 }
    nombreNuevo ----- string
*/
function cambiaNombre( alumno, nombreNuevo ) {
    console.log( "Parámetro alumno : ", alumno);
    console.log( "Parámetro nombreNuevo : ", nombreNuevo);
    alumno.nombre = nombreNuevo;
    alumno.edat = 20;
};

const objetoPepito = { nombre: "Juanito", edat: 25 };
const nombreNuevoDePepe = "Pepe";
const objetoPaco = { nombre: "Paquito", edat: 25 };

// cambiaNombre( objetoPepito, nombreNuevoDePepe );

// cambiaNombre( alumno = objetoPepito, nombreNuevo = nombreNuevoDePepe ) {
//     console.log( "Parámetro alumno : ", alumno);
//     console.log( "Parámetro nombreNuevo : ", nombreNuevo);
//     alumno.nombre = nombreNuevo;
//     alumno.edat = 20;
// }


// cambiaNombre( objetoPaco, "Jaime" );

// cambiaNombre( alumno = objetoPaco, nombreNuevo = "Jaime" ) {
//     console.log( "Parámetro alumno : ", alumno);
//     console.log( "Parámetro nombreNuevo : ", nombreNuevo);
//     alumno.nombre = nombreNuevo;
//     alumno.edat = 20;
// }


// console.log("ESTOY FUERA DE LA FUNCIÓN AHORA MISMO");
// console.log("objetoPepito ahora es : ", objetoPepito);

// cambiaNombre( objetoPaco, "Francisco" );
// console.log("ESTOY FUERA DE LA FUNCIÓN AHORA MISMO");
// console.log("objetoPaco ahora es : ", objetoPaco);


/** FUNCIÓN QUE MODIFICA PROPIEDADES DE OBJETOS DE UNA LISTA DE OBJETOS */
const listaAlumnos = [
    { nombre: "Paquito", edad: 25 },
    { nombre: "Pepito", edad: 25 },
    { nombre: "Juanito", edad: 25 }
];

const cambiaEdadAlumnos = (lista, nuevaEdad) => {
    console.log(" ESTOY DENTRO DE CAMBIA EDAD ALUMNOS ");
    lista.map( (alumno) => {
        if ( alumno.nombre === "Pepito" || alumno.nombre === "Juanito" ) {
            alumno.edad = nuevaEdad;
        } else {
            alumno.edad = alumno.edad + 10;
        }
    } );
    return "hola"
};

//cambiaEdadAlumnos(listaAlumnos, 75);

(lista = listaAlumnos, nuevaEdad = 75) => {
    console.log(" ESTOY DENTRO DE CAMBIA EDAD ALUMNOS ");
    lista.map( (alumno) => {
        if ( alumno.nombre === "Pepito" || alumno.nombre === "Juanito" ) {
            alumno.edad = nuevaEdad;
        } else {
            alumno.edad = alumno.edad + 10;
        }
    } );
    return "hola"
}

//EJERCICIO 1 - Función que recibe un objeto casa direccion ciudad y modifica su ciudad. //
function cambiaCiudad( casa, ciudadNueva ) {
    console.log( "Parámetro ciudad : ", casa);
    console.log( "Parámetro nombreNuevo : ", ciudadNueva);
    casa.ciudad = ciudadNueva;
}

const objetoLondres = { direccion: "DownTown", ciudad: "Tokio" };
const nombreNuevoDeLondres = "Londres";


cambiaCiudad( objetoLondres, nombreNuevoDeLondres );

console.log(objetoLondres);

// const casa = [
//     { direccion: "DownTown", ciudad: "Tokio"},
//     { direccion: "Eiffel", ciudad: "Paris"},
//     { direccion: "Castellana", ciudad: "Madrid"}
// ];


//EJERCICIO 2 - Función que recibe un objeto casa y si la ciudad es Londres devuelve el mensaje "LONDON" si no "NO LONDON".

//EJERCICIO 3 - Función recorre lista y devuelve otra lista nueva con los dos primeros elementos de la primera. 
const listaCoches = ["fiat", "seat", "ferrari", "tesla"];
function dameLosDosPrimeros(cochecitos) {
    const listaNueva = [];
    for(let pos = 0; pos < cochecitos.length && pos < 2; pos++) {
        listaNueva.push ( cochecitos[pos] ); 
    }
    return listaNueva;
}

const resultado = dameLosDosPrimeros(listaCoches);
console.log(resultado);













// console.log(listaAlumnos);