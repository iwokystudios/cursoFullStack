var empleados = [
    {"name":"Julio", "age":35, "salary":900},
    {"name":"Pedro", "age":25, "salary":700},
    {"name":"Ramón", "age":23, "salary":1900},
    {"name":"Ángel", "age":30, "salary":1500},
    {"name":"Ernesto", "age":19, "salary":800},
    {"name":"Mónica", "age":29, "salary":1400},
    {"name":"Esperanza", "age":20, "salary":1100},
    {"name":"Cofla", "age":31, "salary":900},
    {"name":"Joel", "age":27, "salary":1500},
    {"name":"Cofla", "age":32, "salary":1700},
];

let listaDeAumento = [];

let listaDeNombre = [];

let empleadosAltoSueldo = [];

let rangosSalariales = (lista) => lista.map((current)=>{
    if (current.age < 30 && current.salary >= 1500) {
        empleadosAltoSueldo.push(current)
}}); 

console.log(empleados);

rangosSalariales(empleados);

console.log(empleadosAltoSueldo);

let busquedaNombre = (lista, nombre) => lista.map((current)=>{
    if (current.name === nombre) {
        listaDeNombre.push(current)
    }});

busquedaNombre(empleados, "Cofla");

console.log(listaDeNombre);

let incrementoDeSueldo = (lista, incremento) => lista.map((current)=>{

        current.salary += current.salary * incremento;

        listaDeAumento.push(current)
});

aumento = 0.20;

incrementoDeSueldo(empleados,aumento)

console.log(listaDeAumento);