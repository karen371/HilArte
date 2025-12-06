<script setup>
  useSeoMeta({
    title: 'Patrones para Tejer | Inspírate y Crea',
    ogTitle: 'Patrones para Tejer | Inspírate y Crea',
    description: 'Encuentra miles de patrones de tejido creados por diseñadores. Inspírate y descubre tu próximo proyecto.',
    ogDescription: 'Encuentra miles de patrones de tejido creados por diseñadores. Inspírate y descubre tu próximo proyecto.',
    ogImage: 'https://tusitio.com/og-banner.jpg',
    twitterCard: 'summary_large_image',
  })
  import bufandaImage from '~/assets/img/bufanda.png';
  import anaImage from '~/assets/img/ana.png';
</script>

<template>
  <AppSection>
    <h1 class="text-3xl md:text-4xl font-extrabold text-gray-700 leading-tight text-shadow-lg">
      Patrones Destacados
    </h1>

    <div class="p-5 flex">

      <AppCard  
        title="Bufanda destello de luna"
        :image="bufandaImage"
        authorName="Ana Tejidos"
        :authorImage="anaImage"/>
      <AppCard
        title="Bufanda destello de luna"
       :image="bufandaImage"
        authorName="Ana Tejidos"
       :authorImage="anaImage"/>
      <AppCard
        title="Bufanda destello de luna"
        :image="bufandaImage"
        authorName="Ana Tejidos"
        :authorImage="anaImage"/>
      <AppCard
        title="Bufanda destello de luna"
        :image="bufandaImage"
        authorName="Ana Tejidos"
        :authorImage="anaImage"/>
    </div>
  </AppSection>
</template>