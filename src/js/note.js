const contenedorLista = document.querySelector(".contenedor-lista");

const datosGuardados = JSON.parse(localStorage.getItem("notas"));
datosGuardados.forEach((nota) => {
  const containerOpciones = document.createElement("div");

  const card = document.createElement("div");
  card.classList.add("card");

  const titulo = document.createElement("h3");
  titulo.textContent = nota.titulo;

  const fecha = document.createElement("small");
  fecha.textContent = nota.fecha;
  fecha.classList.add("date");

  const contenido = document.createElement("p");
  contenido.textContent = nota.contenido;

  const menu = document.createElement("img");
  menu.setAttribute("src", "/public/assets/images/tres-puntos.png");
  menu.classList.add("menu-btn");

  card.appendChild(titulo);
  containerOpciones.appendChild(fecha);
  containerOpciones.appendChild(menu);
  contenedorLista.appendChild(card);
  card.appendChild(containerOpciones);
});
