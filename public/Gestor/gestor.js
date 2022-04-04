var valido = true;
const form = document.querySelector('#formulario');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const passConfirma = document.getElementById('passConfirma');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  valido = true;
  validaCampos();
  if (valido) createUser({ usuario: usuario.value, email: email.value, pass: pass.value });
});

const validaCampos = () => {
  //capturar los valores ingresados por el usuario
  const usuarioValor = usuario.value.trim();
  const emailValor = email.value.trim();
  const passValor = pass.value.trim();
  const passConfirmaValor = passConfirma.value.trim();

  //validando campo usuario
  //(!usuarioValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)
  if (!usuarioValor) {
    validaFalla(usuario, 'Campo vacío');
  } else {
    validaOk(usuario);
  }

  //validando campo email
  if (!emailValor) {
    validaFalla(email, 'Campo vacío');
  } else if (!validaEmail(emailValor)) {
    validaFalla(email, 'El e-mail no es válido');
  } else {
    validaOk(email);
  }
  //validando campo password
  const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/;
  if (!passValor) {
    validaFalla(pass, 'Campo vacío');
  } else if (passValor.length < 8) {
    validaFalla(pass, 'Debe tener 8 caracteres cómo mínimo.');
    // } else if (!passValor.match(er)) {
    //   validaFalla(pass, 'Debe tener al menos una may., una min. y un núm.');
  } else {
    validaOk(pass);
  }

  //validando campo password Confirmación
  if (!passConfirmaValor) {
    validaFalla(passConfirma, 'Confirme su password');
  } else if (passValor !== passConfirmaValor) {
    validaFalla(passConfirma, 'La password no coincide');
  } else {
    validaOk(passConfirma);
  }
};

const validaFalla = (input, msg) => {
  valido = false;
  const formControl = input.parentElement;
  const aviso = formControl.querySelector('p');
  aviso.innerText = msg;
  formControl.className = 'form-control falla';
};
const validaOk = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control ok';
};

const validaEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};

function createUser(user) {
  // Es como
  const peticion = new XMLHttpRequest();

  // Indicamos QUÉ HACER CADA VEZ QUE CAMBIE EL ESTADO DE LA PETICIÓN
  peticion.onreadystatechange = () => {
    if (peticion.readyState == 4) {
      console.log('Hemos recibido la respuesta del servidor');
      const respuesta = JSON.parse(peticion.responseText);
      const contenedor = document.getElementById('contenedor');
      contenedor.innerHTML = respuesta.msg;
    }
  };
  // Indicamos que el método de envío será POST y la dirección a la que enviaremos los datos
  peticion.open('POST', 'http://localhost:3000/user');
  // Especificamos que el contenido de la petición será un objeto JSON
  peticion.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  // Realizamos el envío de la petición.
  // Enviamos el objeto convertido en texto.
  peticion.send(JSON.stringify(user));
}