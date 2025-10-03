/** @type {import('tailwindcss').Config} */
export default {
  content: [ // 1. Archivo HTML principal: donde se carga la aplicación.
    "./index.html",
    
    // 2. Componentes y archivos de código: la configuración estándar para Vue.
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
}

