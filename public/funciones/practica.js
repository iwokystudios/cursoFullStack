// function casa( ciudad, direccion ) {
//     console.log( "Parámetro casa : ", casa);
//     console.log( "Parámetro direccionNueva : ", nuevaDireccion);
//     casa = nuevaDireccion;
//     ciudad = "Barcelona"; 
//     direccion = "C/Valencia 5";
//     }

// const objetocasa = { ciudad: "Barcelona", direccion: "C/valencia 5" };
//  if (ciudad === "Barcelona"); {
//      return "Barcelona";
//  } else  {
//    return (ciudad )
//  }
 const listaCasa = [
    { ciudad: "Barcelona", direccion: "c/valencia 5" },
    { ciudad: "Madrid", direccion: "c/industria 8"},
    { ciudad: "Valencia", direccion: "c/martin 133" },
    { ciudad: "Zaragoza", direccion: "c/virgen del pilar 7" }
]; 

const casaA = { ciudad: "Barcelona", direccion: "c/valencia 5" };


function cambiaCiudad(casa, nombreCiudadNueva) {
    casa.ciudad = nombreCiudadNueva;
}

cambiaCiudad( listaCasa[2], "Paris" );

// function cambiaCiudad(casa = listaCasa[2], nombreCiudadNueva = "Paris") {
//     casa.ciudad = nombreCiudadNueva;
// }

cambiaCiudad( casaA, "Londres" );
// function cambiaCiudad(casa = casaA = { ciudad: "Barcelona", direccion: "c/valencia 5" }, nombreCiudadNueva = "Londres") {
//     casa.ciudad = nombreCiudadNueva;
// }

const isLondon = ( casa ) => {
    if (casa.ciudad === "Londres") {
        return "LONDON";
    } else {
        return "NO LONDON";
    }
};

var resultadoDeLaFuncion = isLondon(casaA);
alert(resultadoDeLaFuncion);
// const isLondon = ( casa = casaA ) => {
//     if (casa.)
// };