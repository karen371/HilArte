<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>
<template>
  <nav class="bg-neutral-primary  w-full z-20 top-0 start-0 border-b border-default">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

      <!-- LOGO -->
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="~/assets/img/Alegreya.png" class="logo-img" alt="Hilarte Logo" />
      </a>

      <!-- Botón usuario -->
      <div class="flex items-center md:order-2 space-x-3">
        <button
          type="button"
          class="flex items-center justify-center w-10 h-10 rounded-full text-black hover:text-[#4aa896] transition-colors duration-200"
        >
          <span class="sr-only">Iniciar sesión</span>
          <Icon name="heroicons:user-circle" class="w-10 h-10" />
        </button>

        <!-- Botón hamburguesa (solo móvil) -->
        <button
          @click="toggleMenu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" d="M5 7h14M5 12h14M5 17h14"/>
          </svg>
        </button>
      </div>

      <!-- MENÚ MOBILE -->
      <div
        :class="['items-center justify-between w-full md:flex md:w-auto md:order-1', menuOpen ? 'block' : 'hidden']"
      >
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-neutral-primary">

          <!-- Página actual -->
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-[#2c6f62] border-b-2 border-[#2c6f62] md:border-0 md:border-b-2 md:border-[#2c6f62] md:p-0"
            >
              Inicio
            </a>
          </li>

          <!-- demás enlaces -->
          <li>
            <a href="#" class="block py-2 px-3 text-black hover:text-[#4aa896] md:p-0">
              Patrones
            </a>
          </li>

          <li>
            <a href="#" class="block py-2 px-3 text-black hover:text-[#4aa896] md:p-0">
              Diseñadores
            </a>
          </li>

          <li>
            <a href="#" class="block py-2 px-3 text-black hover:text-[#4aa896] md:p-0">
              Comunidad
            </a>
          </li>

          <li>
            <a href="#" class="block py-2 px-3 text-black hover:text-[#4aa896] md:p-0">
              Contacto
            </a>
          </li>

        </ul>
      </div>

    </div>
  </nav>
</template>

<style scoped>
.logo-img {
  height: 60px;
  width: 130px;
}
</style>
