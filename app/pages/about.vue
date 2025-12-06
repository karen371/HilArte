<script setup>
//Cambia el encabezado de forma dinamica, se puede cambiar en cada una de las paginas disponibles
  useHead({
    title: 'My App',
    meta: [
      { name: 'description', content: 'My amazing site.' },
    ],
    bodyAttrs: {
      class: 'test',
    },
    script: [{ innerHTML: 'console.log(\'Hello world\')' }],
  })
</script>
<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
  </section>
</template>