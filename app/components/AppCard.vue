<script setup>
    defineProps({
    title: String,
    image: String,
    authorName: String,
    authorImage: String,
    });
    
</script>
<template>

<div class="relative bg-white rounded-3xl shadow-md overflow-hidden
            transition-all duration-300 hover:shadow-xl hover:-translate-y-2">

    <!-- Imagen sin márgenes -->
    <div class="w-full h-56 overflow-hidden">
      <img 
        :src="image" 
        :alt="title"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Contenido -->
    <div class="p-4">
      <h3 class="text-xl font-semibold text-gray-800 leading-snug">
        {{ title }}
      </h3>
        <div class="flex gap-1 pt-2">
            <!-- Avatar circular pequeño -->
        <img
          :src="authorImage"
          :alt="authorName"
          class="w-6 h-6 rounded-full object-cover"
        />
            <p class="text-gray-500 mt-2 text-sm flex items-center gap-2"> {{ authorName  }}</p>
        </div>


      <button 
        class="mt-4 w-full bg-[#2c6f62] text-white py-2 rounded-xl hover:bg-[#4aa896] transition">
        Ver patrón
      </button>
    </div>

  </div>
</template>
