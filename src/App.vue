<script setup lang="ts">
  import ErrorWindow from './components/ErrorWindow.vue';
  import NavigationComponent from './components/NavigationComponent.vue';
</script>

<template>
  <header>
    <NavigationComponent />
  </header>
  <main>
    <RouterView />
  </main>
  <aside>
    <ErrorWindow />
  </aside>
</template>

<style scoped>

</style>