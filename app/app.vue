<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
    dir: "ltr",
  },
});
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
