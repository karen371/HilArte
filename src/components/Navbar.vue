<script>
import logo from '../assets/logo-hilarte.png'

</script>
<template>
  <nav class="bg-white shadow-md py-3 px-6 flex items-center justify-between">
    <!-- IZQUIERDA -->
    <div class="flex items-center space-x-8">
      <!-- Logo y nombre -->
      <router-link to="/" class="flex items-center space-x-2">
        <img :src=logo alt="Logo" class="h-10 w-10 object-contain" />
        <span class="text-xl font-semibold text-gray-700">HilArte</span>
      </router-link>

      <!-- Menú -->
      <ul class="flex space-x-6 text-gray-600 font-medium">
        <li>
          <router-link to="/" class="hover:text-gray-900">Inicio</router-link>
        </li>
        <li>
          <router-link to="/patrones" class="hover:text-gray-900">Patrones</router-link>
        </li>
        <li>
          <router-link to="/disenadores" class="hover:text-gray-900">Diseñadores</router-link>
        </li>
        <li>
          <router-link to="/comunidad" class="hover:text-gray-900">Comunidad</router-link>
        </li>
      </ul>
    </div>

    <!-- DERECHA -->
    <div class="flex items-center space-x-4">
      <!-- Buscador -->
      <div class="relative">
        <input
          type="text"
          placeholder="Buscar..."
          class="border border-gray-300 rounded-full pl-10 pr-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <i class="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
      </div>

      <!-- Bolsa de compras -->
      <router-link to="/carrito" class="text-gray-600 hover:text-gray-900 text-xl">
        <i class="fas fa-shopping-bag"></i>
      </router-link>

      <!-- Iniciar sesión -->
      <router-link
        to="/login"
        class="text-gray-700 border border-gray-300 px-4 py-1.5 rounded-full hover:bg-gray-100"
      >
        Iniciar sesión
      </router-link>
    </div>
  </nav>
</template>

<script setup>
// No requiere lógica por ahora
</script>
