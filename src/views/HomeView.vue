<script setup>
import Navbar from '../components/Navbar.vue'
import Header from '../components/Header.vue'
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>

  <Header />

</template>

<style scoped>

</style>
