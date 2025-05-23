
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const textoMarkdown = `
 # NON
 **probando negritas**
    *cursiva*
    _arroz_
    -huevos
    -etc
 `

 const resultadoHtml = md.render(textoMarkdown);
 console.log(resultadoHtml);
