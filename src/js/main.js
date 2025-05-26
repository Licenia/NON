import MarkdownIt from "markdown-it";

const textMarkdown = document.getElementById("note-textarea");
const md = new MarkdownIt();

const mostrar = (renderizado) => {
  const mostrarResultados = document.getElementById("vistaPre");
  mostrarResultados.innerHTML = "";
  mostrarResultados.innerHTML = renderizado;
};

textMarkdown.addEventListener("keyup", () => {
  const texto = textMarkdown.value;

  if (typeof texto !== "string")
    return console.error("No es el formato esperado");

  const resultadoHtml = md.render(texto);
  mostrar(resultadoHtml);
  });


const mostrarVistaPrevia = document.getElementById("vista-previa");
mostrarVistaPrevia.addEventListener("click", () =>{
const cambiarEstado = document.getElementById("preview-view");
cambiarEstado.style.display = "block";
})