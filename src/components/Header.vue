<script setup>
import Navbar from '../components/Navbar.vue'
import img from '../assets/img-Header.png'
</script>
<template>
      
 <header class="bg-[#1E2D24] banner-con-imagen py-4">
    <Navbar />
  <div 
    class=" text-white py-32 px-4 flex flex-col items-center text-center 
           w-full  rounded-xl shadow-xl mt-4 "
  >
    <h1 class="text-4xl sm:text-5xl font-bold mb-4 p-4">
      Encuentra el patrón perfecto para tu próximo proyecto
    </h1>
    <p class="text-lg sm:text-xl mb-8 p-4">
      Explora miles de patrones de tejido de diseñadores independientes de todo el mundo.
    </p>

    <div class="w-full max-w-2xl flex rounded-full overflow-hidden shadow-lg">
      <input
        type="text"
        placeholder="Buscar patrones"
        class="flex-grow px-6 py-3 text-gray-700 focus:outline-none"
      />
      <button class="bg-green-500 text-white px-6 font-semibold hover:bg-green-600 transition">
        Buscar
      </button>
    </div>
  </div>
</header>
</template>
<style scoped>
.banner-con-imagen{
     background-image: linear-gradient(rgba(30, 45, 36, 0.8), rgba(30, 45, 36, 0.8)), 
        url('../assets/header.jpg');
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
     min-height: 400px; 
}
</style>