function registrarseComoUsuario() {
    const conversionATexto = JSON.stringify(registro);
    const peticion = new XMLHttpRequest();
    peticion.onreadystatechange = () => {

    };
    peticion.open('POST', 'http://localhost:3000/registrarseComoUsuario', true);
    peticion.setRequestHeader("Content type" )

    peticion.send( conversionATexto )



}