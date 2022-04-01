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
// function cambiaNombre( alumno, nombreNuevo ) {
//     console.log( "Parámetro alumno : ", alumno);
//     console.log( "Parámetro nombreNuevo : ", nombreNuevo);
//     alumno.nombre = nombreNuevo;
//     alumno.edat = 20;
// }

// const objetoPepito = { nombre: "Juanito", edat: 25 };
// const nombreNuevoDePepe = "Pepe";
// const objetoPaco = { nombre: "Paquito", edat: 25 };

// cambiaNombre( objetoPepito, nombreNuevoDePepe );
// console.log("ESTOY FUERA DE LA FUNCIÓN AHORA MISMO");
// console.log("objetoPepito ahora es : ", objetoPepito);

// cambiaNombre( objetoPaco, "Francisco" );
// console.log("ESTOY FUERA DE LA FUNCIÓN AHORA MISMO");
// console.log("objetoPaco ahora es : ", objetoPaco);


// /** FUNCIÓN QUE MODIFICA PROPIEDADES DE OBJETOS DE UNA LISTA DE OBJETOS */
// const listaAlumnos = [
//     { nombre: "Paquito", edad: 25 },
//     { nombre: "Pepito", edad: 25 },
//     { nombre: "Juanito", edad: 25 }
// ];
// const cambiaEdadAlumnos = (lista, nuevaEdad) => {
//     console.log(" ESTOY DENTRO DE CAMBIA EDAD ALUMNOS ");
//     lista.map( (alumno) => {
//         if ( alumno.nombre === "Pepito" || alumno.nombre === "Juanito" ) {
//             alumno.edad = nuevaEdad;
//         } else {
//             alumno.edad = alumno.edad + 10;
//         }
//     } );
//     return "hola"
// };
// cambiaEdadAlumnos(listaAlumnos, 75);

// (lista = listaAlumnos, nuevaEdad = 75) => {
//     console.log(" ESTOY DENTRO DE CAMBIA EDAD ALUMNOS ");
//     lista.map( (alumno) => {
//         if ( alumno.nombre === "Pepito" || alumno.nombre === "Juanito" ) {
//             alumno.edad = nuevaEdad;
//         } else {
//             alumno.edad = alumno.edad + 10;
//         }
//     } );
//     return "hola"
// }








const casa = {                                               /*Realizo un objeto con 2 atributos.*/
    direccion: "Avenidotonta",
    ciudad: "Barcelona"
};

    const ciudadEscojida = "Madrid";                            /*Guardo el valor que quiero añadir en una variable.*/

    const cambiarCiudad = (vieja, nueva) => {                       /*CREO UNA FUNCUON*/
        vieja.ciudad = nueva;                                          


    }
    cambiarCiudad(casa, ciudadEscojida);                            /*LLAMO A LA FUNCION*/
    
    console.log(casa);                                                 /*CONSOLE LOG Y EL OBJETO QUE QUIERA VISUALIZAR*/


/*IMPORTANTISIMO JODER VIEJA Y NUEVA EN ESTE CASO, SERAN SUSTIUDAS INTERNAMENTE POR LOS VALORES CASA Y CIUDAD ESCOJIDA*/








// console.log(listaAlumnos);