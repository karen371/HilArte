<template>
  <header class="bg-white">
    
    <!-- Contenedor principal centrado -->
    <div 
      class="max-w-6xl mx-auto mt-6 mb-10 p-10 banner
             rounded-3xl shadow-lg" >
       <div class="absolute inset-0 bg-black/50 rounded-3xl"></div>
      <!-- Texto principal -->
      <div class="max-w-2xl  mx-auto text-center mb-10 relative z-10">
        <h1 class="text-4xl md:text-5xl font-extrabold text-white leading-tight text-shadow-lg">
          Encuentra el patrón perfecto para tu próximo proyecto
        </h1>

        <p class="text-gray-200 mt-4 text-lg">
          Explora miles de patrones de diseñadores de todo el mundo
        </p>
      </div>

      <!-- Buscador -->
      <div class="max-w-xl mx-auto relative z-10">
        <form>
          <div class="flex shadow-lg rounded-full overflow-hidden bg-white">

            <!-- Input -->
            <input
              type="search"
              placeholder="Buscar patrones"
              class="px-5 py-3 w-full md:w-96 text-gray-700 placeholder:text-gray-400 
                     focus:outline-none rounded-s-full"
            />

            <!-- Botón -->
            <button
              type="submit"
              class="flex items-center gap-2 bg-[#2c6f62] hover:bg-[#4aa896]  
                     text-white px-6 py-3 font-medium transition-colors rounded-e-full"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
              </svg>
              Buscar
            </button>
          </div>
        </form>
      </div>

    </div>

  </header>
</template>
 <style  scoped>
 .banner {
  position: relative;
  background-image: url('~/assets/img/banner.jpg');
   background-size: cover;      /* Ajusta sin deformar */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* 📱 Para pantallas pequeñas */
@media (max-width: 640px) {
  .banner {
    height: 300px; /* Ajusta a tu gusto */
  }
}

/* 📱 Para pantallas medianas */
@media (max-width: 768px) {
  .banner {
    height: 400px;
  }
}
 </style>
