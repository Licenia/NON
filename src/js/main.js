import MarkdownIt from "markdown-it";

const textMarkdown = document.getElementById("note-textarea");
const md = new MarkdownIt();

const mostrar = (renderizado) => {
  const titulo = document.querySelector(".titulo").value;
  const mostrarResultados = document.getElementById("vistaPre");
  mostrarResultados.innerHTML = "";
  mostrarResultados.innerHTML = `<h1>${titulo}</h1>${renderizado}`;
};

if (textMarkdown) {
  textMarkdown.addEventListener("keyup", () => {
    const texto = textMarkdown.value;

    if (typeof texto !== "string")
      return console.error("No es el formato esperado");

    const resultadoHtml = md.render(texto);
    mostrar(resultadoHtml);
  });
}

const mostrarVistaPrevia = document.getElementById("vista-previa");
const noteContent = document.querySelector(".note-content");
const iconoFlecha = document.querySelector(".icono-salir");
const cambiarEstado = document.getElementById("preview-view");
const editar = document.getElementById("back-to-edit");
const noteContainer = document.querySelector(".note-container");
const guardarNota = document.getElementById("guardar");
const contenedorBotones = document.querySelector(".container-buttons");

if (mostrarVistaPrevia) {
  mostrarVistaPrevia.addEventListener("click", () => {
    noteContainer.style.display = "none";
    iconoFlecha.style.display = "none";
    noteContent.style.display = "none";
    contenedorBotones.style.display = "none";
    cambiarEstado.style.display = "block";
    editar.style.display = "block";
  });
}

if (editar) {
  editar.addEventListener("click", () => {
    noteContainer.style.display = "block";
    iconoFlecha.style.display = "block";
    noteContent.style.display = "block";
    editar.style.display = "none";
    cambiarEstado.style.display = "none";
    contenedorBotones.style.display = "block";
  });
}

if (guardarNota) {
  guardarNota.addEventListener("click", () => {
    const inputTitulo = document.getElementById("note-title"); 
    const inputContenido = document.getElementById("note-textarea"); 

    const titulo = (inputTitulo?.value || "").trim();
    const contenido = (inputContenido?.value || "").trim();

    if (!titulo || !contenido) {
      alert("Título y contenido no pueden estar vacíos.");
      return;
    }

    let notas = JSON.parse(localStorage.getItem("notas")) || [];
    const nuevaNota = {
      titulo: document.querySelector(".titulo").value,
      contenido: document.getElementById("note-textarea").value,
      fecha: new Date().toLocaleDateString(),
    };

    notas.push(nuevaNota);

    localStorage.setItem("notas", JSON.stringify(notas));
  });
}

document.getElementById("view-notes").addEventListener("click", () => {
  window.location.href = "notasGuardadas.html";
});

