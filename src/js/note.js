const contenedorLista = document.querySelector(".contenedor-lista");

const datosGuardados = JSON.parse(localStorage.getItem("notas"));
datosGuardados.forEach((nota) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const titulo = document.createElement("h3");
  titulo.textContent = nota.titulo;

  const fecha = document.createElement("small");
  fecha.textContent = nota.fecha;

  const contenido = document.createElement("p");
  contenido.textContent = nota.contenido;

  card.appendChild(titulo);
  card.appendChild(fecha);
  contenedorLista.appendChild(card);
});
