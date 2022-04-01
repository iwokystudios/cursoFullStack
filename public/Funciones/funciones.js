

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
function cambiaNombre(alumno, nombreNuevo) {
    console.log("Parámetro alumno : ", alumno);
    console.log("Parámetro nombreNuevo : ", nombreNuevo);
    alumno.nombre = nombreNuevo;
    alumno.edat = 20;
}

const objetoPepito = { nombre: "Juanito", edat: 25 };
const nombreNuevoDePepe = "Pepe";
const objetoPaco = { nombre: "Paquito", edat: 25 };

// cambiaNombre( objetoPepito, nombreNuevoDePepe );
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
    lista.map((alumno) => {
        if (alumno.nombre === "Pepito" || alumno.nombre === "Juanito") {
            alumno.edad = nuevaEdad;
        } else {
            alumno.edad = alumno.edad + 10;
        }
    });
    return "hola"
};
cambiaEdadAlumnos(listaAlumnos, 75);

(lista = listaAlumnos, nuevaEdad = 75) => {
    console.log(" ESTOY DENTRO DE CAMBIA EDAD ALUMNOS ");
    lista.map((alumno) => {
        if (alumno.nombre === "Pepito" || alumno.nombre === "Juanito") {
            alumno.edad = nuevaEdad;
        } else {
            alumno.edad = alumno.edad + 10;
        }
    });
    return "hola"
}
const listaCasas = [
    { direccion: "Paseo Gracia", ciudad: "Valencia" },
    { direccion: "Avenida Palacio", ciudad: "Madrid" },
    { direccion: "C/ Lituania", ciudad: "Barcelona" }
];
console.log(listaCasas);

cambiaCiudad = (lista, nuevaCiudad) => {
    lista.ciudad = nuevaCiudad;
}
cambiaCiudad(listaCasas[0], "Londres");
console.log(listaCasas[0]);


esLondres = (lista) => {
    lista.map((casa) => {
        if (casa.ciudad == "Londres") {
            console.log("LONDON");
        } else {
            console.log("NO LONDON");
        }
    });
}
esLondres(listaCasas);


novaLista=(lista)=>{
    novaArray=[];
    for (pos = 0; pos < lista.lenght && pos < 2; pos++) {
        novaArray.push(lista[pos]);
    }
    // return novaArray;
    // novaArray.push(lista[0], lista[1]);
    return novaArray;
}

console.log(novaLista(listaCasas));

// console.log(listaAlumnos);