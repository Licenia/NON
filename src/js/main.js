
import MarkdownIt from 'markdown-it';
// const textoMarkdown = `
//  # NON
//  **probando negritas**
//  *cursiva*
//  _arroz_
//  -huevos
//  -etc
//  `
 
//  const vistaPrevia = document.getElementById("vista-previa");

const md = new MarkdownIt();
const textMarkdown = document.getElementById("note-textarea");

textMarkdown.addEventListener("input", () =>{
   const resultadoHtml = md.render(textMarkdown);
   const div = document.createElement("div");
   div.innerHTML = resultadoHtml;
}) 