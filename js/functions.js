function validarCorreo(correo) {
  var patron = /^[\w\.-]+@[\w\.-]+\.\w+$/;
  return patron.test(correo);
}

function validarTelefono(telefono) {
  var patron = /^\d{3}-\d{3}-\d{4}$/;
  return patron.test(telefono);
}
