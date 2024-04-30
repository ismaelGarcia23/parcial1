

const validarClave = () => {
  let clave = document.querySelector('#clave').value;
  let confirmarClave = document.querySelector('#confirmarClave').value;

  // Expresión regular para validar al menos una mayúscula, una minúscula y un número,
  // permitiendo otros caracteres especiales como $, ., @, #, %, &, =
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d$.@#%&=]+$/;

  if (!regex.test(clave)) {
    alert('La clave debe contener al menos una letra mayúscula, una letra minúscula, un número y puede incluir otros caracteres especiales como $, ., @, #, %, &, =');
    return false;
  }

  if (clave !== confirmarClave) {
    alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
    return false;
  }
  alert('¡Los datos se han enviado correctamente!');

  return true;
}
