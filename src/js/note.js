const contenedorLista = document.querySelector(".contenedor-lista");

const datosGuardados = JSON.parse(localStorage.getItem("notas"));
datosGuardados.forEach((nota, index) => {
  const containerOpciones = document.createElement("div");
  const cardSection = document.createElement("div");
  cardSection.classList.add("card-section");

  
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("id", "card");
  card.dataset.index = index;
  
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
  
  cardSection.appendChild(titulo);
  cardSection.appendChild(contenido);
  containerOpciones.appendChild(fecha);
  containerOpciones.appendChild(menu);
  contenedorLista.appendChild(card);
  card.appendChild(cardSection);
  card.appendChild(containerOpciones);
});


const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    const index = e.currentTarget.dataset.index;
    localStorage.setItem("cardSeleccionada", index);
    window.location.href = "contenidoNotas.html";
  });
});
