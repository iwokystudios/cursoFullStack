// #Ejercicio

// Hacer 3 funciones en Javascript
// listEmployees[] name, age, salary - 18-40años
// 10 employees

let listEmployees = [
    {
        name: "Alejandro",
        age: 24,
        salary: 1580 
    },
    {
        name: "Matias",
        age: 39,
        salary: 990 
    },
    {
        name: "Paco",
        age: 32,
        salary: 1250 
    },
    {
        name: "Fabian",
        age: 21,
        salary: 1099 
    },
    {
        name: "Carla",
        age: 28,
        salary: 1900 
    },
    {
        name: "Ximena",
        age: 36,
        salary: 2350 
    },
    {
        name: "Antonella",
        age: 23,
        salary: 1450
    },
    {
        name: "Carlos",
        age: 33,
        salary: 1800
    },
    {
        name: "Micaela",
        age: 20,
        salary: 850 
    },
    {
        name: "Javier",
        age: 25,
        salary: 1680
    },
]
// 1. 
//     1 parametro de entrada que es la listaAlumno
//     devolver una lista que tenga todos los que tienen menos de 30 y ganan
//     mas de 1500€

    let excercise01 = employees => employees.filter(employee => employee.salary >=1500 && employee.age <= 30 );
    console.log(excercise01(listEmployees));

// 2.
//     Funcion con dos parametros, lista y nombre
//     devuelve lista con todos los que tienen ese name

    let excercise02 = (list, name) => list.filter(list => list.name == name);
    console.log(excercise02(listEmployees, "Paco"));

// 3. 
//     Funcion con 2 params, lista e increase % de salario.
//     Retorna la lista con todos los salarios incrementados

    let excercise03 = (list, increase) => list.map(employee => {
        employee.salary *= (increase/100+1)
        return employee
    });
    console.log(excercise03(listEmployees, 20))