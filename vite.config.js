import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/ConquerBlocks-Website/", // Usa rutas relativas en los enlaces generados en el HTML
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aviso_legal: resolve(__dirname, 'aviso_legal.html'),
        blog: resolve(__dirname, 'blog.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        cursos: resolve(__dirname, 'cursos.html'),
        login: resolve(__dirname, 'login.html'),
        quienes_somos: resolve(__dirname, 'quienes_somos.html'),
        registro: resolve(__dirname, 'registro.html'),
        'cursos/blockchain': resolve(__dirname, 'cursos/blockchain.html'),
        'cursos/ciberseguridad': resolve(__dirname, 'cursos/ciberseguridad.html'),
        'cursos/fullstack': resolve(__dirname, 'cursos/fullstack.html'),
        'cursos/ia': resolve(__dirname, 'cursos/ia.html'),
        'noticias/algoritmos': resolve(__dirname, 'noticias/algoritmos.html'),
        'noticias/bitsybytes': resolve(__dirname, 'noticias/bitsybytes.html'),
        'noticias/diagramasdeflujo': resolve(__dirname, 'noticias/diagramasdeflujo.html'),
        'noticias/lenguajenatural': resolve(__dirname, 'noticias/lenguajenatural.html')
      }
    }
  }
});
