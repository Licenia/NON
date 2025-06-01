
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        note: './note.html',
        notas: './notasGuardadas.html',
        contenido: './contenidoNotas.html'
      }
    }
  }
});
