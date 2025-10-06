<script setup>
import Navbar from '../components/Navbar.vue'
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>

  <Navbar />

</template>

<style scoped>

</style>
