<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>

  <div class="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white p-6 rounded-xl shadow-2xl max-w-sm text-center">
      
      <h1 class="text-3xl font-bold text-indigo-600 mb-4">
        ¡Tailwind Funcionando! 🎉
      </h1>

      <p class="text-gray-700 mb-6">
        Si ves este texto con bordes redondeados, sombra grande y el título morado, la configuración fue exitosa.
      </p>

      <button class="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
        Botón de Prueba
      </button>

    </div>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
