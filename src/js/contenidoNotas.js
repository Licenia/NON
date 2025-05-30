const datosGuardados = JSON.parse(localStorage.getItem("notas"));
const posicion = parseInt(localStorage.getItem("cardSeleccionada"));

const card = datosGuardados[posicion];

const container = document.getElementById("container");
const div = document.createElement("div");
div.innerHTML = `<h3>${card.titulo}</h3>
<p>${card.fecha}</p>
<p>${card.contenido}</p>`;
container.appendChild(div);
