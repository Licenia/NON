
  const datosGuardados = JSON.parse(localStorage.getItem("nota"));

  const tituloElemento = document.getElementById("titulo-guardado");
  const contenidoElemento = document.getElementById("contenido-guardado");
  const fechaElemento = document.getElementById("fecha-guardada");

  if (datosGuardados) {
    tituloElemento.textContent = datosGuardados.titulo;
    contenidoElemento.innerHTML = datosGuardados.contenido;
    fechaElemento.textContent = new Date(datosGuardados.fecha).toLocaleString();
  } else {
    tituloElemento.textContent = "No hay notas guardadas.";
    contenidoElemento.textContent = "";
    fechaElemento.textContent = "";
  }

