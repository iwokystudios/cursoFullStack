
// 01.Funcion que recibe un objeto casa que tiene una direccion y ciudad
// y modifica su diudad 

const home = {
    direccion : "Las gaviotas 847",
    ciudad : "Barcelona"
};
console.log(home);

const modifyCity = (home) => {
    home.city = "London";
};

modifyCity(home)
console.log(home);

// 02. Funcion que recibe un objeto casa y si la ciudad es Londres devuelve el mensaje "London" sino "No london" 

const checkLondon = (home) => home.city === "London" ? "London" : "No London";

console.log(checkLondon(home));

// 03. Funcion recorre lista y devuelve otra nueva lista con los dos primeros elementos de la primera

const list01 = [1,2,3,4,5]
const list02 = [];

const recorreList = (list) => {
    const list02 = [];
    list02.push(list[0], list[1]);
    return list02;
};

console.log(recorreList(list01));