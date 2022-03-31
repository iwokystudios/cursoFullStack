const pepe = {
    name: "Luis",
    address: "Barcelona"
};

function crearAlumno(alumno) {
    const objetoConvertidoATexto = JSON.stringify(alumno);

    const peticion = new XMLHttpRequest();

    peticion.onreadystatechange = () => {

        if (peticion.readyState === 4) {
            const objetoDeLaRespuesta = JSON.parse( peticion.responseText );

            alert(objetoDeLaRespuesta.msg);
        }
    };
    peticion.open('POST','http://localhost:3000/user' ,true);
    peticion.setRequestHeader("content-type","application/json;charset=utf-8");

    peticion.send( objetoConvertidoATexto );

}
